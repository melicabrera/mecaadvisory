# MECA Advisory — website

Static one-page site (EN/ES) for MECA Advisory.

- `index.html` — home page
- `insights/` — Insights listing (`insights/index.html`) and one folder per article (`insights/<slug>/index.html`)
- `assets/site.css`, `assets/site.js` — shared styles and the EN/ES language switch
- `assets/` — logo, hero image, social-share image, favicon

No build step: any static host (GitHub Pages, Cloudflare Pages, Netlify) can serve this folder as-is.
Add `?lang=es` to the URL to open the Spanish version directly.
