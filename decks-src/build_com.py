"""Build the commercial deck (com.html) from the investor deck's design system + landing copy.
Reuses investor sections s2, s3, s4, s5, s6, s8, s9 verbatim (with small commercial edits) and adds new slides.
python3 build_com.py
"""
import re, pathlib
src = pathlib.Path('deck.html').read_text(encoding='utf-8')
head = src[:src.index('</style>')]
tail_script = src[src.index('<script>'):]

def section(cls):
    m = re.search(r'<section class="slide ' + cls + r'[ "].*?</section>', src, flags=re.S)
    assert m, cls
    return m.group(0)

NEW_CSS = r"""
/* ================= commercial deck additions ================= */
.eyebrow-slide{position:absolute}
/* cover */
.c1 .brandmark{position:absolute;left:120px;top:110px;display:flex;align-items:center;gap:20px;font-family:var(--serif);font-size:54px;color:var(--ink)}
.c1 .kick{position:absolute;left:120px;top:330px;font-size:16px;letter-spacing:.08em;text-transform:uppercase;color:var(--pulse);font-weight:500}
.c1 h1{position:absolute;left:120px;top:380px;width:960px;font-size:104px}
.c1 .sub{position:absolute;left:120px;top:640px;width:760px;font-size:26px;line-height:1.45;color:var(--ink-60);font-weight:300}
.c1 .lead{position:absolute;left:120px;top:780px;width:760px;font-size:30px;font-family:var(--serif);color:var(--ink)}
.c1 .mk{position:absolute;right:-90px;top:110px;width:860px;height:860px}
.c1 .meta{position:absolute;left:120px;right:120px;bottom:56px;display:flex;justify-content:space-between;font-size:15px;color:var(--mist);border-top:1px solid var(--hair);padding-top:22px}
/* what we do */
.c5 h2{position:absolute;left:120px;top:190px;width:700px;font-size:84px}
.c5 .lead{position:absolute;left:120px;top:470px;width:680px}
.c5 .frame{position:absolute;left:900px;right:120px;top:230px;bottom:250px;border-radius:12px;overflow:hidden;border:1px solid var(--hair);background:url(mv/prodbg.svg) center/cover,#F6F8F7}
.c5 .frame .shot{left:36px;right:36px;top:36px;bottom:36px}
.c5 .frame .shot img{object-fit:contain;object-position:center}
.c5 .cap{position:absolute;left:900px;bottom:210px;font-size:17px;color:var(--ink)}
/* services */
.c6 h2{position:absolute;left:120px;top:150px}
.c6 .lead{position:absolute;left:120px;top:270px;width:1100px;font-size:24px}
.c6 .cols{position:absolute;left:120px;right:120px;top:360px;bottom:120px;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--hair-strong)}
.c6 .col{padding:30px 30px 0 0;border-right:1px solid var(--hair);margin-right:30px}
.c6 .col:last-child{border-right:0;margin-right:0}
.c6 .n{font-family:var(--serif);font-size:56px;line-height:1;color:var(--pulse)}
.c6 h3{font-family:var(--serif);font-weight:400;font-size:38px;margin-top:18px;line-height:1.05}
.c6 .b{font-size:20px;line-height:1.5;color:var(--ink);font-weight:300;margin-top:14px}
.c6 ul{list-style:none;margin-top:22px;border-top:1px solid var(--hair);padding-top:18px}
.c6 li{position:relative;padding-left:20px;margin-bottom:12px;font-size:17px;line-height:1.45;color:var(--ink-60);font-weight:300}
.c6 li::before{content:"";position:absolute;left:0;top:10px;width:6px;height:6px;border-radius:50%;background:var(--pulse)}
/* platform */
.c8 h2{position:absolute;left:120px;top:150px}
.c8 .list{position:absolute;left:120px;top:310px;width:960px;border-top:1px solid var(--hair-strong)}
.c8 .part{display:grid;grid-template-columns:210px 1fr;column-gap:30px;padding:22px 0;border-bottom:1px solid var(--hair)}
.c8 .nm{font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:var(--pulse);font-weight:500;padding-top:10px}
.c8 .sm{font-family:var(--serif);font-size:34px;line-height:1.12;color:var(--ink)}
.c8 .marks{grid-column:2;display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.c8 .marks span{font-size:14px;color:var(--ink-60);border:1px solid #CFD8DD;border-radius:999px;padding:5px 12px}
.c8 .viz{position:absolute;right:130px;top:290px;width:560px;height:560px;overflow:visible}
.c8 .tag.core{font-size:13px;color:var(--pulse-deep)}
.c8 .viz img{width:100%;height:100%;display:block}
.c8 .tag{position:absolute;font-size:15px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-60);white-space:nowrap}
.c8 .tag.c{color:var(--pulse)}
/* research */
.c10 h2{position:absolute;left:120px;top:170px;width:760px;font-size:80px}
.c10 .lead{position:absolute;left:120px;top:470px;width:740px;font-size:23px;line-height:1.6}
.c10 .frame{position:absolute;left:960px;right:120px;top:230px;bottom:250px;border-radius:12px;overflow:hidden;border:1px solid var(--hair);background:#F4EFE6}
.c10 .frame img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;background:#fff}
.c10 .cap{position:absolute;left:960px;bottom:210px;font-size:17px;color:var(--ink)}
/* contrast */
.c11 h2{position:absolute;left:120px;top:150px}
.c11 .tbl{position:absolute;left:120px;right:120px;top:340px}
.c11 .hd,.c11 .rw{display:grid;grid-template-columns:1fr 1fr;column-gap:80px}
.c11 .hd{padding-bottom:18px;border-bottom:1px solid var(--hair-strong)}
.c11 .hd span{font-size:15px;letter-spacing:.08em;text-transform:uppercase;font-weight:500;color:var(--mist)}
.c11 .hd span:last-child{color:var(--pulse)}
.c11 .rw{padding:30px 0;border-bottom:1px solid var(--hair);align-items:center}
.c11 .rw .u{font-size:26px;color:var(--mist);font-weight:300}
.c11 .rw .t{font-family:var(--serif);font-size:40px;line-height:1.1;color:var(--ink);display:flex;align-items:center;gap:22px}
.c11 .rw .t::before{content:"";flex:none;width:10px;height:10px;border-radius:50%;background:var(--pulse)}
/* who + industries */
.c12 h2{position:absolute;left:120px;top:170px;width:780px;font-size:84px}
.c12 .lead{position:absolute;left:120px;top:400px;width:740px}
.c12 .closer{position:absolute;left:120px;top:640px;width:740px;font-family:var(--serif);font-size:40px;line-height:1.15;color:var(--pulse)}
.c12 .ind{position:absolute;left:1040px;right:120px;top:170px}
.c12 .ind .kicker{color:var(--mist)}
.c12 .ind h3{font-family:var(--serif);font-weight:400;font-size:44px;margin-top:12px;line-height:1.05}
.c12 .ind ul{list-style:none;margin-top:30px;border-top:1px solid var(--hair-strong)}
.c12 .ind li{display:flex;justify-content:space-between;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--hair);font-family:var(--serif);font-size:40px;color:var(--ink)}
.c12 .ind li span{font-family:var(--sans);font-size:16px;color:var(--mist)}
/* trust */
.c14 h2{position:absolute;left:120px;top:150px;width:1300px}
.c14 .grid{position:absolute;left:120px;right:120px;top:400px;display:grid;grid-template-columns:repeat(3,1fr);column-gap:60px;row-gap:0}
.c14 .it{border-top:1px solid var(--hair-strong);padding:30px 0 44px}
.c14 .it .k{display:flex;align-items:center;gap:14px;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:var(--pulse);font-weight:500}
.c14 .it .k::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--pulse)}
.c14 .it p{font-family:var(--serif);font-size:34px;line-height:1.15;margin-top:16px;color:var(--ink)}
/* close */
.c16 .brandmark{position:absolute;left:120px;top:130px;display:flex;align-items:center;gap:18px;font-family:var(--serif);font-size:44px;color:var(--ink)}
.c16 h2{position:absolute;left:120px;top:290px;width:1000px;font-size:68px;line-height:1.08}
.c16 .lead{position:absolute;left:120px;top:620px;width:820px}
.c16 .cta{position:absolute;left:120px;top:790px;display:flex;align-items:center;gap:28px}
.c16 .cta .btn{background:var(--ink);color:#fff;border-radius:8px;padding:18px 30px;font-size:22px;font-weight:500}
.c16 .cta .mail{font-size:22px;color:var(--ink)}
.c16 .tagl{position:absolute;left:120px;bottom:120px;font-family:var(--serif);font-size:40px;color:var(--pulse)}
.c16 .mk{position:absolute;right:-90px;top:110px;width:860px;height:860px}
"""

