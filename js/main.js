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

// ── Contact form prefill (from shop "Request a quote" links) ───
(function () {
  var msg = document.getElementById('message');
  var svc = document.getElementById('service');
  if (!msg || !svc) return;
  var params = new URLSearchParams(window.location.search);
  var product = params.get('product');
  if (!product) return;
  var size = params.get('size');
  var price = parseFloat(params.get('price'));
  svc.value = 'desert-steel';
  if (!msg.value) {
    msg.value = "I'd like a quote on the " + product + (size ? ' \u2014 ' + size : '') +
      (isNaN(price) ? '' : ' (listed at $' + price.toLocaleString('en-US', { minimumFractionDigits: price % 1 ? 2 : 0 }) + ')') +
      '.\n\nDelivery city / address: ';
  }
})();
