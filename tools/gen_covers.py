# Generates original project cover illustrations (SVG -> WebP). Run: python3 tools/gen_covers.py
import sys, os
from playwright.sync_api import sync_playwright
from PIL import Image
W,H=1200,750
OUT=sys.argv[1]
def frame(c1,c2,body,id_):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
<defs>
<linearGradient id="bg{id_}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0c0e14"/><stop offset="1" stop-color="#141a22"/></linearGradient>
<radialGradient id="g1{id_}" cx=".2" cy=".15" r=".7"><stop offset="0" stop-color="{c1}" stop-opacity=".55"/><stop offset="1" stop-color="{c1}" stop-opacity="0"/></radialGradient>
<radialGradient id="g2{id_}" cx=".9" cy=".95" r=".7"><stop offset="0" stop-color="{c2}" stop-opacity=".5"/><stop offset="1" stop-color="{c2}" stop-opacity="0"/></radialGradient>
<linearGradient id="acc{id_}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{c1}"/><stop offset="1" stop-color="{c2}"/></linearGradient>
<pattern id="grid{id_}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
<filter id="blur{id_}"><feGaussianBlur stdDeviation="14"/></filter>
</defs>
<rect width="{W}" height="{H}" fill="url(#bg{id_})"/>
<rect width="{W}" height="{H}" fill="url(#g1{id_})"/><rect width="{W}" height="{H}" fill="url(#g2{id_})"/>
<rect width="{W}" height="{H}" fill="url(#grid{id_})"/>
{body}
</svg>'''
def card(x,y,w,h,r=24,op=.08):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="#fff" fill-opacity="{op}" stroke="#fff" stroke-opacity=".16"/>'
def A(i): return f'url(#acc{i})'

def hospital(i,c1,c2):
    return card(250,130,700,490,32)+f'''
<rect x="300" y="180" width="180" height="180" rx="40" fill="{A(i)}"/>
<path d="M390 215v110M335 270h110" stroke="#0c0e14" stroke-width="30" stroke-linecap="round"/>
<path d="M300 430h120l25-60 40 120 35-80 25 20h255" fill="none" stroke="{c2}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
{card(530,180,370,180,20,.07)}
<text x="560" y="225" font-family="Manrope,sans-serif" font-size="22" fill="#fff" fill-opacity=".7">Appointments</text>
'''+''.join(f'<rect x="{560+k*58}" y="{[300,270,320,250,285][k]}" width="34" height="{360-[300,270,320,250,285][k]-12}" rx="8" fill="{A(i)}" fill-opacity="{.5+k*.1}"/>' for k in range(5))+f'''
{card(300,500,280,70,18,.09)}<circle cx="338" cy="535" r="14" fill="{c2}"/><rect x="366" y="522" width="170" height="10" rx="5" fill="#fff" fill-opacity=".5"/><rect x="366" y="540" width="110" height="8" rx="4" fill="#fff" fill-opacity=".25"/>
{card(620,500,280,70,18,.09)}<circle cx="658" cy="535" r="14" fill="{c1}"/><rect x="686" y="522" width="170" height="10" rx="5" fill="#fff" fill-opacity=".5"/><rect x="686" y="540" width="110" height="8" rx="4" fill="#fff" fill-opacity=".25"/>'''
def grade(i,c1,c2):
    return card(220,150,760,460,32)+f'''
