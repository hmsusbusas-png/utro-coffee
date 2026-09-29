// Утро: появление блоков и небольшая мобильная навигация.
const nav = document.querySelector('.nav');
const burger = document.getElementById('nav-burger');

if (nav && burger) {
  const setMenu = (open) => {
    nav.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  };

  burger.addEventListener('click', () => setMenu(!nav.classList.contains('nav-open')));
  nav.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('nav-open')) {
      setMenu(false);
      burger.focus();
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
