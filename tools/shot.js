const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const errs = [];
  for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const pg = await b.newPage({ viewport: vp });
    pg.on('console', m => { if (['error','warning'].includes(m.type())) errs.push(name+': '+m.text()); });
    pg.on('pageerror', e => errs.push(name+' pageerror: '+e.message));
    pg.on('requestfailed', r => { if (!r.url().includes('fonts.g')) errs.push('reqfail '+r.url()); });
    await pg.goto('http://localhost:4173', { waitUntil: 'load' });
    await pg.waitForTimeout(1200);
    // scroll through to trigger reveals
    const h = await pg.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += 500) { await pg.evaluate(y => window.scrollTo(0, y), y); await pg.waitForTimeout(120); }
    await pg.evaluate(() => window.scrollTo(0, 0)); await pg.waitForTimeout(500);
    const sw = await pg.evaluate(() => document.documentElement.scrollWidth);
    console.log(name, 'height', h, 'scrollWidth', sw, 'vw', vp.width);
    await pg.screenshot({ path: `/home/claude/work/${name}-full.png`, fullPage: true });
    if (name === 'desktop') {
      const bad = await pg.evaluate(() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
      console.log('broken images:', bad);
      const hrefs = await pg.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')));
      console.log([...new Set(hrefs)].join('\n'));
      await pg.click('text=AI & Data'); await pg.waitForTimeout(900);
      console.log('cards after AI filter:', await pg.locator('article').count());
    }
  }
  console.log('console issues:', errs);
  await b.close();
})();
