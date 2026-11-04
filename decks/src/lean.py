"""Lean, hand-built line visuals for the Tacit deck (vector SVG, Tacit palette only).
python3 lean.py <outdir>
"""
import sys, pathlib, math
out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
INK, PULSE, DEEP, MIST, P10, P30 = '#18232E', '#1A9E78', '#147A5C', '#8A9BA8', '#E8F7F2', '#A9DCCB'
LINE = '#B9C4CB'          # hairline on white
LINE_D = '#3A4B57'        # hairline on ink
GLOW = '#4CC7A0'

def svg(w, h, body, bg=None):
    r = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">{r}{body}</svg>'
def save(n, s): (out / f'{n}.svg').write_text(s); print('ok', n)

# Tacit mark geometry (viewBox 0..100)
MARK = [(50, 84, 50, 48), (50, 48, 20, 18), (50, 48, 80, 18), (8, 18, 32, 18), (68, 18, 92, 18)]
def mark(x, y, size, col, sw):
    k = size / 100
    return ''.join(f'<line x1="{x + a * k:.1f}" y1="{y + b * k:.1f}" x2="{x + c * k:.1f}" y2="{y + d * k:.1f}" stroke="{col}" stroke-width="{sw}" stroke-linecap="round"/>' for a, b, c, d in MARK)

# ---------- cover / closing watermark: the mark drawn large and fine, with orbit rings at the junction
def markbig(w=900, h=900):
    size = 640; x0 = (w - size) / 2; y0 = (h - size) / 2 + 20
    jx, jy = x0 + 50 * size / 100, y0 + 48 * size / 100          # junction of the mark
    b = ''
    for r, op in [(120, .5), (210, .32), (300, .2), (390, .12)]:
        b += f'<circle cx="{jx:.1f}" cy="{jy:.1f}" r="{r}" fill="none" stroke="{PULSE}" stroke-opacity="{op}" stroke-width="1"/>'
    b += mark(x0, y0, size, PULSE, 2.2)
    b += f'<circle cx="{jx:.1f}" cy="{jy:.1f}" r="7" fill="{PULSE}"/>'
    # three small nodes resting on the inner orbits (people -> knowledge -> agents)
    save('markbig', svg(w, h, b))

# ---------- slide 2: the usual bet (tool stack, culture left disconnected)
def usual(w=826, h=230):
    b = ''
    cx, cy = 300, 128
    def plate(cy, fill, stroke):
        a, t = 120, 40
        return f'<polygon points="{cx - a},{cy} {cx},{cy - t} {cx + a},{cy} {cx},{cy + t}" fill="{fill}" stroke="{stroke}" stroke-width="1.3" stroke-linejoin="round"/>'
    for i, yy in enumerate([170, 140, 110, 80]):           # four stacked tools
        b += plate(yy, '#FFFFFF', '#7D8D98' if i < 3 else INK)
    # dashed path to an empty, unconnected circle (culture "hoped to follow")
    b += f'<path d="M445,128 L585,128" stroke="{MIST}" stroke-width="1.3" stroke-dasharray="4 6" fill="none"/>'
    b += f'<circle cx="640" cy="128" r="40" fill="none" stroke="{MIST}" stroke-width="1.3" stroke-dasharray="4 6"/>'
    save('usual', svg(w, h, b, '#FFFFFF'))

# ---------- slide 2: our bet (culture at the core, structure, then agents on the outer orbit)
def ourbet(w=826, h=230):
    cx, cy = 413, 118
    b = ''
    for r, op in [(34, 1), (68, .55), (104, .35)]:
        b += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{GLOW}" stroke-opacity="{op}" stroke-width="1.3"/>'
    b += f'<circle cx="{cx}" cy="{cy}" r="12" fill="{PULSE}"/>'
    for ang in [-160, -100, -40, 20, 80, 140]:               # agents on the outer orbit
        a = math.radians(ang)
        b += f'<circle cx="{cx + 104 * math.cos(a):.1f}" cy="{cy + 104 * math.sin(a):.1f}" r="5" fill="#18232E" stroke="{GLOW}" stroke-width="1.5"/>'
    for ang in [-70, 50, 170]:                                # structure on the middle orbit
        a = math.radians(ang)
        b += f'<circle cx="{cx + 68 * math.cos(a):.1f}" cy="{cy + 68 * math.sin(a):.1f}" r="3" fill="{GLOW}"/>'
    save('ourbet', svg(w, h, b, INK))

