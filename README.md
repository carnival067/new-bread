# Bread Co — Wholesale Bakery Website

Production-ready rebuild of [breadco.com.au](https://breadco.com.au), positioning Bread Co as a
wholesale bakery partner to Melbourne's hospitality industry rather than a bakery
that happens to sell in bulk.

Built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript**.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # add your Web3Forms key (see "Enquiry forms")
npm run dev                    # http://localhost:3000
```

```bash
npm run build && npm run start # production build
npm run typecheck              # TypeScript check
```

> `npm run build` downloads the Playfair Display and Manrope webfonts from Google
> Fonts and self-hosts them, so the build machine needs internet access.

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, why choose us, product range, industries, quality, delivery, best sellers, testimonials, process, FAQ, CTA |
| `/products` | Full catalogue — 62 products, category tabs + live search |
| `/indian-bakery-range` | Separately branded Indian Bakery Range (paav, kulcha, white bread) |
| `/wholesale` | B2B conversion page + wholesale enquiry form |
| `/about` | Brand story, quality commitment, hospitality partnerships |
| `/faq` | Full FAQ with FAQPage structured data |
| `/contact` | Phone, email, address, hours, socials, Google Map, enquiry form |
| `/api/enquiry` | Server route that delivers form submissions |

Every page is statically prerendered — the whole catalogue is in the HTML for
search engines, and filtering happens client-side after load.

---

## Editing content

Almost nothing needs code changes. Two files hold the content:

**`src/data/site.ts`** — phone, email, address, trading hours, socials, value
propositions, industries, process steps, testimonials, FAQs, business-type
options in the forms.

**`src/data/products.ts`** — the catalogue. Each product is a plain object:

```ts
{
  slug: 'brioche-bun-90g',
  category: 'buns-rolls',
  name: 'Brioche Bun',
  weight: '90g',
  pack: 'Supplied in bulk trays · Pack size confirmed on quote',
  description: 'Our full-size brioche bun — soft, pillowy…',
  applications: 'Restaurants · Cafés · Premium Burger Service',
  featured: true,        // shows in the homepage best-sellers row
}
```

To add a product, copy an object and edit it. To add a category, add an entry to
the `categories` array — it appears automatically in the catalogue tabs, the
homepage range grid, the footer and the sitemap.

> **Pack sizes:** the `pack` values are written as "confirmed on quote" where the
> exact tray/carton count was not in the source data. Replace them with your real
> pack quantities when convenient — that detail converts well with buyers.

---

## Photography

Product and lifestyle images currently point at Unsplash. **Swap in your own
bakery photography** — it is the single highest-impact change you can make:

1. Put files in `public/images/` (e.g. `public/images/brioche-bun.jpg`)
2. In `src/data/products.ts`, change the `IMG` constants and/or add an `image`
   field to individual products: `image: '/images/brioche-bun.jpg'`
3. Nothing else changes — `next/image` handles resizing, AVIF/WebP conversion
   and lazy loading automatically

Aim for roughly 1600px wide, landscape, shot on a plain surface with natural
light. The hero, story, delivery and quality images are set in the `imagery`
object in the same file.

---

## Enquiry forms

Forms post to `/api/enquiry`, which forwards to **Web3Forms** (free, no backend
required) and emails submissions to `contact@breadco.com.au`.

**Setup — about two minutes:**

1. Go to [web3forms.com](https://web3forms.com), enter `contact@breadco.com.au`
2. Confirm the email; they send you an access key
3. Add it to `.env.local`: `WEB3FORMS_ACCESS_KEY=your-key-here`
4. Add the same variable in your hosting provider's environment settings

Until the key is set, submissions return an error and the form shows its direct
email/phone fallback — which is also visible under every form at all times, so a
lead is never silently lost. Forms capture business name, contact person, phone,
email, business type, suburb, products of interest and estimated requirements,
and include a honeypot field for spam.

To use a different provider (Formspree, your own SMTP, a CRM), change the single
`fetch` call in `src/app/api/enquiry/route.ts`.

---

## SEO

- Unique meta title + description per page, targeting *wholesale bakery
  Melbourne*, *burger buns supplier Melbourne*, *bread supplier Melbourne*,
  *café/restaurant bread supplier*, *catering bakery Melbourne* and the Indian
  range keywords
- One `<h1>` per page, semantic heading hierarchy, descriptive alt text on every
  image
- Structured data: `Bakery` (LocalBusiness) sitewide, plus `FAQPage`,
  `ItemList` (product catalogue) and `BreadcrumbList` where relevant
- `sitemap.xml` and `robots.txt` generated from your data at build time
- Canonical URLs and Open Graph tags on every page

**After going live:** set `NEXT_PUBLIC_SITE_URL`, submit the sitemap in Google
Search Console, and claim/refresh the Google Business Profile — for "wholesale
bakery Melbourne" style searches, the local listing does a lot of the work.

---

## Performance

- All pages statically prerendered; no client-side data fetching on load
- Images served as AVIF/WebP at the right size, lazy-loaded below the fold
- Fonts self-hosted by `next/font` with `display: swap` (no layout shift, no
  third-party font request)
- Zero UI dependencies — icons are inline SVG, the FAQ uses native `<details>`
- Only three small client components (nav, catalogue filter, enquiry form)
- `prefers-reduced-motion` respected throughout

---

## Deploying

**Vercel** (simplest): import the repo, add `WEB3FORMS_ACCESS_KEY` and
`NEXT_PUBLIC_SITE_URL` as environment variables, deploy. Point `breadco.com.au`
at it.

**Render**: `render.yaml` is included — create a **Web Service** (not a static
site; Next.js needs Node for the enquiry route and image optimisation), then add
`WEB3FORMS_ACCESS_KEY` in the dashboard.

Either way, keep the old site live until DNS is switched, and set up redirects
from any existing URLs you are retiring.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              header, footer, fonts, sitewide metadata + schema
│   ├── page.tsx                homepage
│   ├── globals.css             design system (colours, type, buttons, fields)
│   ├── products/               catalogue page
│   ├── indian-bakery-range/    separately branded Indian range page
│   ├── wholesale/  about/  faq/  contact/
│   ├── api/enquiry/route.ts    form delivery
│   ├── sitemap.ts  robots.ts  not-found.tsx
├── components/                 header, footer, cards, catalogue, form, UI kit
├── data/
│   ├── site.ts                 ← business info & copy
│   └── products.ts             ← catalogue
└── lib/seo.tsx                 metadata helper + structured data
```

## Design system

Carried over from the BreadCo-v2 direction: cream `#F7F3EE`, espresso `#2C1F14`,
gold `#C49A3C`, with Playfair Display for headings and Manrope for body copy.
The Indian Bakery Range uses a terracotta `#B04A1E` / saffron `#E0A02D` accent so
it reads as its own sub-brand while sitting inside the same system. All tokens
live in the `@theme` block at the top of `src/app/globals.css`.