top = lambda lab: f'<div class="top"><span class="lab">{lab}</span><span>NN / TT</span></div>'
foot = '<div class="foot"><span class="b" data-brand></span><span>Confidential</span></div>'

slides = []
# 1 cover (landing hero)
slides.append(f'''<section class="slide c1">
  <img class="mk" src="mv/markbig.svg" alt="">
  <div class="brandmark" data-bigbrand="62"></div>
  <p class="kick">For B2B companies</p>
  <h1>Human decisions as the engine of <span class="hl">growth</span>.</h1>
  <p class="sub">Profitability through an agentic strategy built on how people in the company already think and work.</p>
  <p class="lead">Four services. One core.</p>
  <div class="meta"><span>Commercial presentation · 2026</span><span>tacit.guru</span></div>
</section>''')
# 2 problem, 3 thesis, 4 core (investor slides)
slides.append(section('s3'))
slides.append(section('s2'))
slides.append(section('s4'))
# 5 what we do (landing premise)
slides.append(f'''<section class="slide c5">
  {top('What we do')}
  <h2>A clear picture first. <span class="hl">Agents later.</span></h2>
  <p class="lead">Tacit maps real communication, tools in use, and company knowledge. That picture lets you change how teams work. After that, we add a judgment layer so agents act like your best people, not empty chatbots.</p>
  <div class="frame"><div class="shot"><img src="assets/app/knowledge-profiles.png" alt=""></div></div>
  <p class="cap">Knowledge Type Map and Cognitive Competency Profile</p>
  {foot}
</section>''')
# 6 services (landing)
svc = [('01', 'Consulting layer', 'We see how your employees actually communicate and how they work day to day.',
        ['Which tools they use, what they are biased toward, and where to find bottlenecks.', 'That picture is extracted, so the next employee has no learning curve.', 'An inefficiency is caught as it is created. We act then, before the client complains.']),
       ('02', 'Implement agents', 'Agents are implemented from the real knowledge and the tacit workflows.',
        ['The source is the real knowledge and the tacit workflows.', 'An 80/20 thesis decides exactly where, how, and with whom.', 'The aim is to raise the company’s productivity and growth.']),
       ('03', 'Agent in the loop', 'An agent stays in the loop as the company is agentified.',
        ['The agent stays in the loop of the work.', 'Agentification can cover one area.', 'It can cover one process, or the operation as a whole.']),
       ('04', 'Higher SLA', 'Clients are asking for a higher SLA. Today the client is a black box, and that blocks high efficiency.',
        ['Tacit is integrated to understand the client’s behavior and knowledge.', 'The solutions have one aim: a higher SLA, and growth in the client relationship.'])]
