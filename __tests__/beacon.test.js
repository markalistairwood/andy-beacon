const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('beacon activation', () => {
  function setupDom() {
    const html = fs.readFileSync(path.join(__dirname, '../site/index.html'), 'utf8');
    const dom = new JSDOM(html, { runScripts: 'outside-only' });
    const script = fs.readFileSync(path.join(__dirname, '../site/app.js'), 'utf8');
    dom.window.eval(script);
    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded', { bubbles: true }));
    return dom.window;
  }

  test('clicking Activate Beacon triggers active state', () => {
    const window = setupDom();
    const btn = window.document.getElementById('beaconBtn');
    btn.dispatchEvent(new window.Event('click', { bubbles: true }));

    expect(window.document.documentElement.dataset.state).toBe('active');
    expect(btn.getAttribute('aria-pressed')).toBe('true');
    expect(btn.textContent).toBe('Activated');
    expect(btn.disabled).toBe(true);
    expect(window.document.getElementById('headline').textContent).toBe('Beacon Activated');
    expect(window.document.getElementById('sub').textContent).toBe('This is Bowie to Warhol can you read me loud and clear man');
  });
});
