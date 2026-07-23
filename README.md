# HJ Unicare — Medical Travel Website

A premium editorial website for **HJ Unicare**, a medical travel company that connects patients in the Global South to world-class healthcare in India.

**Tagline:** Home to Home  
**Founder:** Gurvinder Jit Singh (Co-Founder & COO)  
**Email:** care@hjunicare.com  
**Offices:** Dubai (HQ) · New Delhi (Operations Center)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Bundler** | Vite 8 |
| **Routing** | TanStack Router |
| **SSR** | TanStack Start + Nitro |
| **Styling** | Tailwind CSS 4 + shadcn/ui (New York) |
| **Icons** | Lucide React |
| **Carousel** | Embla Carousel + Autoplay |
| **Forms** | react-hook-form + zod |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Vercel (Nitro preset) |

---

## Live Site

**Production URL:** https://medibyte-branding-sand.vercel.app

Push to `main` (or the connected default branch) triggers automatic production deployment.

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About the Founder |
| `/services` | Services overview (6 specialities) |
| `/services/$slug` | Individual speciality detail page |
| `/hospitals` | Hospital partners |
| `/stories` | Patient stories |
| `/blog` | Blog listing with category filters |
| `/blog/$slug` | Individual blog post |
| `/contact` | Contact / consultation request |
| `/admin` | Admin dashboard (auth required) |
| `/admin/login` | Admin login |

---

## Homepage Sections (in order)

1. **Hero** — Full-bleed video background with headline and CTA
2. **Founder Intro** — Gurvinder Jit Singh photo, role and philosophy
3. **Speciality Highlights** — 6 medical specialities grid
4. **Patient Reviews** — Social proof carousel
5. **Patient Journey** — 4-stage journey (Before Treatment → Treatment → Care & Recovery → After Treatment)
6. **Pricing Comparison** — Cost comparison table (India vs US/UK) with save banner
7. **Aftercare Spotlight** — Post-treatment recovery & aftercare services (feature-grid, no image)
8. **Insurance** — 12-month post-treatment insurance coverage (icon-centered)
9. **Partner Marquee** — Scrolling partner hospital **logo images**
10. **Featured In** — Media logos (Forbes, Economic Times, The Hindu, etc.)
11. **Testimonials** — Quote-only patient testimonial cards
12. **Blog Grid** — Latest 3–4 blog posts
13. **Final CTA** — Text-only contact form with name, email, message

---

## Navigation

```
Home → About → Services → Hospitals → Stories → Blog → Contact
```

Each page has a sticky nav with mobile hamburger menu and a "Book a Free Consultation" button.

---

## 6 Medical Specialities

| Slug | Name |
|---|---|
| `orthopedics` | Orthopedics |
| `cardiology` | Cardiology |
| `ivf-fertility` | IVF & Fertility |
| `oncology` | Oncology |
| `pediatrics` | Pediatrics |
| `wellness` | Wellness Center |

Each has 6 procedures, a phased timeline, dedicated imagery, and hospital associations.

---

## Hospital Network

### India (15)
Artemis Hospital · Max Healthcare · Medanta · Sharda Hospital · ISIC · Medicover · DY Patil · Lilavati · Kokilaben Dhirubhai Ambani Hospital · CARE Hospitals · Wockhardt · MIOT International · Star Hospitals · PACE Hospitals · Dr. Agarwal's Eye Hospital

### UAE (8)
Zulekha Hospital · American Hospital Dubai · Aster DM Healthcare · Thumbay University Hospital · King's College Hospital London-Dubai · Dubai London Hospital · Burjeel Hospital · Moorfields Eye Hospital Dubai

### Featured Hospitals (detail pages)
Apollo Hospitals (Chennai) · Fortis Healthcare (Delhi) · Medanta (Gurugram) · Max Super Speciality (New Delhi) · Manipal Hospitals (Bengaluru) · Artemis Hospital (Gurugram) · BLK-Max Hospital (New Delhi) · Narayana Health (Bengaluru) · Indraprastha Apollo (New Delhi) · AIIMS Network (New Delhi)

---

## Blog

12 published posts across 5 categories:

| Category | Posts |
|---|---|
| Patient Guides | 4 posts (logistics, packing, patient stories, medical travel) |
| Hospital Spotlights | 2 posts (JCI-accredited hospitals, Apollo Delhi) |
| Recovery Tips | 2 posts (post-op care, flying after surgery) |
| Industry Notes | 4 posts (diplomatic ties, India as surgical hub, economics of medical travel) |

---

## Patient Stories

4 stories from real patients:
- **Mrs. A. Okonkwo** (Nigeria) — CABG at Indraprastha Apollo
- **Mr. M. Al-Hassan** (Iraq) — Spinal Fusion at Medanta
- **J. & D. Mwangi** (Kenya) — IVF at Max Super Speciality
- **D. Karimov** (Uzbekistan) — Radiation Therapy at BLK-Max

---

## Testimonials

6 sample testimonials from patients in Kenya, UK, Iraq, and India covering cardiac, orthopedic, IVF, wellness, and spine treatments.

---

## Pricing Comparison (sample data)

