// ── Mobile nav toggle ──────────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Active nav link ────────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ── Scroll: darken nav on scroll ──────────────────────────────
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navEl.style.background = 'rgba(13,13,13,0.98)';
  } else {
    navEl.style.background = 'rgba(13,13,13,0.92)';
  }
});