# ---------- slide 4: tech is a thin layer on a deep base of culture (isometric)
def layers(w=520, h=1000):
    """Agents / Tech / Operations / Culture: thin layers resting on a deep cultural base"""
    cx, a, t = 260, 180, 90
    def top(cy, fill, stroke, op=1):
        return f'<polygon points="{cx - a},{cy} {cx},{cy - t} {cx + a},{cy} {cx},{cy + t}" fill="{fill}" fill-opacity="{op}" stroke="{stroke}" stroke-width="1.3" stroke-linejoin="round"/>'
    def sides(cy, depth, fl, fr, stroke):
        return (f'<polygon points="{cx - a},{cy} {cx},{cy + t} {cx},{cy + t + depth} {cx - a},{cy + depth}" fill="{fl}" stroke="{stroke}" stroke-width="1.3" stroke-linejoin="round"/>'
                f'<polygon points="{cx},{cy + t} {cx + a},{cy} {cx + a},{cy + depth} {cx},{cy + t + depth}" fill="{fr}" stroke="{stroke}" stroke-width="1.3" stroke-linejoin="round"/>')
    ay, ty, oy, by, bd = 170, 320, 470, 630, 130
    b = ''
    # base: culture (deep block)
    b += sides(by, bd, DEEP, '#0F5E48', PULSE) + top(by, PULSE, GLOW)
    # vertical guides
    for x, y in [(cx - a, 0), (cx + a, 0), (cx, t)]:
        b += f'<line x1="{x}" y1="{ay + y}" x2="{x}" y2="{by + y}" stroke="{LINE_D}" stroke-width="1" stroke-dasharray="3 6"/>'
    # operations layer (thin, green-tinted: closest to culture)
    b += sides(oy, 10, '#173A35', '#12302C', '#2E8C70') + top(oy, '#1B4A40', GLOW, .95)
    # tech layer (thin)
    b += sides(ty, 10, '#24343F', '#1D2A35', '#8A9BA8') + top(ty, '#24343F', '#AFC0C9')
    # agents layer (thinnest, outlined only)
    b += sides(ay, 4, '#18232E', '#18232E', '#5E717D') + top(ay, '#18232E', '#7F909B')
    save('layers', svg(w, h, b))

# ---------- slide 5: one icon per service, same light style
def step1(w=390, h=210):   # Diagnostic: a lens finds where expertise lives in a field of activity
    b = ''
    for i in range(11):
        for j in range(5):
            x, y = 40 + i * 31, 40 + j * 32
            b += f'<circle cx="{x}" cy="{y}" r="2.2" fill="{INK}" fill-opacity=".22"/>'
    lx, ly = 40 + 6 * 31, 40 + 2 * 32
    for (i, j) in [(5, 1), (6, 2), (7, 2), (6, 3)]:
        b += f'<circle cx="{40 + i * 31}" cy="{40 + j * 32}" r="4" fill="{PULSE}"/>'
    b += f'<circle cx="{lx}" cy="{ly}" r="54" fill="none" stroke="{INK}" stroke-width="1.6"/>'
    b += f'<line x1="{lx + 38}" y1="{ly + 38}" x2="{lx + 72}" y2="{ly + 72}" stroke="{INK}" stroke-width="3" stroke-linecap="round"/>'
    save('step1', svg(w, h, b, '#FFFFFF'))

def step2(w=390, h=210):   # Change premises: scattered roles -> ordered structure
    b = ''
    s = 22
    scat = [(52, 58, -14), (96, 110, 9), (60, 150, 22), (120, 52, -28), (128, 150, 14)]
    for x, y, r in scat:
        b += f'<rect x="{x - s / 2}" y="{y - s / 2}" width="{s}" height="{s}" rx="3" fill="none" stroke="#7D8D98" stroke-width="1.4" transform="rotate({r} {x} {y})"/>'
    b += f'<line x1="168" y1="105" x2="214" y2="105" stroke="{INK}" stroke-width="1.4"/><polyline points="206,98 214,105 206,112" fill="none" stroke="{INK}" stroke-width="1.4"/>'
    grid = [(300, 58), (262, 105), (338, 105), (262, 152), (338, 152)]
    for k, (x, y) in enumerate(grid):
        f = PULSE if k == 0 else 'none'
        st = PULSE if k == 0 else INK
        b += f'<rect x="{x - s / 2}" y="{y - s / 2}" width="{s}" height="{s}" rx="3" fill="{f}" stroke="{st}" stroke-width="1.4"/>'
    b += f'<line x1="300" y1="70" x2="300" y2="84" stroke="{LINE}" stroke-width="1.2"/><line x1="262" y1="84" x2="338" y2="84" stroke="{LINE}" stroke-width="1.2"/>'
    b += f'<line x1="262" y1="84" x2="262" y2="94" stroke="{LINE}" stroke-width="1.2"/><line x1="338" y1="84" x2="338" y2="94" stroke="{LINE}" stroke-width="1.2"/>'
    save('step2', svg(w, h, b, '#FFFFFF'))

def step3(w=390, h=210):   # Core basic agents: know-how becomes a living layer (a pulse running through the tools)
    b = ''
    b += f'<rect x="40" y="70" width="310" height="70" rx="10" fill="{P10}" stroke="{P30}" stroke-width="1.2"/>'
    pts = [(40, 105), (120, 105), (138, 105), (150, 82), (164, 128), (178, 92), (190, 105), (250, 105), (262, 105), (272, 90), (284, 118), (294, 105), (350, 105)]
    b += '<polyline points="' + ' '.join(f'{x},{y}' for x, y in pts) + f'" fill="none" stroke="{PULSE}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'
    for x in [80, 220, 320]:                                   # the tools people already use, sitting on the layer
        b += f'<rect x="{x - 12}" y="36" width="24" height="18" rx="3" fill="#FFFFFF" stroke="{INK}" stroke-width="1.3"/>'
        b += f'<line x1="{x}" y1="54" x2="{x}" y2="70" stroke="{LINE}" stroke-width="1.2"/>'
    save('step3', svg(w, h, b, '#FFFFFF'))

