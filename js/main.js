// Theme toggle (dark mode)
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });
}

// Lightbox for feature screenshots
(function() {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  document.querySelectorAll('.feature-image img, .app-preview, .guide-screenshot').forEach(function(el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function() {
      img.src = el.src;
      img.alt = el.alt;
      overlay.classList.add('is-visible');
      document.body.classList.add('menu-open');
    });
  });

  overlay.addEventListener('click', function() {
    overlay.classList.remove('is-visible');
    document.body.classList.remove('menu-open');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
      overlay.classList.remove('is-visible');
      document.body.classList.remove('menu-open');
    }
  });
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
