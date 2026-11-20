# Xenonyx — Starship Landing Page

A playful, single-page Xenonyx company site. **Static HTML/CSS/JavaScript; no build, framework, or API key required.**

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `xenonyx-site`).
2. Upload **the contents** of this folder to the repository root — `index.html`, `styles.css`, `script.js`, `assets/`, etc.
3. Go to **Settings → Pages → Build and deployment** and choose **Deploy from a branch**, `main`, `/ (root)`.
4. Visit the GitHub Pages URL displayed in Settings → Pages.
5. Optional: set the custom domain to `xenonyx.com`; configure DNS using GitHub's current official documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site.
6. Enable **Enforce HTTPS** after DNS is verified.

## Content to verify before publishing

- The contact address `hello@xenonyx.com` is a placeholder. Configure it or change the `mailto:` link.
- Product links currently point to `https://tradigo.com.au` and `https://wetnose.com.au`; verify live destinations and availability.
- Illustrations are generated design assets. If you need a consistent full brand kit, replace/export the artwork with approved master assets.
- Google Fonts are loaded online; fallback system fonts render without a network connection.

## Interactions

- Hover (desktop), focus (keyboard), or tap (touch) on Tradigo/Wetnose planets to swap their speech-bubble information card.
- Spaceship and stars are CSS-animated and respect `prefers-reduced-motion`.
- Mobile navigation is functional.
- Smooth anchor links navigate the one-page experience.

All files are self-contained, with relative paths suitable for GitHub Pages project or custom domains.
