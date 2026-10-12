"""Pruebas sin acceso a Internet. pip install playwright y Chromium instalado."""
from pathlib import Path
from playwright.sync_api import sync_playwright
P = Path(__file__).resolve().parents[1]

def html(name):
    s = (P / name).read_text(encoding='utf-8')
    s = s.replace('<link rel="stylesheet" href="nexus.css">', '<style>' + (P / 'nexus.css').read_text() + '</style>')
    s = s.replace('<script src="nexus.js" defer></script><script type="module" src="nexus-online.js"></script>', '')
    s = s.replace('<script src="creator.js" type="module"></script>', '')
    return s

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path='/usr/bin/chromium', args=['--no-sandbox'])
    page = browser.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.set_content(html('nexus.html'))
    page.evaluate("""() => { const data={};Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:k=>data[k]||null,setItem:(k,v)=>data[k]=String(v),removeItem:k=>delete data[k]}}); }""")
    page.add_script_tag(content=(P / 'nexus.js').read_text())
    assert page.locator('#missionsGrid article').count() == 20
    assert page.locator('#shopGrid article').count() == 22
    page.locator('[data-action="mission:first"]').click()
    assert page.locator('#balance').inner_text() == '45'
    page.locator('[data-action="mission:first"]').evaluate('el => el.click()')
    assert page.locator('#balance').inner_text() == '45', 'a mission was rewarded twice'
    page.locator('[data-tab="capsules"]').click()
    page.locator('[data-action="capsule:basic:banner-stars"]').click()
    page.locator('[data-tab="inventory"]').click()
    assert page.locator('#inventoryGrid article').count() == 1
    assert not errors, errors
    print('NEXUS PASS: 20 missions, 22 items, idempotent mission, capsule inventory')
    c = browser.new_page()
    e2 = []
    c.on('pageerror', lambda e: e2.append(str(e)))
    c.set_content(html('creator.html'))
    c.add_script_tag(type='module', content=(P / 'creator.js').read_text())
    frame = c.frame_locator('#preview')
    assert frame.locator('#score').inner_text(timeout=4000) == '0'
    frame.locator('#star').click()
    assert frame.locator('#score').inner_text() == '1'
    assert c.locator('#preview').get_attribute('sandbox') == 'allow-scripts'
    assert not e2, e2
    print('CREATOR PASS: isolated game preview and user interaction')
    browser.close()
