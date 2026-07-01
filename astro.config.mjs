// ─── Astro Configuration ────────────────────────────────────────────────────
// Docs: https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 🔧 Replace YOUR_GITHUB_USERNAME with your actual GitHub username.
  //    This is used for canonical URLs, OG tags, and the sitemap.
  site: 'https://SaintJeane.github.io',

  // 🔧 ONLY uncomment `base` if you deploy to a PROJECT page, not a user page.
  //    User page  → https://username.github.io        (no base needed)
  //    Project page → https://username.github.io/portfolio  (set base: '/portfolio')
  // base: '/portfolio',

  // Static HTML output — no server required, works perfectly with GitHub Pages.
  output: 'static',
});
