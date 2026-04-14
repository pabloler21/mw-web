# MW Global Link — Frontend

Next.js 14 (App Router) landing site for MW Global Link, an Argentine agro-industrial export company. Targets international importers; premium dark/metallic aesthetic.

## Stack

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Framer Motion (planned)
- **i18n:** next-intl (planned — set up routing correctly from day 1)

## Dev Commands

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
```

## Project Structure

```
src/
├── app/                  # App Router pages & layouts
│   ├── layout.tsx        # Root layout (fonts, global CSS)
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Navbar, Footer, etc.
│   ├── sections/         # Page sections (Hero, Portfolio, Contact…)
│   └── ui/               # Reusable UI primitives
└── lib/
    ├── constants.ts      # Site metadata, nav links, product list
    └── utils.ts          # Shared utilities (cn helper, etc.)
```

## Environment Variables

Copy `.env.local.example` → `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://mwgloballink.com
NEXT_PUBLIC_API_URL=http://localhost:8000   # FastAPI backend
```

## Key Conventions

- Use **server components** by default; add `"use client"` only when needed (interactivity, hooks).
- Styles via Tailwind utility classes. Avoid inline styles.
- Shared constants (nav links, product list) live in `src/lib/constants.ts`.
- Component exports go through `index.ts` barrel files in each subfolder.
- No `src/pages/` directory — App Router only.

## Backend Connection

The backend (FastAPI) runs on port `8000`. The `NEXT_PUBLIC_API_URL` env var controls the base URL. Main endpoint used by the frontend: `POST /api/leads` (contact/lead form).

## Deployment

Deployed on **Vercel**. The `frontend/` directory is the root for the Vercel project.
