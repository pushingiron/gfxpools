# GFX Pools — gfxpools.com

Static website for Ground Effects LLC (GFX Pools), Fort Mohave, AZ.  
Hosted via **GitHub Pages**. E-commerce powered by **Shopify Buy Button**.

---

## Structure

```
gfxpools/
├── index.html              # Homepage
├── css/
│   └── style.css           # All styles — brand tokens at top
├── js/
│   └── main.js             # Nav toggle, scroll behavior
├── images/                 # Static image assets (WebP preferred)
│   ├── hero.jpg
│   └── portfolio-*.jpg
└── pages/
    ├── about.html
    ├── services.html
    ├── shop.html            # Shopify Buy Button embed
    ├── testimonials.html
    ├── faq.html
    └── contact.html
```

---

## Shopify Buy Button

The e-commerce product grid is powered by Shopify's Buy Button channel.

**To update the embed:**
1. Log in to Shopify admin
2. Sales Channels → Buy Button
3. Edit or regenerate the collection embed
4. Paste the `<script>` snippet into `pages/shop.html` and `index.html`
   where the placeholder comment sits

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
