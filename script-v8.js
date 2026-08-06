const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  document.body.classList.toggle('nav-open', Boolean(open));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

document.addEventListener('click', event => {
  if (!nav?.classList.contains('open')) return;
  if (nav.contains(event.target) || menuButton?.contains(event.target)) return;
  closeMenu();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

const reveals = [...document.querySelectorAll('.reveal')];

function showReveal(element) {
  if (!element || element.classList.contains('is-visible')) return;
  const requestedDelay = Number(element.dataset.delay || 0);
  const mobileDelay = window.innerWidth <= 820 ? Math.min(requestedDelay, 140) : requestedDelay;
  element.style.setProperty('--reveal-delay', `${mobileDelay}ms`);
  element.classList.add('is-visible');
}

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(showReveal);
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      showReveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: window.innerWidth <= 820 ? 0.035 : 0.10,
    rootMargin: window.innerWidth <= 820 ? '0px 0px -2% 0px' : '0px 0px -5% 0px'
  });

  reveals.forEach(element => observer.observe(element));

  // iOS Safari fallback: never leave content hidden if an observer event is missed.
  window.setTimeout(() => {
    reveals.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.35) showReveal(element);
    });
  }, 900);
}

window.addEventListener('pageshow', () => {
  reveals.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.2) showReveal(element);
  });
});

const progress = document.querySelector('.progress span');
let ticking = false;
function updateScrollEffects() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  if (progress) progress.style.width = `${Math.min(100, value)}%`;

  if (!reducedMotion && !coarsePointer && window.innerWidth > 900) {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = Number(el.dataset.parallax || 0);
      const rect = el.parentElement.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
      el.style.setProperty('--parallax-y', `${offset}px`);
    });
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollEffects);
}, { passive: true });
window.addEventListener('resize', updateScrollEffects, { passive: true });
updateScrollEffects();

if (!reducedMotion && !coarsePointer) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${(-y * 2.2).toFixed(2)}deg) rotateY(${(x * 2.2).toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector('img')?.alt || 'Foto dokumentasi';
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
  });
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });


// V3: pointer spotlight for desktop cards and reliable menu reset.
if (!reducedMotion && !coarsePointer) {
  document.querySelectorAll('.program-card, .field-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${px.toFixed(1)}%`);
      card.style.setProperty('--my', `${py.toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });
}
const v3DesktopNav = window.matchMedia('(min-width: 821px)');
v3DesktopNav.addEventListener?.('change', event => {
  if (event.matches) closeMenu();
});


// V8 mobile motion: visible but lightweight animations for touch devices.
const isMobileViewport = () => window.matchMedia('(max-width: 820px)').matches;

if (!reducedMotion) {
  document.documentElement.classList.add('motion-enabled');

  document.querySelectorAll('.button, .language-button, .menu-toggle').forEach(element => {
    element.addEventListener('touchstart', () => element.classList.add('is-pressed'), { passive: true });
    element.addEventListener('touchend', () => {
      window.setTimeout(() => element.classList.remove('is-pressed'), 120);
    }, { passive: true });
    element.addEventListener('touchcancel', () => element.classList.remove('is-pressed'), { passive: true });
  });

  window.addEventListener('scroll', () => {
    if (!isMobileViewport()) return;
    document.body.classList.add('is-scrolling');
    clearTimeout(window.__mobileScrollTimer);
    window.__mobileScrollTimer = window.setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 130);
  }, { passive: true });
}
