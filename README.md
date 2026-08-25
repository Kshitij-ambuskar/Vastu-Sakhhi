# VastuSakhhi

Premium, production-ready website for **VastuSakhhi** — the Vastu &amp;
Astrology consultancy of **Pournima**, trained in Astro Vastu, Numero Vastu
and Advanced Vastu under Acharya Pankit Goyal.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.

## Pages

| Route            | Purpose                                                             |
| ----------------- | -------------------------------------------------------------------- |
| `/`               | About (Homepage) — Hero, About Pournima, Services, Professional Training, Why Choose VastuSakhhi |
| `/certifications` | Certificate gallery (click-to-enlarge), Training & Recognition section |
| `/contact`        | Contact info, validated contact form, WhatsApp button, Call Now button |

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing Content

Almost everything you'll want to change — phone numbers, email, service
descriptions, certificate list — lives in **one file**:

```
src/lib/constants.ts
```

Update it there and it flows through the whole site automatically (nav,
footer, structured data, contact form dropdown, etc.).

Images live in `public/images/`. To swap the portrait, training photo, or
any certificate image, replace the file (keep the same filename) or update
the path in `src/lib/constants.ts`.

## Project Structure

```
vastusakhhi/
├── public/
│   ├── images/                 # portrait, certificates, training photo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # root layout, fonts, global metadata
│   │   ├── page.tsx              # About (Homepage)
│   │   ├── globals.css
│   │   ├── sitemap.ts            # generates /sitemap.xml
│   │   ├── robots.ts             # generates /robots.txt
│   │   ├── manifest.ts           # generates /manifest.webmanifest
│   │   ├── not-found.tsx
│   │   ├── api/contact/route.ts  # contact form submission endpoint
│   │   ├── certifications/page.tsx
│   │   └── contact/page.tsx
│   ├── components/               # Header, Footer, Hero, ServiceCard, etc.
│   └── lib/constants.ts          # site content, contact info, services
├── DEPLOYMENT.md                 # Vercel + domain + Google indexing guide
└── package.json
```

## SEO & Structured Data

- Per-page `metadata` exports (title, description, canonical, Open Graph)
- JSON-LD `ProfessionalService` + `Person` schema (`src/components/StructuredData.tsx`)
- Auto-generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Semantic HTML, descriptive `alt` text, accessible focus states, skip-to-content link

See **DEPLOYMENT.md** for the full deployment, domain, and Google Search
Console setup guide.

## Tech Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- lucide-react (icons)
- next/font (Cormorant Garamond + Inter, self-hosted at build time)
