# GFX Pools — gfxpools.com

Static website for Ground Effects LLC (GFX Pools), Fort Mohave, AZ.  
Hosted via **GitHub Pages**. Desert Steel product catalog is built into the site (no store platform). Checkout links are added per item in `js/checkout-links.js`.

---

## Structure

```
gfxpools/
├── index.html              # Homepage
├── css/
│   └── style.css           # All styles — brand tokens at top
├── js/
│   ├── main.js             # Nav toggle, scroll behavior, quote-form prefill
│   ├── products.js         # Desert Steel catalog data (19 products, 57 sizes)
│   ├── checkout-links.js   # Per-size checkout URLs (empty = "Request a quote")
│   └── shop.js             # Renders the product grid + product modal
├── images/                 # Static image assets (WebP preferred)
│   ├── hero.jpg
│   ├── portfolio-*.jpg
│   └── products/<handle>/  # Desert Steel product photos
└── pages/
    ├── about.html
    ├── services.html
    ├── shop.html            # Product grid (rendered by js/shop.js)
    ├── testimonials.html
    ├── faq.html
    └── contact.html
```

---

## Shop (Desert Steel)

Products are static data, not a hosted store.

- **Edit a price, description, or size:** `js/products.js`
- **Add a product:** add an entry to `js/products.js`, drop its photos in `images/products/<handle>/`, and add a line per size to `js/checkout-links.js`
- **Turn on checkout for an item:** paste its checkout URL (for example a Stripe Payment Link) as the value for that size in `js/checkout-links.js`. The button changes from "Request a quote" to "Buy now". No other change is needed.
- Items with no checkout URL send the visitor to the contact form, pre-filled with the product and size.

---

## Contact Form

The contact form in `pages/contact.html` needs a form handler.  
Recommended options (no backend required):
- **Formspree** — update `action="https://formspree.io/f/YOUR_ID"`
- **Netlify Forms** — add `netlify` attribute if hosting on Netlify
- **EmailJS** — JS-based, no server needed

---

## GitHub Pages Setup

1. Push this repo to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Custom domain: add `gfxpools.com` and configure DNS:
   - A records pointing to GitHub Pages IPs
   - CNAME `www` → `yourusername.github.io`

---

## Brand Tokens

| Token       | Value     | Usage              |
|-------------|-----------|---------------------|
| `--orange`  | `#E8620A` | Primary accent      |
| `--dark`    | `#0D0D0D` | Page background     |
| `--gold`    | `#C9A84C` | Reserved/highlight  |
| `--text`    | `#E8E4DC` | Body text           |
| `--muted`   | `#888880` | Secondary text      |

Fonts: **Cormorant Garamond** (display) + **Inter** (body) via Google Fonts.
