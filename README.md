# ALEPH — Landing Page

Landing page for [ALEPH](https://github.com), a file automation app for Windows.

Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Dev Setup

```bash
npm install
npm run dev
```

Opens on [localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/           # Pages (home, docs, pricing, legal, etc.)
│   ├── page.tsx   # Home — all sections composed here
│   ├── layout.tsx # Root layout, fonts, metadata
│   └── globals.css
└── components/    # Section components (Hero, Features, FAQ, etc.)
public/            # Static assets (images, SVGs)
```

## Stack

- **Next.js 16** — App Router, static export
- **React 19** — Server/client components
- **Tailwind CSS 4** — Styling via `@tailwindcss/postcss`
- **Framer Motion** — Scroll animations, transitions
- **Google Fonts** — Geist, Geist Mono, Outfit

## License

See [LICENSE](./LICENSE) for details.
