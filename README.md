# Personal Portfolio

This repository contains the source code for [sadanandpai.github.io](https://sadanandpai.github.io/), a personal portfolio website built with Astro.

The site highlights:

- Professional profile and background
- Skills and technologies
- Experience timeline
- Selected projects and blog links

## Clone and Run Locally

### Prerequisites

- Node.js `>= 24.19.0`
- npm (bundled with Node.js)

### Setup

```bash
git clone https://github.com/sadanandpai/sadanandpai.github.io.git
cd sadanandpai.github.io
npm install
```

### Run

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

### Build and Preview Production Output

```bash
npm run build
npm run preview
```

## Tech Details

- **Framework:** Astro
- **Language:** TypeScript
- **Module system:** ES modules (`"type": "module"`)
- **Main config/data source:** `src/config.ts` (profile, sections, skills, experience, projects/blogs)
- **Page entry:** `src/pages/index.astro`
- **Key UI pieces:** `src/components/*` and `src/layouts/Layout.astro`
- **Static assets:** `public/`

### Scripts

- `npm run dev` -> start local dev server
- `npm run build` -> create production build in `dist/`
- `npm run preview` -> preview production build locally