cols = ''.join(f'<div class="col"><span class="n">{n}</span><h3>{t}</h3><p class="b">{b}</p><ul>{"".join(f"<li>{p}</li>" for p in pts)}</ul></div>' for n, t, b, pts in svc)
slides.append(f'''<section class="slide c6">
  {top('Services')}
  <h2>Four services. One <span class="hl">core</span>.</h2>
  <p class="lead">Every service starts from how the work really happens.</p>
  <div class="cols">{cols}</div>
  {foot}
</section>''')
# 7 method (investor s5, retitled so it does not clash with the four services)
s5 = section('s5').replace('<h2>Four services. One <span class="hl">sequence</span>.</h2>', '<h2>Four steps. One <span class="hl">sequence</span>.</h2>').replace('<span class="lab">The work</span>', '<span class="lab">How we work</span>')
assert 'Four steps. One' in s5
slides.append(s5)
# 8 platform (landing)
parts = [('Consulting', 'AI transformation is contingent on human workflows.', ['Human workflows', 'A defined place', 'Measurable value']),
         ('Agents', 'Simple, controllable agents at core points, then a human-agent symbiosis.', ['Simple and measurable', 'Core points', 'Quick results', 'Adoption']),
         ('Apps', 'Systems to centralize, evaluate, and manage their own operation, empowered by Tacit.', ['Centralize', 'Evaluate', 'Manage', 'Empowered by Tacit']),
         ('Development', 'Intelligent infrastructure through the Tacit layer, for the client’s core problems.', ['Core problems', 'Tacit layer', 'Intelligent infrastructure'])]
grid = ''.join(f'<div class="part"><p class="nm">{nm}</p><p class="sm">{sm}</p><div class="marks">{"".join(f"<span>{m}</span>" for m in mk)}</div></div>' for nm, sm, mk in parts)
slides.append(f'''<section class="slide c8">
  {top('Platform')}
  <h2>Four parts of the same <span class="hl">work</span>.</h2>
  <div class="list">{grid}</div>
  <div class="viz"><img src="mv/parts_ring.svg" alt="">
    <span class="tag c" style="left:280px;top:-6px;transform:translateX(-50%)">Consulting</span>
    <span class="tag" style="left:534px;top:270px">Agents</span>
    <span class="tag" style="left:280px;top:550px;transform:translateX(-50%)">Apps</span>
    <span class="tag" style="right:534px;top:270px">Development</span>
    <span class="tag core" style="left:280px;top:304px;transform:translateX(-50%)">One core</span>
  </div>
  {foot}
</section>''')
# 9 product (investor s6)
slides.append(section('s6'))
# efficiency premise (shared with the investor deck)
slides.append(section('e1'))
# 10 research (landing) with the Explore graph
slides.append(f'''<section class="slide c10">
  {top('Research')}
  <h2>An engine that understands organizations as they <span class="hl">are</span>.</h2>
  <p class="lead">An entrepreneurial and academic team, two engineers trained in neuroscience, artificial intelligence, and mathematics, is building an engine that joins complex systems, propositional logic, Bayesian theory, graph theory, LIWC, and modern theories of thought. It understands organizations as they are, and strengthens their digital transformation through agents.</p>
  <div class="frame"><img src="assets/app/product-graph-poster.png" alt=""></div>
  <p class="cap">Explore: the company as a knowledge graph</p>
  {foot}
</section>''')
# 11 contrast (landing)
rows = [('Buy tools or agents first', 'Start with the consulting layer'),
        ('Trust the org chart', 'See how people actually work, and which tools they use'),
        ('Agents everywhere', '80/20: exactly where, how, and with whom'),
        ('The client stays a black box', 'Understand them, then raise the SLA')]
