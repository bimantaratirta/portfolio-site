/* Dark / light theme toggle (button wiring). Initial theme is set inline in <head> to avoid flash. */
(() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn');
  if(!btn) return;
  const apply = t => {
    root.dataset.theme = t;
    btn.setAttribute('aria-pressed', t === 'dark');
    try { localStorage.setItem('theme', t); } catch(e) {}
  };
  btn.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
