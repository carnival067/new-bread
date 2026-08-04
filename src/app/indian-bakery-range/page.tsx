import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategory, imagery, productsByCategory } from '@/data/products';
import { site } from '@/data/site';
import { ProductCard } from '@/components/product-card';
import { EnquiryForm } from '@/components/enquiry-form';
import { CheckList, SectionIntro } from '@/components/ui';
import { Icon } from '@/components/icons';
import { JsonLd, breadcrumbSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Indian Bakery Range Melbourne | Wholesale Paav & Kulcha',
  description:
    'Bread Co supplies authentic Indian bakery products wholesale across Melbourne — Indian Paav 80g and 60g, Kulcha packs of 4 and 800g soft white bread. Baked fresh daily for Indian restaurants, caterers, grocery stores and hospitality venues.',
  path: '/indian-bakery-range',
  keywords: [
    'Indian paav supplier Melbourne',
    'wholesale kulcha Melbourne',
    'Indian bakery wholesale Melbourne',
    'pav bhaji buns supplier',
    'Indian restaurant bread supplier Melbourne',
    'wholesale white bread Melbourne',
  ],
});

const indianProducts = productsByCategory('indian');

export default function IndianRangePage() {
  const category = getCategory('indian');

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Indian Bakery Range', path: '/indian-bakery-range' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Bread Co Indian Bakery Range',
            numberOfItems: indianProducts.length,
            itemListElement: indianProducts.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Product',
                name: `${p.name} ${p.weight}`,
                description: p.description,
                brand: { '@type': 'Brand', name: site.name },
              },
            })),
          },
        ]}
      />

      {/* ══ HERO — distinct spice branding ═════════════════════ */}
      <section className="relative overflow-hidden bg-spice-dark pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Woven accent pattern, pure CSS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #e0a02d 0, #e0a02d 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, #e0a02d 0, #e0a02d 1px, transparent 1px, transparent 14px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-saffron/20 blur-3xl"
        />
        <div className="container-brand relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-saffron before:bg-saffron">
              A Dedicated Range from Bread Co
            </p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
              Authentic Indian
              <br />
              Bakery Products,
              <br />
              <span className="text-saffron">Baked Fresh Daily.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
              Soft paav, layered kulcha, street-food buns and generous white loaves
              — produced every morning at our Springvale bakery and supplied
              wholesale to Indian restaurants, caterers, grocery stores and
              hospitality venues across Melbourne.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#enquiry" className="btn btn-primary btn-lg">
                Request Indian Range Pricing
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <a href={site.phoneHref} className="btn btn-outline-light btn-lg">
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {[
                'Fresh daily production',
                'Consistent sizing',
                'Wholesale volumes',
                'Reliable delivery',
              ].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-saffron/35 px-3.5 py-1.5 text-[0.78rem] font-medium text-saffron"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-saffron/25 shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
            <Image
              src={imagery.indian}
              // PLACEHOLDER IMAGE — not Bread Co's own Indian range. Alt text is
              // kept accurate to what the photo actually shows until we have
              // real paav/kulcha photography to swap in.
              alt="Freshly baked bread — indicative of the Indian bakery range supplied by Bread Co"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══ TWO RANGES, ONE BAKERY ═════════════════════════════ */}
      <section className="border-b border-line bg-spice-pale py-12">
        <div className="container-brand grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <h2 className="font-body text-[0.78rem] font-bold tracking-[0.16em] text-spice uppercase">
              One supplier, two specialist ranges
            </h2>
            <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-ink/85">
              Bread Co supplies both{' '}
              <strong className="font-semibold text-espresso">
                premium artisan bakery products
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-spice-dark">
                authentic Indian bakery products
              </strong>{' '}
              — so venues running both menus can order sourdough, burger buns, paav
              and kulcha on a single delivery, from a single invoice.
            </p>
          </div>
          <Link href="/products" className="btn btn-outline shrink-0">
            View the artisan range
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </div>
      </section>

      {/* ══ PRODUCTS ═══════════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            tone="spice"
            eyebrow="The Range"
            title={
              <>
                Made the way Indian
                <br />
                <span className="text-spice">kitchens actually use it.</span>
              </>
            }
            lead={category?.description}
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
            {indianProducts.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 2} />
            ))}
          </div>
          <p className="mt-8 text-center text-[0.85rem] text-muted">
            Wholesale pricing available upon request. Pack sizes and delivery
            frequency tailored to your venue.
          </p>
        </div>
      </section>

      {/* ══ WHY / WHO ══════════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand grid gap-14 lg:grid-cols-2">
          <div>
            <SectionIntro
              tone="spice"
              eyebrow="Why Bread Co"
              title={
                <>
                  Authenticity, at
                  <br />
                  <span className="text-spice">commercial scale.</span>
                </>
              }
              lead="Getting paav right is about texture and consistency — a soft, fine crumb that tears cleanly and holds up to bhaji, without going dense by service time."
            />
            <div className="mt-8">
              <CheckList
                tone="spice"
                items={[
                  'Authentic Indian-style bakery products, not a generic bread substitute',
                  'Fresh daily production — never frozen, never held in a warehouse',
                  'Consistent sizing and weight so your plating and costing stay predictable',
                  'Genuine wholesale supply capability for high-volume venues',
                  'Reliable Melbourne-wide delivery on a fixed schedule',
                  'Flexible ordering for functions, festivals and seasonal peaks',
                ]}
              />
            </div>
          </div>

          <div>
            <SectionIntro
              tone="spice"
              eyebrow="Who We Supply"
              title={
                <>
                  Trusted by Melbourne&rsquo;s
                  <br />
                  <span className="text-spice">Indian food businesses.</span>
                </>
              }
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: 'Indian Restaurants',
                  body: 'Paav for bhaji and vada pav, kulcha for chole — sized for consistent plating across a full service.',
                },
                {
                  name: 'Catering Businesses',
                  body: 'Volume production for weddings, functions and festivals, delivered on the morning you need it.',
                },
                {
                  name: 'Grocery Stores',
                  body: 'Fresh daily paav, kulcha and 800g white loaves for shelf-ready retail supply.',
                },
                {
                  name: 'Hospitality Venues',
                  body: 'Hotels, clubs and function centres running Indian menus alongside Western service.',
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-spice/15 bg-spice-pale p-5"
                >
                  <h3 className="font-body text-[0.9rem] font-bold tracking-wide text-spice-dark uppercase">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/75">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ENQUIRY ════════════════════════════════════════════ */}
      <section id="enquiry" className="section scroll-mt-24">
        <div className="container-brand grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              tone="spice"
              eyebrow="Indian Range Enquiry"
              title={
                <>
                  Get pricing for the
                  <br />
                  <span className="text-spice">Indian Bakery Range.</span>
                </>
              }
              lead="Tell us your venue type and rough weekly volumes. We will come back within one business day with wholesale pricing, samples and a delivery schedule."
            />
            <div className="mt-9 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-spice/15 bg-spice-pale p-5 transition-colors hover:border-spice/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-spice text-white">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block text-[0.75rem] font-bold tracking-wider text-muted uppercase">
                    Speak to us directly
                  </span>
                  <span className="block font-semibold text-espresso">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}?subject=Indian%20Bakery%20Range%20enquiry`}
                className="flex items-center gap-4 rounded-xl border border-spice/15 bg-spice-pale p-5 transition-colors hover:border-spice/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-spice text-white">
                  <Icon name="mail" />
                </span>
                <span>
                  <span className="block text-[0.75rem] font-bold tracking-wider text-muted uppercase">
                    Email the wholesale team
                  </span>
                  <span className="block font-semibold text-espresso">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <EnquiryForm
            variant="wholesale"
            tone="spice"
            defaultProduct="Indian Bakery Range — "
          />
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-spice-dark py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #e0a02d 0, #e0a02d 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, #e0a02d 0, #e0a02d 1px, transparent 1px, transparent 14px)',
          }}
        />
        <div className="container-brand relative text-center">
          <h2 className="mx-auto max-w-2xl text-3xl text-white md:text-[2.6rem]">
            Fresh paav and kulcha, delivered before you open.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/70">
            Join the Indian restaurants, caterers and grocers across Melbourne who
            rely on Bread Co for consistent, authentic bakery products every day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="#enquiry" className="btn btn-primary btn-lg">
              Request Wholesale Pricing
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
