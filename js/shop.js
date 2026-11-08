/* GFX Pools — static Desert Steel shop.
 * Data:     js/products.js         (window.GFX_PRODUCTS)
 * Checkout: js/checkout-links.js   (window.GFX_CHECKOUT_LINKS)
 * Mount:    <div id="shop-grid" data-base="../" data-contact="contact.html" [data-featured="handle,handle"]>
 */
(function () {
  'use strict';

  var products = window.GFX_PRODUCTS || [];
  var links = window.GFX_CHECKOUT_LINKS || {};
  var mount = document.getElementById('shop-grid');
  if (!mount || !products.length) return;

  var base = mount.getAttribute('data-base') || '';
  var contactUrl = mount.getAttribute('data-contact') || 'contact.html';
  var featured = (mount.getAttribute('data-featured') || '')
    .split(',').map(function (s) { return s.trim(); }).filter(Boolean);

  // ── helpers ──────────────────────────────────────────────
  function money(n) {
    return '$' + n.toLocaleString('en-US', {
      minimumFractionDigits: n % 1 ? 2 : 0,
      maximumFractionDigits: 2
    });
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function src(path) { return base + path; }

  function lowestVariant(p) {
    return p.variants.reduce(function (a, b) { return b.price < a.price ? b : a; });
  }

  function priceInto(node, variant, prefix) {
    node.textContent = '';
    node.appendChild(document.createTextNode((prefix || '') + money(variant.price)));
    if (variant.compareAt && variant.compareAt > variant.price) {
      node.appendChild(el('s', null, money(variant.compareAt)));
    }
  }

  // Checkout stub: a URL in GFX_CHECKOUT_LINKS turns "Request a quote" into "Buy now".
  function actionFor(p, v) {
    var url = links[p.handle + '|' + (v.label || '')];
    var a = el('a', 'btn btn-primary');
    if (url) {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'Buy now';
    } else {
      var q = '?product=' + encodeURIComponent(p.title) +
        (v.label ? '&size=' + encodeURIComponent(v.label) : '') +
        '&price=' + encodeURIComponent(v.price);
      a.href = contactUrl + q + '#quote';
      a.textContent = 'Request a quote';
    }
    return a;
  }

  // ── cards ────────────────────────────────────────────────
  function card(p) {
    var article = el('article', 'shop-card');
    var open = el('button', 'shop-card-open');
    open.type = 'button';
    open.setAttribute('aria-label', 'View ' + p.title);

    var imgWrap = el('span', 'shop-card-img');
    var img = el('img');
    img.src = src(p.images[0]);
    img.alt = p.title;
    img.loading = 'lazy';
    img.decoding = 'async';
    imgWrap.appendChild(img);

    var body = el('span', 'shop-card-body');
    body.appendChild(el('span', 'shop-card-title', p.title));
    var price = el('span', 'shop-price');
    priceInto(price, lowestVariant(p), p.variants.length > 1 ? 'From ' : '');
    body.appendChild(price);
    body.appendChild(el('span', 'shop-card-cta', p.variants.length > 1 ? 'View sizes' : 'View details'));

    open.appendChild(imgWrap);
    open.appendChild(body);
    open.addEventListener('click', function () { openModal(p); });
    article.appendChild(open);
    return article;
  }

  // ── modal ────────────────────────────────────────────────
  var dialog, mainImg, thumbs, titleEl, priceEl, descEl, sizeWrap, sizeSel, actionWrap, current;

  function buildModal() {
    dialog = el('dialog', 'shop-modal');
    dialog.setAttribute('aria-labelledby', 'shop-modal-title');

    var close = el('button', 'shop-modal-close', '×');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close');
    close.addEventListener('click', function () { dialog.close(); });

    var body = el('div', 'shop-modal-body');
    var gallery = el('div', 'shop-modal-gallery');
    mainImg = el('img', 'shop-modal-main');
    thumbs = el('div', 'shop-thumbs');
    gallery.appendChild(mainImg);
    gallery.appendChild(thumbs);

    var info = el('div', 'shop-modal-info');
    info.appendChild(el('span', 'eyebrow', 'Desert Steel'));
    titleEl = el('h2');
    titleEl.id = 'shop-modal-title';
    priceEl = el('div', 'shop-price shop-modal-price');
    descEl = el('p', 'shop-desc');

    sizeWrap = el('div', 'shop-size');
    var label = el('label', null, 'Size');
    label.setAttribute('for', 'shop-size-select');
    sizeSel = el('select');
    sizeSel.id = 'shop-size-select';
    sizeWrap.appendChild(label);
    sizeWrap.appendChild(sizeSel);

    actionWrap = el('div', 'shop-actions');
    var note = el('p', 'shop-note', 'Questions about sizing, availability, or delivery? Call (928) 516-9442.');

    info.appendChild(titleEl);
    info.appendChild(priceEl);
    info.appendChild(descEl);
    info.appendChild(sizeWrap);
    info.appendChild(actionWrap);
    info.appendChild(note);

    body.appendChild(gallery);
    body.appendChild(info);
    dialog.appendChild(close);
    dialog.appendChild(body);
    document.body.appendChild(dialog);

    sizeSel.addEventListener('change', function () { selectVariant(+sizeSel.value, true); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () { document.body.style.overflow = ''; });
  }

  function showImage(i) {
    mainImg.src = src(current.images[i]);
    mainImg.alt = current.title;
    Array.prototype.forEach.call(thumbs.children, function (b, idx) {
      if (idx === i) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }

  // swapImage: show the variant's own photo (only when the shopper changes size)
  function selectVariant(vi, swapImage) {
    var v = current.variants[vi];
    priceInto(priceEl, v);
    actionWrap.textContent = '';
    actionWrap.appendChild(actionFor(current, v));
    if (swapImage && v.image !== null && v.image !== undefined) showImage(v.image);
  }

  function openModal(p) {
    if (!dialog) buildModal();
    current = p;
    titleEl.textContent = p.title;
    descEl.textContent = p.description;

    thumbs.textContent = '';
    p.images.forEach(function (path, i) {
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', p.title + ' photo ' + (i + 1));
      var t = el('img');
      t.src = src(path);
      t.alt = '';
      t.loading = 'lazy';
      b.appendChild(t);
      b.addEventListener('click', function () { showImage(i); });
      thumbs.appendChild(b);
    });

    sizeSel.textContent = '';
    var multi = p.variants.length > 1;
    p.variants.forEach(function (v, i) {
      var o = el('option', null, v.label || 'Standard');
      o.value = i;
      sizeSel.appendChild(o);
    });
    sizeWrap.hidden = !multi;
    thumbs.hidden = p.images.length < 2;

    showImage(0);
    selectVariant(0);
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  // ── render ───────────────────────────────────────────────
  var list = featured.length
    ? featured.map(function (h) {
        return products.filter(function (p) { return p.handle === h; })[0];
      }).filter(Boolean)
    : products;
  if (featured.length) mount.classList.add('is-featured');
  list.forEach(function (p) { mount.appendChild(card(p)); });
})();
