/* OpenTubeForge launch v1. Keyboard-safe FAQ and scroll state; no network. */
(() => {
  'use strict';
  const details = [...document.querySelectorAll('.questions details')];
  for (const item of details) {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      for (const other of details) if (other !== item) other.open = false;
    });
  }
  const header = document.querySelector('.topbar');
  let ticking = false;
  const update = () => {
    ticking = false;
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  update();
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, {passive: true});
})();