<g transform="translate(300 170)"><path d="M120 0L240 60 120 120 0 60z" fill="{A(i)}"/><path d="M50 95v60c0 25 140 25 140 0V95l-70 35z" fill="{c1}" fill-opacity=".75"/><path d="M240 60v70" stroke="{c2}" stroke-width="8" stroke-linecap="round"/><circle cx="240" cy="138" r="10" fill="{c2}"/></g>
{card(300,340,300,230,20,.07)}
'''+''.join(f'<rect x="{330+k*50}" y="{[470,430,490,400,440][k]}" width="32" height="{550-[470,430,490,400,440][k]}" rx="8" fill="{A(i)}" fill-opacity="{.45+k*.12}"/>' for k in range(5))+f'''
{card(640,200,290,370,20,.07)}
<rect x="670" y="235" width="140" height="14" rx="7" fill="#fff" fill-opacity=".6"/>
'''+''.join(f'<rect x="670" y="{285+k*52}" width="{[220,180,200,150,210][k]}" height="12" rx="6" fill="#fff" fill-opacity=".22"/><circle cx="905" cy="{291+k*52}" r="0"/>' for k in range(5))+f'''
<circle cx="860" cy="520" r="34" fill="none" stroke="{c2}" stroke-width="8"/><path d="M844 520l12 12 22-26" fill="none" stroke="{c2}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'''
def kinga(i,c1,c2):
    s=''
    for r in range(5):
        for k in range(9):
            x=120+k*120+(r%2)*40; y=470+r*55
            s+=f'<path d="M{x} {y}c-8-34 8-58 0-84c-14 22-14 52 0 84zM{x} {y}c22-16 36-34 32-62c-24 12-34 36-32 62z" fill="{c1}" fill-opacity="{.25+r*.1}"/>'
    return s+f'''
<g transform="translate(600 300)">
<path d="M-40 130c-80-30-120-110-70-190c70 10 120 80 70 190z" fill="{c1}" fill-opacity=".9"/>
<path d="M-40 130c20-90 20-150 0-230" fill="none" stroke="#0c0e14" stroke-width="5" stroke-opacity=".5"/>
<circle cx="-20" cy="10" r="16" fill="#0c0e14"/><circle cx="-20" cy="10" r="9" fill="{c2}"/>
<g stroke="{c2}" stroke-width="8" fill="none" stroke-linecap="round"><path d="M-170-150v-50h50M170-150v-50h-50M-170 230v50h50M170 230v50h-50" transform="translate(0 -50) scale(1 .85) translate(0 40)"/></g>
</g>
{card(800,160,250,90,20,.1)}<circle cx="845" cy="205" r="18" fill="{c2}"/><rect x="880" y="190" width="130" height="11" rx="5" fill="#fff" fill-opacity=".6"/><rect x="880" y="212" width="90" height="9" rx="4" fill="#fff" fill-opacity=".3"/>'''
def kingaweb(i,c1,c2):
    pts=[(300,440),(380,400),(450,430),(540,350),(630,380),(720,300),(820,330),(900,250)]
    d='M'+' L'.join(f'{x} {y}' for x,y in pts)
    return card(150,110,900,530,30)+f'''
<rect x="150" y="110" width="200" height="530" rx="30" fill="#fff" fill-opacity=".05"/>
'''+''.join(f'<rect x="180" y="{160+k*60}" width="{[120,100,130,90][k]}" height="14" rx="7" fill="#fff" fill-opacity="{.6 if k==0 else .25}"/>' for k in range(4))+f'''
{card(380,150,200,100,18,.08)}{card(600,150,200,100,18,.08)}{card(820,150,200,100,18,.08)}
<text x="404" y="215" font-family="Manrope,sans-serif" font-weight="800" font-size="40" fill="{c1}">142</text>
<text x="624" y="215" font-family="Manrope,sans-serif" font-weight="800" font-size="40" fill="{c2}">87%</text>
<text x="844" y="215" font-family="Manrope,sans-serif" font-weight="800" font-size="40" fill="#fff">23</text>
{card(380,280,640,330,18,.06)}
<path d="{d} L900 580 L300 580Z" fill="{A(i)}" fill-opacity=".18"/><path d="{d}" fill="none" stroke="{A(i)}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
'''+''.join(f'<circle cx="{x}" cy="{y}" r="8" fill="#0c0e14" stroke="{c2}" stroke-width="4"/>' for x,y in pts)
def pos(i,c1,c2):
    bars=''.join(f'<rect x="{340+k*14}" y="460" width="{[6,3,9,4,6,3,8,4,6,10,3,6][k]}" height="70" fill="#0c0e14"/>' for k in range(12))
    return card(160,120,520,520,32)+f'''
<rect x="210" y="170" width="420" height="70" rx="18" fill="{A(i)}"/><text x="240" y="217" font-family="Manrope,sans-serif" font-weight="800" font-size="34" fill="#0c0e14">TOTAL  KSh 4,250</text>
'''+''.join(f'<rect x="210" y="{275+k*48}" width="{[300,250,330,270][k]}" height="14" rx="7" fill="#fff" fill-opacity=".38"/><rect x="540" y="{275+k*48}" width="90" height="14" rx="7" fill="{c2}" fill-opacity=".7"/>' for k in range(4))+f'''
<rect x="210" y="470" width="420" height="120" rx="18" fill="#fff"/>{bars}
<g transform="translate(720 170)">
<path d="M0 90l150-70 150 70v170l-150 70-150-70z" fill="{c1}" fill-opacity=".85"/><path d="M0 90l150 70 150-70M150 160v170" fill="none" stroke="#0c0e14" stroke-opacity=".5" stroke-width="5"/>
<rect x="110" y="205" width="80" height="14" rx="7" fill="#0c0e14" fill-opacity=".45" transform="rotate(25 150 210)"/></g>
<g transform="translate(760 500)">{card(0,0,260,100,22,.1)}<circle cx="50" cy="50" r="22" fill="{c2}"/><rect x="90" y="34" width="130" height="12" rx="6" fill="#fff" fill-opacity=".6"/><rect x="90" y="56" width="80" height="10" rx="5" fill="#fff" fill-opacity=".3"/></g>'''
def rental(i,c1,c2):
    wins=''.join(f'<rect x="{430+c*80}" y="{200+r*85}" width="46" height="55" rx="8" fill="{c2 if (r+c)%3==0 else "#fff"}" fill-opacity="{.9 if (r+c)%3==0 else .22}"/>' for r in range(4) for c in range(4))
    return f'''
<rect x="90" y="610" width="1020" height="4" rx="2" fill="#fff" fill-opacity=".15"/>
<rect x="380" y="130" width="420" height="480" rx="26" fill="#fff" fill-opacity=".07" stroke="#fff" stroke-opacity=".18"/>{wins}
<rect x="540" y="540" width="100" height="70" rx="10" fill="{A(i)}"/>
<rect x="160" y="300" width="190" height="310" rx="22" fill="#fff" fill-opacity=".05" stroke="#fff" stroke-opacity=".12"/>
<rect x="850" y="260" width="200" height="350" rx="22" fill="#fff" fill-opacity=".05" stroke="#fff" stroke-opacity=".12"/>
<g transform="translate(900 160)"><circle cx="40" cy="40" r="40" fill="none" stroke="{A(i)}" stroke-width="16"/><path d="M80 40h110v34M150 40v28" stroke="{c1}" stroke-width="16" stroke-linecap="round" fill="none"/></g>
{card(130,150,250,90,20,.1)}<text x="158" y="200" font-family="Manrope,sans-serif" font-weight="800" font-size="30" fill="{c1}">KSh 15,000</text><text x="158" y="225" font-family="Manrope,sans-serif" font-size="16" fill="#fff" fill-opacity=".55">rent paid  ✓</text>'''
def nexus(i,c1,c2):
    nodes=[(600,280),(380,200),(820,190),(300,420),(900,400),(520,560),(700,540),(180,260),(1010,260)]
    edges=[(0,1),(0,2),(0,3),(0,4),(0,5),(0,6),(1,3),(2,4),(5,6),(1,7),(2,8),(3,5),(4,6),(7,3),(8,4)]
    s=''.join(f'<line x1="{nodes[a][0]}" y1="{nodes[a][1]}" x2="{nodes[b][0]}" y2="{nodes[b][1]}" stroke="{A(i)}" stroke-opacity=".5" stroke-width="3"/>' for a,b in edges)
    for k,(x,y) in enumerate(nodes):
        r=34 if k==0 else 16
        s+=f'<circle cx="{x}" cy="{y}" r="{r+14}" fill="{c1 if k%2 else c2}" fill-opacity=".14"/><circle cx="{x}" cy="{y}" r="{r}" fill="{A(i)}"/>'
    return s+f'''
<g stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-opacity=".9" transform="translate(600 280)"><path d="M-62-30v-32h32M62-30v-32h-32M-62 30v32h32M62 30v32h-32" transform="scale(1.2)"/></g>
<circle cx="600" cy="280" r="10" fill="#0c0e14"/>
{card(110,520,330,100,22,.1)}<text x="138" y="565" font-family="Manrope,sans-serif" font-weight="700" font-size="22" fill="#fff">Preference A  vs  B</text><rect x="138" y="580" width="120" height="10" rx="5" fill="{c1}"/><rect x="268" y="580" width="90" height="10" rx="5" fill="#fff" fill-opacity=".25"/>'''
specs=[('hospital',hospital,'#5eead4','#38bdf8'),('gradepoa',grade,'#f5c451','#fb923c'),('kinga',kinga,'#86efac','#facc15'),
('kinga-web',kingaweb,'#2dd4bf','#a3e635'),('pos',pos,'#fbbf24','#34d399'),('rental',rental,'#c4b5fd','#f472b6'),('nexusgrid',nexus,'#38bdf8','#a78bfa')]
os.makedirs(OUT,exist_ok=True)
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':W,'height':H})
    for n,fn,c1,c2 in specs:
        svg=frame(c1,c2,fn(n.replace('-',''),c1,c2),n.replace('-',''))
        pg.set_content(f'<html><body style="margin:0">{svg}</body></html>')
        pg.screenshot(path=f'{OUT}/{n}.png')
        Image.open(f'{OUT}/{n}.png').convert('RGB').resize((960,600),Image.LANCZOS).save(f'{OUT}/{n}.webp','WEBP',quality=82)
        os.remove(f'{OUT}/{n}.png')
    b.close()
# Kanz Bakery: collage of the bakery's own product photos from its repo
src=sys.argv[2]
ims=[Image.open(f'{src}/{f}').convert('RGB') for f in ['cake-1.jpg','bread-1.jpg','pastry-1.jpg']]
c=Image.new('RGB',(960,600),(12,14,20))
c.paste(ims[0].resize((600,600),Image.LANCZOS),(0,0))
c.paste(ims[1].crop((0,0,1024,1024)).resize((360,300),Image.LANCZOS),(600,0))
c.paste(ims[2].resize((360,300),Image.LANCZOS),(600,300))
c.save(f'{OUT}/kanz-bakery.webp','WEBP',quality=82)
print('ok')
