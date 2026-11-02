// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const links = document.getElementById('links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Highlight the nav link of the section currently in view
const navLinks = [...links.querySelectorAll('a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && io.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress bar and nav shadow
const bar = document.querySelector('.progress');
const nav = document.querySelector('.nav');
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
  nav.classList.toggle('scrolled', scrollY > 20);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal elements as they scroll into view
const items = document.querySelectorAll('.sec h2, .prose, .skills > div, .card, .edu, .contact, .sec .btn');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rv = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); }
  }), { threshold: 0.12 });
  items.forEach(el => { el.classList.add('reveal'); rv.observe(el); });
}
