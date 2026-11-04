import sys, pathlib
from playwright.sync_api import sync_playwright
src = pathlib.Path(sys.argv[1]).resolve(); out = sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1920, "height": 1080})
    pg.goto(src.as_uri())
    pg.wait_for_selector('body[data-ready="1"]', timeout=60000)
    print(pg.evaluate("[...document.fonts].map(f=>f.family+' '+f.weight+' '+f.status).join(', ')"))
    print('broken imgs:', pg.evaluate("[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src)"))
    # overflow check: any text element extending beyond its slide or overlapping the footer band
    print(pg.evaluate("""[...document.querySelectorAll('.slide')].map((s,i)=>{
      const r=s.getBoundingClientRect(); let bad=[];
      s.querySelectorAll('h1,h2,h3,p,li,span').forEach(e=>{const q=e.getBoundingClientRect(); if(!q.width) return;
        if(q.right>r.right-30||q.bottom>r.bottom-20) bad.push((e.textContent||'').trim().slice(0,30));});
      return 'slide '+(i+1)+': '+(bad.length?'OVERFLOW '+bad.join(' | '):'ok');}).join('\\n')"""))
    pg.pdf(path=out, width="1920px", height="1080px", print_background=True, margin={k: "0" for k in ("top","bottom","left","right")})
    b.close()
