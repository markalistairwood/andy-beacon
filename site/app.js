document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('beaconBtn');
  const headline = document.getElementById('headline');
  const sub = document.getElementById('sub');

  const HEADLINE_TEXT = 'Beacon Activated';
  const SUB_TEXTS = [
    'This is Bowie to Andy do you read me loud and clear man?',
    'How far out are you now?',
    "That's pretty far out man",
  ];
  let subIndex = 0;

  function cycleSubText() {
    subIndex = (subIndex + 1) % SUB_TEXTS.length;
    sub.style.animation = 'none';
    sub.textContent = SUB_TEXTS[subIndex];
    sub.style.clipPath = 'inset(0% 100% 0% 0)';
    // force reflow to allow animation restart
    void sub.offsetWidth;
    sub.style.animation = '';
    sub.style.clipPath = '';
  }

  function activate() {
    if (document.documentElement.dataset.state === 'active') return;
    document.documentElement.setAttribute('data-state', 'active');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Activated';
    btn.disabled = true;
    headline.textContent = HEADLINE_TEXT;
    sub.textContent = SUB_TEXTS[subIndex];
    setInterval(cycleSubText, 5000);
  }

  btn.addEventListener('click', activate, { passive: true });

  // If you ever want to support a query param auto-activation:
  // if (new URLSearchParams(location.search).get('auto') === '1') activate();
});