tbl = '<div class="hd"><span>Usual path</span><span>With Tacit</span></div>' + ''.join(f'<div class="rw"><span class="u">{u}</span><span class="t">{t}</span></div>' for u, t in rows)
slides.append(f'''<section class="slide c11">
  {top('Contrast')}
  <h2>Usual path vs. <span class="hl">Tacit</span>.</h2>
  <div class="tbl">{tbl}</div>
  {foot}
</section>''')
# 12 who + industries (landing)
inds = ['Consulting', 'Professional services', 'Technology / IT Sourcing', 'Logistics', 'Fintech', 'Healthcare']
slides.append(f'''<section class="slide c12">
  {top('Who it’s for')}
  <h2>Who these services are <span class="hl">for</span>.</h2>
  <p class="lead">Complex operations that inherently have high turnover, depend entirely on a few highly experienced managers, or keep a delicate relationship with clients who need a higher level of service.</p>
  <p class="closer">Client efficiency is the goal. Yours improves with it.</p>
  <div class="ind"><p class="kicker">Industries</p><h3>The operations we work in.</h3><ul>{"".join(f"<li>{x}<span>{i:02d}</span></li>" for i, x in enumerate(inds, 1))}</ul></div>
  {foot}
</section>''')
# 13 clients (investor s8, note adapted for prospects)
s8 = section('s8').replace('<p>Six companies connected. Two are already paying.</p>', '<p>Companies already working with Tacit.</p>')
assert 'Companies already working with Tacit.' in s8
slides.append(s8)
# 14 trust (privacy policy, condensed; only claims the policy makes)
trust = [('Purpose', 'Built to capture knowledge, not to monitor people.'),
         ('People', 'Tacit does not evaluate individual performance or compare employees.'),
         ('Control', 'Employees can confirm, correct, or flag knowledge attributed to them.'),
         ('Security', 'Encryption in transit and at rest, with per-organization isolation on every query.'),
         ('Redaction', 'Customer-defined redaction before anything is stored.'),
         ('AI', 'Customer data is not used to train AI models. The knowledge engine is deterministic and auditable.')]
tg = ''.join(f'<div class="it"><p class="k">{k}</p><p>{p}</p></div>' for k, p in trust)
slides.append(f'''<section class="slide c14">
  {top('Trust')}
  <h2>Your knowledge stays <span class="hl">yours</span>.</h2>
  <div class="grid">{tg}</div>
  {foot}
</section>''')
# 15 team (investor s9)
slides.append(section('s9'))
# 16 close (landing close + CTA)
slides.append(f'''<section class="slide c16">
  <img class="mk" src="mv/markbig.svg" alt="">
  <div class="brandmark" data-bigbrand="50"></div>
  <h2>Start with how your team thinks and what they know, then turn that real experience into <span class="hl">profitable growth</span>.</h2>
  <p class="lead">Book a diagnostic. We start from the core, then deliver the service: consulting layer, agents, an agent in the loop, or a higher SLA.</p>
  <div class="cta"><span class="btn">Book a diagnostic</span><span class="mail">sales@tacit.guru · tacit.guru</span></div>
  <p class="tagl">Experience behind execution.</p>
</section>''')

N = len(slides)
out = []
for i, s in enumerate(slides, 1):
    s = re.sub(r'\b\d{2} / \d{2}\b', f'{i:02d} / {N}', s)
    s = s.replace('NN / TT', f'{i:02d} / {N}')
    out.append(s)
html = head + NEW_CSS + '</style>\n</head>\n<body>\n\n' + '\n\n'.join(out) + '\n\n' + tail_script
html = html.replace('<title>Tacit · Investor deck</title>', '<title>Tacit · Commercial deck</title>')
pathlib.Path('com.html').write_text(html, encoding='utf-8')
print('slides', N)
