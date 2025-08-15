document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('beaconBtn');
  const headline = document.getElementById('headline');
  const sub = document.getElementById('sub');

  const HEADLINE_TEXT = 'Beacon Activated';
  const SUB_TEXT = 'This is Bowie to Warhol can you read me loud and clear man';

  function activate() {
    if (document.documentElement.dataset.state === 'active') return;
    document.documentElement.setAttribute('data-state', 'active');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Activated';
    btn.disabled = true;
    headline.textContent = HEADLINE_TEXT;
    sub.textContent = SUB_TEXT;
  }

  btn.addEventListener('click', activate, { passive: true });

  // If you ever want to support a query param auto-activation:
  // if (new URLSearchParams(location.search).get('auto') === '1') activate();
});