| Treatment | US/UK Price | India Price (HJ Unicare) |
|---|---|---|
| CABG | $120,000 | $6,500 |
| Total Hip Replacement | $55,000 | $5,500 |
| Total Knee Replacement | $50,000 | $4,800 |
| IVF/ICSI Cycle | $18,000 | $3,500 |
| Spinal Fusion | $85,000 | $7,000 |
| Cancer Surgery | $45,000 | $4,200 |

---

## About the Founder

**Gurvinder Jit Singh** — Co-Founder & COO

- 2009: Started in medical travel logistics
- 2012: Built coordinator network in Delhi NCR
- 2015: Co-founded HJ Unicare
- 2018: Expanded to 12+ countries
- 2024: Crossed 500+ patients guided

Operating philosophy:
1. Operations should disappear
2. Transparency is the product
3. The next referral is the only metric
4. Home to home, not hospital to hospital

---

## Embassy Partnerships

Diplomatic relationships with embassies of: Equatorial Guinea, Kenya, DRC Congo, Burundi, Belarus, Burkina Faso, Uganda, Djibouti

---

## Licenses & Credentials

- Dubai DED Commercial Licence
- Dubai Land Department Tenancy Registration
- Dubai Courts MOA
- GDRFA Establishment Card
- Federal Tax Authority Corporate Tax Certificate

---

## Admin Dashboard

Protected area at `/admin` with Supabase authentication:

- **Dashboard** — Lead counts, blog post counts, new leads
- **Lead Management** — View, filter, update lead status (new/reviewing/contacted/closed)
- **Blog Management** — CRUD operations on blog posts, seed from static data
- **Migration Instructions** — First-time SQL setup guide

### Database Tables

- `blog_posts` — id, slug, title, category, excerpt, published_at, read_time, author, icon, image_url, content (JSONB), status (draft/published)
- `leads` — id, type (consultation/reports), name, email, phone, country, speciality, condition, message, status
- `lead_attachments` — id, lead_id (FK), file_name, storage_path, mime_type, size_bytes
- `admin_users` — id, user_id (FK), email

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `paper` | `oklch(0.99 0.005 85)` | Warm ivory page background |
| `cream` | `oklch(0.968 0.014 80)` | Deeper cream section bg |
| `ink` | `oklch(0.18 0.04 250)` | Deep navy text |
| `primary` | `oklch(0.18 0.04 250)` | Oxford blue (buttons, overlays) |
| `accent` | `oklch(0.66 0.13 65)` | Warm brass/gold CTAs |
| `secondary` | `oklch(0.94 0.02 85)` | Light warm surfaces |
| `destructive` | `oklch(0.58 0.22 27)` | Red errors |

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `ADMIN_EMAILS` | Comma-separated admin emails |
| `NOTIFY_EMAIL` | Email to notify on new leads |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> **Windows build note:** If the Nitro build step fails with `EBUSY: resource busy or locked` while copying `tslib/package.json`, clean the output folder and retry:
> ```powershell
> Remove-Item -Recurse -Force .vercel/output
> npm run build
> ```

---

## Deployment

- **Production URL:** https://medibyte-branding-sand.vercel.app
- **Platform:** Vercel with Nitro SSR preset
- **Connected repo:** `anshk4/medibyte-branding`
- **Default branch:** `redesign/multi-page`
- Pushes to the connected branch trigger automatic production deployment.

```bash
# Build locally, then deploy prebuilt output
npm run build
vercel deploy --prebuilt
```

---

## Project Structure

```
src/
├── assets/             # Images, videos, static assets
│   ├── images/
│   │   ├── blog-covers/
│   │   ├── cardiology/
│   │   ├── embassies/
│   │   ├── hospital-exteriors/
│   │   ├── hospitals-india/
│   │   ├── hospitals-uae/
│   │   ├── ivf-fertility/
│   │   ├── oncology/
│   │   ├── orthopedics/
│   │   ├── pediatrics/
│   │   └── wellness/
│   └── videos/
├── components/         # Reusable components
│   ├── admin/          # Admin shell
│   ├── site/           # Nav, Footer, WhatsAppCTA, PageHeader, PlaceholderImage
│   └── ui/             # 49 shadcn-style UI components
├── fragments/          # Compositional primitives
│   ├── buttons/        # CtaButton, TextLink
│   ├── cards/          # ServiceCard, StoryCard, HospitalCard, StepCard, etc.
│   ├── forms/          # FormField, FormSelect, FormTextarea
│   ├── layout/         # Container, Section
│   ├── media/          # Figure
│   └── typography/     # SectionLabel, SectionTitle, MonoLabel
├── hooks/              # useAdminSession, useMobile
├── lib/                # Data, utilities, server functions, types, schemas
│   ├── supabase/       # Client & server Supabase helpers
│   └── types/          # Blog, Lead types
├── routes/             # All page routes
│   └── admin/          # Admin dashboard, login
├── sections/           # Page-specific section components
│   ├── about/          # Founder intro, timeline, philosophy, etc.
│   ├── common/         # Shared page header
│   ├── contact/        # Contact channels, forms, next steps
│   ├── home/           # 14+ homepage sections
│   └── services/       # Services grid, detail sections
├── router.tsx          # TanStack Router setup
├── server.ts           # SSR entry
├── start.ts            # App bootstrap
└── styles.css          # Global styles, design tokens, animations
```