def step4(w=390, h=210):   # Agentification: visible gain, then extend
    b = ''
    base = 185
    b += f'<line x1="40" y1="{base}" x2="350" y2="{base}" stroke="{LINE}" stroke-width="1.2"/>'
    bars = [(70, 38), (130, 56), (190, 79), (250, 104), (310, 133)]
    for k, (x, hh) in enumerate(bars):
        last = k >= 3
        b += f'<rect x="{x - 17}" y="{base - hh}" width="34" height="{hh}" rx="3" fill="{PULSE if last else "none"}" fill-opacity="{1 if k == 4 else .45 if last else 0}" stroke="{PULSE if last else INK}" stroke-width="1.4"/>'
    b += f'<polyline points="70,{base - 54} 130,{base - 72} 190,{base - 95} 250,{base - 120} 310,{base - 149}" fill="none" stroke="{INK}" stroke-width="1.2" stroke-dasharray="3 5"/>'
    b += f'<circle cx="310" cy="{base - 149}" r="5" fill="{PULSE}"/>'
    save('step4', svg(w, h, b, '#FFFFFF'))

markbig(); usual(); ourbet(); layers(); step1(); step2(); step3(); step4()

# ---------- commercial deck: four parts of the same work, stacked on a consulting base (white background)
def layers_light(w=520, h=900):
    cx, a, t = 260, 180, 90
    def top(cy, fill, stroke):
        return f'<polygon points="{cx - a},{cy} {cx},{cy - t} {cx + a},{cy} {cx},{cy + t}" fill="{fill}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>'
    def sides(cy, depth, fl, fr, stroke):
        return (f'<polygon points="{cx - a},{cy} {cx},{cy + t} {cx},{cy + t + depth} {cx - a},{cy + depth}" fill="{fl}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>'
                f'<polygon points="{cx},{cy + t} {cx + a},{cy} {cx + a},{cy + depth} {cx},{cy + t + depth}" fill="{fr}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>')
    ay, py, dy, by, bd = 130, 280, 430, 590, 130
    b = sides(by, bd, DEEP, '#0F5E48', PULSE) + top(by, PULSE, PULSE)
    for x, y in [(cx - a, 0), (cx + a, 0), (cx, t)]:
        b += f'<line x1="{x}" y1="{ay + y}" x2="{x}" y2="{by + y}" stroke="{LINE}" stroke-width="1" stroke-dasharray="3 6"/>'
    b += sides(dy, 10, '#D8EFE7', '#C6E6DA', '#7FBFA9') + top(dy, P10, '#4FAE8C')      # development
    b += sides(py, 10, '#E6EBEE', '#D9E0E4', '#9AA8B1') + top(py, '#F4F6F7', '#7D8D98')  # apps
    b += sides(ay, 4, '#FFFFFF', '#F4F6F7', '#7D8D98') + top(ay, '#FFFFFF', INK)          # agents
    save('layers_light', svg(w, h, b))

layers_light()

# ---------- commercial deck slide 8: four parts of one work, a ring split in four around one core
def parts_ring(w=560, h=560):
    cx, cy, R1, R0, gap = 280, 280, 230, 168, 3.5
    def seg(a0, a1, fill, stroke):
        a0, a1 = math.radians(a0 + gap / 2), math.radians(a1 - gap / 2)
        p = lambda r, a: (cx + r * math.cos(a), cy + r * math.sin(a))
        x1, y1 = p(R1, a0); x2, y2 = p(R1, a1); x3, y3 = p(R0, a1); x4, y4 = p(R0, a0)
        return (f'<path d="M{x1:.1f},{y1:.1f} A{R1},{R1} 0 0 1 {x2:.1f},{y2:.1f} L{x3:.1f},{y3:.1f} '
                f'A{R0},{R0} 0 0 0 {x4:.1f},{y4:.1f} Z" fill="{fill}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>')
    b = ''
    b += seg(-135, -45, PULSE, PULSE)            # top: Consulting (the base everything starts from)
    b += seg(-45, 45, '#FFFFFF', INK)            # right: Agents
    b += seg(45, 135, '#F4F6F7', '#7D8D98')      # bottom: Apps
    b += seg(135, 225, P10, '#4FAE8C')           # left: Development
    b += f'<circle cx="{cx}" cy="{cy}" r="112" fill="none" stroke="{LINE}" stroke-width="1" stroke-dasharray="3 6"/>'
    b += f'<circle cx="{cx}" cy="{cy}" r="58" fill="none" stroke="{PULSE}" stroke-width="1.4"/>'
    b += f'<circle cx="{cx}" cy="{cy}" r="10" fill="{PULSE}"/>'
    save('parts_ring', svg(w, h, b))

parts_ring()
