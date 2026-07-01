# Peter Jaimbo - Portfolio

<!-- ── Header badges ────────────────────────────────────────────────────────
     These render as colorful pill images on GitHub.
     The "Deploy" badge auto-reflects the live status of your GitHub Actions
     workflow — it turns green when a deploy succeeds and red if it fails.   -->

[![Deploy to GitHub Pages](https://github.com/saint-jeane/saint-jeane.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/saint-jeane/saint-jeane.github.io/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro_7-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

> Personal portfolio website showcasing ML & AI engineering projects with live, interactive demos embedded directly from HuggingFace Spaces.

**Live site → [saint-jeane.github.io](https://saint-jeane.github.io)**

---

## Table of Contents

- [Overview](#overview)
- [Featured Projects](#featured-projects)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Customization Guide](#customisation-guide)
- [Adding a New Project](#adding-a-new-project)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This portfolio is a fully static website built with **Astro 7** and deployed for free on **GitHub Pages**. Every push to `main` triggers a GitHub Actions workflow that builds the site and publishes it automatically — no manual deployment steps required.

### Key design decisions

| Decision | Reason |
|---|---|
| **Astro** over Next.js / React | Ships zero JavaScript by default; interactivity is added only where needed (the HuggingFace embeds). Results in near-perfect Core Web Vitals. |
| **Static output** | No server required. The entire site is pre-rendered to plain HTML + CSS at build time, making it fast, secure, and free to host. |
| **GitHub Pages** | Free hosting with SSL, custom domain support, and tight CI/CD integration via Actions. |
| **HuggingFace Spaces embeds** | Projects are deployed to HuggingFace Spaces and embedded via `<iframe>` or the Gradio WebComponent — visitors can interact with live models without leaving the portfolio. |
| **shields.io badges** | All tech-stack badges in the Skills section are generated dynamically by shields.io — no image assets to maintain. |

---

## Featured Projects

| Project | Type | Live Demo |
|---|---|---|
| [Agentic RAG System](src/data/projects.ts) | LangGraph · FAISS · Qwen 2.5 | ✅ HuggingFace Space (Gradio) |
| [Retail Price & Inventory Optimizer](src/data/projects.ts) | LightGBM · Prophet · Streamlit | ✅ HuggingFace Space (Streamlit) |
| [m4aDownloader](src/data/projects.ts) | PySide6 · yt-dlp · mutagen | GitHub only (desktop app) |
| [Offline Voice Assistant](src/data/projects.ts) | Whisper · Phi-3 · Piper TTS | GitHub only (local app) |

All project metadata (title, description, URLs, tech tags) lives in a single file: [`src/data/projects.ts`](src/data/projects.ts). Editing that file automatically updates both the home-page cards and the individual project pages.

---

## Tech Stack

<!-- Site build stack -->
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## Project Structure

```
saint-jeane.github.io/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
│                               # Runs on every push to main:
│                               #   1. Installs dependencies (npm ci)
│                               #   2. Builds the site (astro build → dist/)
│                               #   3. Deploys dist/ to GitHub Pages
│
├── public/
│   └── favicon.svg             # SVG monogram favicon (PJ in accent colour)
│                               # SVG favicons work in all modern browsers
│                               # and stay crisp at any size
│
├── src/
│   │
│   ├── data/
│   │   └── projects.ts         # ⭐ SINGLE SOURCE OF TRUTH for all projects
│   │                           # Add/edit projects here — every page that
│   │                           # displays a project reads from this file
│   │
│   ├── styles/
│   │   └── global.css          # Design tokens (colours, fonts, spacing)
│   │                           # and all reusable utility classes (.btn,
│   │                           # .tag, .badge-live, .container, etc.)
│   │                           # Imported once in Layout.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell used by every page
│   │                           # Provides: <head>, meta tags, OG tags,
│   │                           # Google Fonts, favicon, global CSS
│   │
│   ├── components/
│   │   ├── Nav.astro           # Sticky top navigation bar
│   │   │                       # Transparent at top → blur + border on scroll
│   │   │                       # (handled by a small inline <script>)
│   │   │
│   │   ├── Hero.astro          # Full-viewport landing section
│   │   │                       # Dot-grid background, name, role, terminal
│   │   │                       # meta line, bio paragraph, CTA buttons
│   │   │
│   │   ├── ProjectCard.astro   # Card component for the home-page grid
│   │   │                       # Accepts a Project object as a prop and
│   │   │                       # renders the badge, title, tagline, tags,
│   │   │                       # and action links
│   │   │
│   │   ├── Skills.astro        # Tech skills section (id="skills")
│   │   │                       # 2-column grid of shields.io badge categories:
│   │   │                       # Languages, Frameworks, Libraries, Tools,
│   │   │                       # Cloud, Data & Visualisation
│   │   │
│   │   ├── SocialLinks.astro   # Social profile badge row
│   │   │                       # Renders shields.io for-the-badge images for
│   │   │                       # LinkedIn, GitHub, HuggingFace, Kaggle,
│   │   │                       # Medium, and Email (only props that are
│   │   │                       # provided are rendered)
│   │   │
│   │   ├── SpaceEmbed.astro    # HuggingFace Space embed component
│   │   │                       # Supports two embed methods:
│   │   │                       #   type="iframe"  → all Space types
│   │   │                       #   type="gradio"  → Gradio WebComponent
│   │   │                       #                    (auto-sizes, faster)
│   │   │
│   │   └── Footer.astro        # Site footer with copyright + social links
│   │
│   └── pages/
│       ├── index.astro         # Home page
│       │                       # Composes: Nav, Hero, Projects grid,
│       │                       # Skills, About (with SocialLinks), Footer
│       │
│       └── projects/
│           └── [slug].astro    # Dynamic project detail page
│                               # Astro pre-renders one HTML file per project
│                               # at build time using getStaticPaths().
│                               # Each page shows the project header,
│                               # a live HuggingFace Space embed (if set),
│                               # and the full technical write-up.
│
├── astro.config.mjs            # Astro configuration
│                               # Sets: site URL, output mode (static)
│
├── package.json                # Node project manifest + npm scripts
├── tsconfig.json               # TypeScript config (extends Astro strict)
└── README.md                   # This file
```

---

## Local Development

### Prerequisites

- **Node.js 20+** — check with `node --version`. Download from [nodejs.org](https://nodejs.org) (LTS) if needed.
- **VS Code** with the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) for `.astro` file syntax support.

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/SaintJeane/SaintJeane.github.io.git
cd SaintJeane.github.io

# 2. Install dependencies
#    This creates node_modules/ from package.json.
#    No virtual environment needed — Node manages its own isolation.
npm install

# 3. Start the local dev server
#    Opens at http://localhost:4321
#    Hot-reloads instantly on every file save — no manual refresh needed.
npm run dev
```

### Other useful commands

```bash
# Build the site for production
# Outputs to dist/ — this is what GitHub Pages serves.
npm run build

# Preview the production build locally
# Useful to catch any differences between dev and the real build.
npm run preview
```

> **Note:** You only ever run `npm run dev` during development. The `build` command is run automatically by GitHub Actions on every push to `main`.

---

## Customisation Guide

All placeholder values are marked with a comment containing `YOUR_` in the source files. A quick global search (`Ctrl+Shift+F` in VS Code → search `YOUR_`) finds every one.

### 1. Site URL — `astro.config.mjs`

```js
// Already set — confirm this matches your GitHub username exactly
site: 'https://saint-jeane.github.io',
```

### 2. Project data — `src/data/projects.ts`

This is the most important file to update. Replace the placeholder URLs:

```ts
hfSpace: 'https://YOUR_HF_USERNAME-agentic-rag.hf.space',  // your real Space URL
github:  'https://github.com/saint-jeane/agentic-rag',     // confirm repo name
```

> **How to find your HuggingFace Space URL:** Open your Space on HuggingFace →
> click the three-dot menu → "Embed this Space" → copy the URL shown.

### 3. Social links — `src/pages/index.astro`

Update the `<SocialLinks>` and `<Footer>` props in the About section:

```astro
<SocialLinks
  linkedin="https://linkedin.com/in/YOUR_LINKEDIN_HANDLE"
  github="https://github.com/saint-jeane"
  huggingface="https://huggingface.co/YOUR_HF_USERNAME"
  kaggle="https://kaggle.com/YOUR_KAGGLE_USERNAME"
  medium="https://medium.com/@YOUR_MEDIUM_USERNAME"
  email="mailto:YOUR_EMAIL@example.com"
/>
```

The same URLs are also passed to `<Footer>` in both `index.astro` and `src/pages/projects/[slug].astro` — update both.

### 4. Nav icons — `src/components/Nav.astro`

The GitHub and HuggingFace icon links in the nav already use `saint-jeane`. Update the HuggingFace URL once you have your username.

### 5. Favicon — `public/favicon.svg`

The initials `PJ` are already set. If you ever want to change the colour, edit the `fill` value on the `<rect>` element.

---

## Adding a New Project

Everything is driven by `src/data/projects.ts`. Adding a project requires **only one step** — adding an object to the `projects` array:

```ts
// src/data/projects.ts

{
  slug:        'my-new-project',   // URL: /projects/my-new-project/
  title:       'My New Project',
  tagline:     'One sentence that describes what it does.',
  description: 'Two or three sentences of detail — shown on the project page.',

  // Optional: longer write-up shown on the project page.
  // Falls back to `description` if not provided.
  longDescription: 'Extended technical explanation...',

  tech: ['Python', 'PyTorch', 'FastAPI'],

  // Optional: HuggingFace Space URL.
  // If set, the project page shows a live embed and the card shows a "Live Demo" badge.
  hfSpace:     'https://your-username-my-new-project.hf.space',
  hfSpaceType: 'gradio',   // 'gradio' | 'streamlit' | 'static'

  // Optional: GitHub repository URL
  github:  'https://github.com/saint-jeane/my-new-project',

  status:   'live',   // 'live' | 'in-progress' | 'archived'
  featured: true,     // true = appears first in the grid
  year:     2025,
},
```

Astro's `[slug].astro` page automatically pre-renders a new route for the slug at build time — no other files need to be touched.

> **HuggingFace Space visibility:** The Space must be set to **Public** or **Protected** in its settings for the embed to load on your portfolio site.

---

## Deployment

The site deploys automatically via GitHub Actions. The workflow file is at `.github/workflows/deploy.yml`.

### First-time setup (one step on GitHub)

1. Go to your repository on GitHub
2. **Settings** → **Pages** → **Build and deployment** → **Source**
3. Select **GitHub Actions**

That's it. From this point on, every `git push` to `main` triggers:

```
push to main
    └── build job
            ├── npm ci           (installs dependencies)
            └── astro build      (outputs to dist/)
                    └── deploy job
                            └── dist/ → GitHub Pages
```

You can monitor each run live in the **Actions** tab of your repository. Build time is typically under 60 seconds.

### Manual deploy (if ever needed)

```bash
# Build locally and push manually (rare — Actions handles this automatically)
npm run build
# dist/ is the folder GitHub Pages serves
```

---

## License

This project is open source under the [MIT License](LICENSE) — you are free to use this as a template for your own portfolio.

---

<div align="center">
  <sub>Built with <a href="https://astro.build">Astro 7</a> · Hosted on <a href="https://pages.github.com">GitHub Pages</a> · Live demos on <a href="https://huggingface.co">HuggingFace Spaces</a></sub>
</div>
