import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  categories,
  featuredProducts,
  imagery,
  productCount,
} from '@/data/products';
import {
  faqs,
  industries,
  processSteps,
  qualityPillars,
  site,
  stats,
  testimonials,
  valueProps,
} from '@/data/site';
import { ProductCard } from '@/components/product-card';
import { FaqAccordion } from '@/components/faq-accordion';
import { CheckList, CtaBand, Em, FeatureCard, SectionIntro } from '@/components/ui';
import { Icon } from '@/components/icons';
import { JsonLd, faqSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title:
    'Wholesale Bakery Melbourne | Bread Supplier for Cafés & Restaurants',
  description:
    'Premium wholesale bakery solutions across Melbourne. Bread Co supplies cafés, restaurants, burger shops, caterers and hotels with artisan sourdough, burger buns, brioche, catering loaves and authentic Indian bakery products — baked fresh daily in Springvale.',
  path: '/',
  keywords: [
    'wholesale bakery Melbourne',
    'bread supplier Melbourne',
    'burger buns supplier Melbourne',
    'café bread supplier',
    'restaurant bread supplier',
    'catering bakery Melbourne',
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="grain relative overflow-hidden bg-espresso pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-brand relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <p className="eyebrow text-gold-light">
              Melbourne&rsquo;s Wholesale Artisan Bakery
            </p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] text-cream sm:text-5xl lg:text-[3.9rem]">
              Premium Wholesale
              <br />
              Bakery Solutions
              <br />
              <Em>Across Melbourne.</Em>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-cream/70">
              Freshly baked breads and bakery products supplied to cafés,
              restaurants, caterers and hospitality businesses — baked overnight in
              Springvale and delivered before service.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/wholesale" className="btn btn-primary btn-lg">
                Request Wholesale Account
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link href="/wholesale#samples" className="btn btn-outline-light btn-lg">
                Request Product Samples
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2.5">
              {[
                'Family owned',
                'Experienced bakers',
                'Baked fresh daily',
                'Melbourne & country VIC',
              ].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-cream/15 px-3.5 py-1.5 text-[0.78rem] font-medium text-cream/70"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <Image
                src={imagery.hero}
                alt="Freshly baked artisan sourdough loaves from Bread Co's wholesale bakery in Melbourne"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[17rem] rounded-xl border border-line bg-flour p-5 shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:-left-8">
              <p className="font-display text-lg text-espresso">
                Naturally leavened
              </p>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                Live sourdough culture, long ferment, no unnecessary additives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════ */}
      <section className="border-b border-line bg-flour py-10">
        <div className="container-brand grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-display text-4xl text-gold">{s.value}</p>
              <p className="mt-1.5 text-[0.85rem] leading-snug text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY CHOOSE BREAD CO ════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="Why Choose Bread Co"
            title={
              <>
                A wholesale partner, <Em>not just a supplier.</Em>
              </>
            }
            lead="Hospitality runs on reliability. Everything we do is built around one promise: the bread you ordered, exactly as you expect it, on your bench before service."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <FeatureCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                body={v.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT RANGE ══════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Our Product Range"
              title={
                <>
                  Seven categories.
                  <br />
                  <Em>{productCount} wholesale lines.</Em>
                </>
              }
              lead="From naturally leavened sourdough to burger buns, catering tins and an authentic Indian bakery range — one supplier for the whole bread order."
            />
            <Link href="/products" className="btn btn-outline shrink-0">
              View full catalogue
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const spice = c.accent === 'spice';
              return (
                <Link
                  key={c.slug}
                  href={
                    spice ? '/indian-bakery-range' : `/products?category=${c.slug}`
                  }
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(44,31,20,0.13)] ${
                    spice ? 'border-spice/25 sm:col-span-2 lg:col-span-1' : 'border-line'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark">
                    <Image
                      src={c.image}
                      alt={`${c.name} — wholesale bakery products supplied across Melbourne`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent" />
                    {spice ? (
                      <span className="absolute top-3 right-3 rounded-full bg-spice px-3 py-1 text-[0.68rem] font-bold tracking-wider text-white uppercase">
                        New Range
                      </span>
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-xl text-cream">{c.shortName}</h3>
                    </div>
                  </div>
                  <div className="bg-warmwhite p-5">
                    <p className="text-[0.88rem] leading-relaxed text-muted">
                      {c.description}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold ${
                        spice ? 'text-spice' : 'text-caramel'
                      }`}
                    >
                      Browse range
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.2}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ═════════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="Industries We Supply"
            title={
              <>
                Built for food businesses
                <br />
                <Em>of every kind.</Em>
              </>
            }
            lead="We understand how different kitchens work, and we bake for the way each one actually runs."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-flour p-6">
                <h3 className="font-body text-[0.95rem] font-bold tracking-wide text-espresso uppercase">
                  {ind.name}
                </h3>
                <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">
                  {ind.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUALITY & FRESHNESS ════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line">
            <Image
              src={imagery.quality}
              alt="Artisan bread cooling at Bread Co's Springvale bakery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Quality & Freshness"
              title={
                <>
                  Baked overnight.
                  <br />
                  <Em>On your bench by dawn.</Em>
                </>
              }
            />
            <div className="mt-9 space-y-7">
              {qualityPillars.map((p, i) => (
                <div key={p.title} className="flex gap-5">
                  <span className="font-display text-2xl text-gold/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ DELIVERY CAPABILITY ════════════════════════════════ */}
      <section className="section">
        <div className="container-brand grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Delivery Capability"
              title={
                <>
                  A delivery run you can
                  <br />
                  <Em>build a service around.</Em>
                </>
              }
              lead="Our fleet leaves the bakery through the early hours so your order is waiting when your kitchen opens. No warehouse stage, no frozen stock, no guessing."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  'Daily delivery across metropolitan Melbourne',
                  'Scheduled routes servicing country Victoria',
                  'Most metro drops completed before 6am',
                  'Standing orders with flexible week-to-week adjustment',
                  'Extra runs available for functions and peak trading',
                  'Direct line to the team for late changes',
                ]}
              />
            </div>
            <Link href="/wholesale" className="btn btn-dark mt-9">
              Check delivery for your suburb
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
          <div className="relative order-first aspect-[5/4] overflow-hidden rounded-2xl border border-line lg:order-last">
            <Image
              src={imagery.delivery}
              alt="Wholesale bread order packed for delivery to Melbourne cafés and restaurants"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Best Sellers"
              title={
                <>
                  Our most popular
                  <br />
                  <Em>wholesale products.</Em>
                </>
              }
            />
            <Link href="/products" className="btn btn-outline shrink-0">
              See all {productCount} products
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <p className="mt-8 text-center text-[0.85rem] text-muted">
            Wholesale pricing available upon request — tailored to your volume,
            product mix and delivery frequency.
          </p>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="What Our Customers Say"
            title={
              <>
                Trusted by Melbourne&rsquo;s
                <br />
                <Em>best food businesses.</Em>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex h-full flex-col p-7">
                <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-pale font-display text-[0.85rem] font-semibold text-caramel">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[0.9rem] font-semibold text-espresso">
                      {t.name}
                    </span>
                    <span className="block text-[0.8rem] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═══════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="Getting Started"
            title={
              <>
                Set up a wholesale account
                <br />
                <Em>in four simple steps.</Em>
              </>
            }
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <li key={s.step} className="card p-7">
                <span className="font-display text-3xl text-gold/45">{s.step}</span>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ FAQ PREVIEW ════════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand max-w-3xl">
          <SectionIntro
            align="center"
            eyebrow="Common Questions"
            title={
              <>
                Frequently asked by
                <br />
                <Em>our wholesale partners.</Em>
              </>
            }
          />
          <div className="mt-12">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-caramel hover:text-espresso"
            >
              Read all frequently asked questions
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Let’s get better bread on your menu."
        lead={site.brandStatement}
      />
    </>
  );
}
