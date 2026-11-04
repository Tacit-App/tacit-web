"""Mathematical / engine visuals for the Tacit deck, as vector SVG.
Concepts drawn (all from the Tacit engine reference):
  - embedding projection of knowledge objects, clustered by type (12 KO types)
  - isodensity contours, macro-process centroids c(mp) = mean of member embeddings
  - assignment edges argmax cos(v, c_i) >= 0.75, drawn as bundled hairline curves
  - Voronoi partition of centroids
  - Beta(alpha, beta) validity posteriors with tau = 0.60
python3 mathviz.py <outdir>
"""
import sys, pathlib, math, numpy as np
from scipy.ndimage import gaussian_filter
from scipy.spatial import Voronoi, cKDTree
from scipy.stats import beta as betad
from skimage.measure import find_contours

out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
INK, INK2, PULSE, DEEP, MIST, MISTL, P10, P30 = '#18232E', '#24343F', '#1A9E78', '#147A5C', '#8A9BA8', '#C7D1D7', '#E8F7F2', '#A9DCCB'
GLOW = '#4CC7A0'

def svg(w, h, body, bg=None):
    r = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">{r}{body}</svg>'

def save(name, s): (out / f'{name}.svg').write_text(s); print('ok', name, len(s) // 1024, 'KB')

def clusters(rng, w, h, k, n, pad=.1, spread=(.035, .075), centers=None):
    if centers is None:
        # well separated centres (Poisson-ish)
        centers = []
        while len(centers) < k:
            c = np.array([rng.uniform(pad, 1 - pad) * w, rng.uniform(pad, 1 - pad) * h])
            if all(np.linalg.norm(c - d) > min(w, h) * .22 for d in centers): centers.append(c)
        centers = np.array(centers)
    pts, lab = [], []
    for i, c in enumerate(centers):
        m = int(n * rng.uniform(.6, 1.4) / k)
        s = rng.uniform(*spread) * min(w, h) * 2
        cov = np.array([[s * s * rng.uniform(.6, 1.6), rng.uniform(-.4, .4) * s * s], [0, 0]]); cov[1] = [cov[0, 1], s * s * rng.uniform(.6, 1.6)]
        p = rng.multivariate_normal(c, cov, m)
        pts.append(p); lab += [i] * m
    pts = np.vstack(pts); lab = np.array(lab)
    keep = (pts[:, 0] > 4) & (pts[:, 0] < w - 4) & (pts[:, 1] > 4) & (pts[:, 1] < h - 4)
    return pts[keep], lab[keep], centers

def density_contours(pts, w, h, levels, sigma=26, res=3):
    gw, gh = int(w / res), int(h / res)
    H, _, _ = np.histogram2d(pts[:, 1] / res, pts[:, 0] / res, bins=[gh, gw], range=[[0, gh], [0, gw]])
    D = gaussian_filter(H, sigma / res); D /= D.max()
    paths = []
    for lv in levels:
        for c in find_contours(D, lv):
            if len(c) < 12: continue
            c = c[::2] * res
            d = 'M' + ' L'.join(f'{x:.1f},{y:.1f}' for y, x in c)
            paths.append((lv, d))
    return paths

def dots(pts, colors, rs, ops):
    return ''.join(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="{c}" fill-opacity="{o:.2f}"/>' for (x, y), c, r, o in zip(pts, colors, rs, ops))

def bundle(p, c, hub, pull=.35):
    """quadratic curve from p to c, control point pulled toward a hub -> bundled flow"""
    m = (p + c) / 2; ctrl = m + (hub - m) * pull
    return f'M{p[0]:.1f},{p[1]:.1f} Q{ctrl[0]:.1f},{ctrl[1]:.1f} {c[0]:.1f},{c[1]:.1f}'

def crosshair(c, col, s=9, sw=1.2):
    """refined centroid marker: thin ring + solid dot"""
    x, y = c
    return (f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{s * .95:.1f}" fill="none" stroke="{col}" stroke-width="{sw * .8:.2f}" stroke-opacity=".7"/>'
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{max(2.2, s * .32):.1f}" fill="{col}"/>')

def voronoi_lines(centers, w, h, col, op, sw=1):
    far = np.array([[-w, -h], [3 * w, -h], [-w, 3 * h], [3 * w, 3 * h]])
    vor = Voronoi(np.vstack([centers, far]))
    segs = []
    for (a, b) in vor.ridge_vertices:
        if a < 0 or b < 0: continue
        p, q = vor.vertices[a], vor.vertices[b]
        segs.append(f'M{p[0]:.1f},{p[1]:.1f} L{q[0]:.1f},{q[1]:.1f}')
    return f'<path d="{" ".join(segs)}" stroke="{col}" stroke-opacity="{op}" stroke-width="{sw}" fill="none" stroke-dasharray="2 5"/>'

def grid_dots(w, h, step, col, op):
    return ''.join(f'<circle cx="{x}" cy="{y}" r="0.9" fill="{col}" fill-opacity="{op}"/>' for x in range(step, w, step) for y in range(step, h, step))

# ------------------------------------------------------------------ 1. hero (dark, wide)
def hero(w=1840, h=560, seed=4):
    rng = np.random.default_rng(seed)
    pts, lab, C = clusters(rng, w, h, 12, 4200, pad=.07, spread=(.035, .065))
    hub = np.array([w * .5, h * .5])
    b = ''
    for lv, d in density_contours(pts, w, h, [.08, .18, .32, .5, .7], sigma=30):
        b += f'<path d="{d}" fill="none" stroke="{MIST}" stroke-opacity="{.18 + lv * .45:.2f}" stroke-width="1"/>'
    # centroid-to-centroid bundled links (macro-process relations)
    tree = cKDTree(C)
    for i, c in enumerate(C):
        for j in tree.query(c, 4)[1][1:]:
            if j > i: b += f'<path d="{bundle(c, C[j], hub, .45)}" fill="none" stroke="{GLOW}" stroke-opacity=".35" stroke-width="1"/>'
    # assignment edges (sampled) p -> c(lab)
    idx = rng.choice(len(pts), 900, replace=False)
    e = ' '.join(bundle(pts[i], C[lab[i]], hub, .12) for i in idx)
    b += f'<path d="{e}" fill="none" stroke="{GLOW}" stroke-opacity=".08" stroke-width=".6"/>'
    hi = rng.random(len(pts)) < .07
    cols = np.where(hi, GLOW, '#DCE3E7'); rs = np.where(hi, 1.9, rng.uniform(.8, 1.5, len(pts))); ops = np.where(hi, .95, rng.uniform(.25, .75, len(pts)))
    b += dots(pts, cols, rs, ops)
    for c in C: b += crosshair(c, GLOW, 8, 1.1)
    save('hero', svg(w, h, b, INK))
    return C

# ------------------------------------------------------------------ 2. thesis pair
def thesis(w=860, h=470):
    rng = np.random.default_rng(9)
    pts, lab, C = clusters(rng, w, h, 5, 700, pad=.15, spread=(.03, .05))
    # usual bet: same mass, unstructured noise on white
    noise = np.column_stack([rng.uniform(10, w - 10, len(pts)), rng.uniform(10, h - 10, len(pts))])
    b = dots(noise, [MIST] * len(noise), rng.uniform(.9, 1.6, len(noise)), rng.uniform(.25, .6, len(noise)))
    save('usual', svg(w, h, b))
    # our bet: structured, on ink
    hub = np.array([w / 2, h / 2]); b = ''
    for lv, d in density_contours(pts, w, h, [.1, .25, .45, .7], sigma=22):
        b += f'<path d="{d}" fill="none" stroke="{MIST}" stroke-opacity="{.12 + lv * .35:.2f}" stroke-width=".9"/>'
    e = ' '.join(bundle(p, C[l], hub, .1) for p, l in zip(pts, lab))
    b += f'<path d="{e}" fill="none" stroke="{GLOW}" stroke-opacity=".12" stroke-width=".7"/>'
    b += dots(pts, ['#DCE3E7'] * len(pts), rng.uniform(.9, 1.5, len(pts)), rng.uniform(.35, .8, len(pts)))
    for i, c in enumerate(C):
        for j in range(i + 1, len(C)): b += f'<path d="{bundle(c, C[j], hub, .5)}" fill="none" stroke="{GLOW}" stroke-opacity=".28" stroke-width="1"/>'
    for c in C: b += crosshair(c, GLOW, 8)
    save('ourbet', svg(w, h, b))

# ------------------------------------------------------------------ 3. problem: Voronoi map with 9 labelled centroids
def problem(w=900, h=1000):
    rng = np.random.default_rng(21)
    centers = np.array([[230, 140], [600, 230], [300, 360], [690, 450], [180, 560], [520, 640], [260, 790], [640, 850], [400, 930]], float)
    pts, lab, C = clusters(rng, w, h, 9, 1700, spread=(.03, .05), centers=centers)
    hub = np.array([w / 2, h / 2]); b = grid_dots(w, h, 30, INK, .10)
    b += voronoi_lines(C, w, h, INK, .35, 1)
    for lv, d in density_contours(pts, w, h, [.12, .3, .55], sigma=22):
        b += f'<path d="{d}" fill="none" stroke="{PULSE}" stroke-opacity="{.15 + lv * .4:.2f}" stroke-width=".9"/>'
    e = ' '.join(bundle(p, C[l], hub, .08) for p, l in zip(pts[::3], lab[::3]))
    b += f'<path d="{e}" fill="none" stroke="{INK}" stroke-opacity=".06" stroke-width=".6"/>'
    b += dots(pts, [INK] * len(pts), rng.uniform(.8, 1.4, len(pts)), rng.uniform(.25, .6, len(pts)))
    for c in C: b += crosshair(c, PULSE, 8, 1.3)
    save('problem', svg(w, h, b, '#FBFCFB'))
    return C

# ------------------------------------------------------------------ 4. core: Beta posteriors sharpening around the validity threshold
def core(w=520, h=1000):
    b = ''
    L, R, T, B = 50, w - 40, 140, h - 170
    X = lambda x: L + x * (R - L)
    b += f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{MIST}" stroke-opacity=".5" stroke-width="1"/>'
    for t in np.linspace(0, 1, 11):
        b += f'<line x1="{X(t):.1f}" y1="{B}" x2="{X(t):.1f}" y2="{B + (10 if t in (0, .5, 1) else 5)}" stroke="{MIST}" stroke-opacity=".6"/>'
    # tau = 0.60 and theta0 = 0.30
    b += f'<line x1="{X(.6):.1f}" y1="{T - 40}" x2="{X(.6):.1f}" y2="{B}" stroke="{GLOW}" stroke-width="1.2"/>'
    b += f'<line x1="{X(.3):.1f}" y1="{T - 40}" x2="{X(.3):.1f}" y2="{B}" stroke="{MIST}" stroke-width="1" stroke-dasharray="3 5"/>'
    # posterior sequence: evidence accumulates -> curve sharpens past tau
    seq = [(1, 1), (2, 1.5), (3, 2), (5, 2.5), (8, 3), (13, 4), (21, 6), (34, 9)]
    xs = np.linspace(.001, .999, 400)
    for k, (a, bb) in enumerate(seq):
        pdf = betad.pdf(xs, a, bb)
        ys = pdf / pdf.max() * (.28 + .72 * k / (len(seq) - 1))
        last = k == len(seq) - 1
        d = 'M' + ' L'.join(f'{X(x):.1f},{B - y * (B - T):.1f}' for x, y in zip(xs, ys))
        if last:
            m = xs >= .6
            fill = f'M{X(.6):.1f},{B} L' + ' L'.join(f'{X(x):.1f},{B - y * (B - T):.1f}' for x, y in zip(xs[m], ys[m])) + f' L{X(xs[m][-1]):.1f},{B} Z'
            b += f'<path d="{fill}" fill="{PULSE}" fill-opacity=".22"/>'
        b += f'<path d="{d}" fill="none" stroke="{GLOW if last else "#DCE3E7"}" stroke-opacity="{1 if last else .22 + k * .08:.2f}" stroke-width="{2 if last else 1}"/>'
    save('core', svg(w, h, b))
    return dict(L=L, R=R, T=T, B=B)

# ------------------------------------------------------------------ 5. four-step sequence
def steps(w=400, h=230):
    rng = np.random.default_rng(31)
    pts, lab, C = clusters(rng, w, h, 4, 320, pad=.2, spread=(.05, .07))
    hub = np.array([w / 2, h / 2])
    base = lambda op=.55: dots(pts, [INK] * len(pts), [1.1] * len(pts), [op] * len(pts))
    # 01 observe: raw points + dot grid
    save('step1', svg(w, h, grid_dots(w, h, 20, INK, .12) + base(.45)))
    # 02 restructure: Voronoi partition of centroids
    save('step2', svg(w, h, voronoi_lines(C, w, h, INK, .5, 1) + base(.5) + ''.join(crosshair(c, PULSE, 6, 1.1) for c in C)))
    # 03 living layer: kNN graph inside clusters (cos >= 0.75 assignment)
    b = ''
    for lv, d in density_contours(pts, w, h, [.15, .3, .5, .72], sigma=14, res=2):
        b += f'<path d="{d}" fill="none" stroke="{PULSE}" stroke-opacity="{.25 + lv * .6:.2f}" stroke-width="1"/>'
    e = ' '.join(bundle(p, C[l], hub, .08) for p, l in zip(pts, lab))
    b += f'<path d="{e}" fill="none" stroke="{PULSE}" stroke-opacity=".10" stroke-width=".6"/>' + base(.55)
    b += ''.join(crosshair(c, PULSE, 6, 1.1) for c in C)
    save('step3', svg(w, h, b))
    # 04 agentification: centroids feed directed flows to an agent node
    agent = np.array([w - 26, h / 2]); b = ''
    e = ' '.join(bundle(p, C[l], hub, .1) for p, l in zip(pts, lab))
    b += f'<path d="{e}" fill="none" stroke="{GLOW}" stroke-opacity=".18" stroke-width=".6"/>'
    b += dots(pts, ['#DCE3E7'] * len(pts), [1.1] * len(pts), [.6] * len(pts))
    for c in C:
        b += f'<path d="{bundle(c, agent, np.array([w * .7, h / 2]), .6)}" fill="none" stroke="{GLOW}" stroke-width="1.3"/>'
        b += crosshair(c, GLOW, 6, 1.1)
    b += f'<circle cx="{agent[0]}" cy="{agent[1]}" r="9" fill="{PULSE}"/><circle cx="{agent[0]}" cy="{agent[1]}" r="15" fill="none" stroke="{GLOW}" stroke-opacity=".6"/>'
    save('step4', svg(w, h, b, INK))

# ------------------------------------------------------------------ 6. product backdrop
def product_bg(w=880, h=330):
    rng = np.random.default_rng(41)
    pts, lab, C = clusters(rng, w, h, 5, 900, pad=.1, spread=(.05, .09))
    b = grid_dots(w, h, 22, INK, .10)
    for lv, d in density_contours(pts, w, h, [.1, .25, .45, .7], sigma=26):
        b += f'<path d="{d}" fill="none" stroke="{PULSE}" stroke-opacity="{.12 + lv * .3:.2f}" stroke-width=".9"/>'
    save('prodbg', svg(w, h, b, '#F6F8F7'))

# ------------------------------------------------------------------ 7. roadmap curve
def roadmap(w=1680, h=220):
    xs = np.linspace(0, 1, 300)
    f = lambda x: 1 / (1 + np.exp(-8 * (x - .5)))
    y0, y1 = h - 1, 26
    d = 'M' + ' L'.join(f'{x * w:.1f},{y0 - f(x) * (y0 - y1):.1f}' for x in xs)
    b = grid_dots(w, h, 28, INK, .09)
    fill = d + f' L{w},{y0} L0,{y0} Z'
    b += f'<path d="{fill}" fill="{PULSE}" fill-opacity=".07"/><path d="{d}" fill="none" stroke="{PULSE}" stroke-width="2"/>'
    stops = [x / w for x in (6, 342, 678, 1014, 1350)]   # = left edge of each timeline column
    for i, sx in enumerate(stops):
        y = y0 - f(sx) * (y0 - y1)
        b += f'<line x1="{sx * w:.1f}" y1="{y:.1f}" x2="{sx * w:.1f}" y2="{y0}" stroke="{INK}" stroke-opacity=".2" stroke-dasharray="2 4"/>'
        if i == 2: b += f'<circle cx="{sx * w:.1f}" cy="{y:.1f}" r="16" fill="{PULSE}" fill-opacity=".18"/><circle cx="{sx * w:.1f}" cy="{y:.1f}" r="7" fill="{PULSE}"/>'
        else: b += f'<circle cx="{sx * w:.1f}" cy="{y:.1f}" r="5.5" fill="#fff" stroke="{INK}" stroke-width="1.5"/>'
    save('roadmap', svg(w, h, b))
    return [s * w for s in stops]

# ------------------------------------------------------------------ 11. convergence into one centroid
def horizon(w=780, h=1000):
    rng = np.random.default_rng(55)
    pts, lab, C = clusters(rng, w, h, 7, 1900, pad=.1, spread=(.035, .06))
    hub = np.array([w * .5, h * .5]); b = grid_dots(w, h, 30, DEEP, .12)
    for lv, d in density_contours(pts, w, h, [.1, .25, .45], sigma=26):
        b += f'<path d="{d}" fill="none" stroke="{DEEP}" stroke-opacity="{.12 + lv * .3:.2f}" stroke-width=".9"/>'
    e = ' '.join(bundle(p, C[l], hub, .1) for p, l in zip(pts[::2], lab[::2]))
    b += f'<path d="{e}" fill="none" stroke="{DEEP}" stroke-opacity=".08" stroke-width=".6"/>'
    b += dots(pts, [INK] * len(pts), rng.uniform(.8, 1.4, len(pts)), rng.uniform(.2, .55, len(pts)))
    for c in C:
        b += f'<path d="{bundle(c, hub, np.array([w * .5, h * .2]), .35)}" fill="none" stroke="{PULSE}" stroke-width="1.4" stroke-opacity=".85"/>'
        b += crosshair(c, DEEP, 7, 1.1)
    b += f'<circle cx="{hub[0]}" cy="{hub[1]}" r="34" fill="{PULSE}" fill-opacity=".12"/><circle cx="{hub[0]}" cy="{hub[1]}" r="11" fill="{PULSE}"/>'
    save('horizon', svg(w, h, b, P10))

hero(); thesis(); problem(); core(); steps(); product_bg(); roadmap(); horizon()
