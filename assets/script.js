const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setMenu(open) {
  menuButton?.classList.toggle('is-open', open);
  menu?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}
menuButton?.addEventListener('click', () => setMenu(!menu?.classList.contains('is-open')));
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const progressBar = document.querySelector('.scroll-progress span');
function updateScrollUI() {
  const y = window.scrollY;
  header?.classList.toggle('scrolled', y > 28);
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  if (progressBar) progressBar.style.width = `${Math.min(100, (y / max) * 100)}%`;
}
window.addEventListener('scroll', updateScrollUI, { passive:true });
window.addEventListener('resize', updateScrollUI, { passive:true });
updateScrollUI();

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item) => {
  if (item.dataset.delay) item.style.setProperty('--delay', `${item.dataset.delay}ms`);
});
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold:.12, rootMargin:'0px 0px -35px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const stage = document.querySelector('[data-photo-stage]');
const slides = [...document.querySelectorAll('[data-slide]')];
const dots = [...document.querySelectorAll('[data-slide-to]')];
let currentSlide = 0;
let slideTimer;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentSlide));
}
function startSlides() {
  if (reduceMotion || slides.length < 2) return;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 4700);
}
dots.forEach((dot) => dot.addEventListener('click', () => {
  showSlide(Number(dot.dataset.slideTo));
  startSlides();
}));
stage?.addEventListener('mouseenter', () => clearInterval(slideTimer));
stage?.addEventListener('mouseleave', startSlides);
startSlides();

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && stage && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
  heroVisual.addEventListener('pointermove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    stage.style.transform = `rotate(${1.2 + x * 1.3}deg) translate3d(${x * 8}px, ${y * 8}px, 0)`;
  });
  heroVisual.addEventListener('pointerleave', () => { stage.style.transform = ''; });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('figcaption');
const closeLightbox = () => lightbox?.close();
document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector('img')?.alt || 'Dokumentasi program';
    lightboxCaption.textContent = button.dataset.caption || '';
    lightbox.showModal();
  });
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.getElementById('year').textContent = new Date().getFullYear();
