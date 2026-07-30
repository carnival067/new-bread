import Image from 'next/image';
import type { Metadata } from 'next';
import { imagery } from '@/data/products';
import { qualityPillars, site, stats, testimonials } from '@/data/site';
import { CheckList, CtaBand, Em, PageHero, SectionIntro } from '@/components/ui';
import { JsonLd, breadcrumbSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'About Bread Co | Wholesale Bakery in Springvale, Melbourne',
  description:
    'Bread Co is a family-owned wholesale bakery in Springvale, Victoria. Led by experienced, qualified bakers, we supply Melbourne’s cafés, restaurants, caterers and hospitality groups with artisan and Indian bakery products baked fresh daily.',
  path: '/about',
  keywords: [
    'wholesale bakery Melbourne',
    'family owned bakery Springvale',
    'artisan bakery Victoria',
    'commercial bakery Melbourne',
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      <PageHero
        eyebrow="Our Story"
        title={
          <>
            A family bakery built on
            <br />
            one uncompromising standard.
          </>
        }
        lead="Bread Co is a family-owned wholesale bakery in Springvale, Victoria. We bake for the businesses that feed Melbourne — and we take that responsibility as seriously as they take their menus."
      />

      {/* ══ STORY ══════════════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image
              src={imagery.story}
              alt="Artisan bread being prepared by hand at Bread Co's Springvale bakery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Bread Co"
              title={
                <>
                  Real craft,
                  <br />
                  <Em>in every delivery.</Em>
                </>
              }
            />
            <div className="mt-7 space-y-5 text-[1rem] leading-relaxed text-muted">
              <p>
                Bread Co began the way most good bakeries do — with one qualified
                baker who refused to compromise. That same standard is now trained
                into every person who works our production floor.
              </p>
              <p>
                We are a family-owned business, and it shows in how we operate. Our
                team takes pride in getting the product right, every single run.
                Nobody here is happy shipping a tray that is not up to standard,
                because we know it lands on someone else&rsquo;s plate with someone
                else&rsquo;s name on it.
              </p>
              <p>
                Everything we make is produced at our Springvale facility and
                delivered across Melbourne and country Victoria. There is no
                third-party manufacturing, no frozen intermediate stage, and no
                warehouse between our oven and your kitchen.
              </p>
              <p className="font-medium text-espresso">{site.brandStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NUMBERS ════════════════════════════════════════════ */}
      <section className="border-y border-line bg-espresso py-14">
        <div className="container-brand grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-gold">{s.value}</p>
              <p className="mt-1.5 text-[0.85rem] leading-snug text-cream/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ COMMITMENT ═════════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="Our Commitment to Quality"
            title={
              <>
                Good bread is not an accident.
                <br />
                <Em>It is a process.</Em>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {qualityPillars.map((p, i) => (
              <div key={p.title} className="card flex gap-5 p-7">
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
      </section>

      {/* ══ PARTNERSHIPS ═══════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand grid gap-14 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Hospitality Partnerships"
              title={
                <>
                  We work as part of
                  <br />
                  <Em>your kitchen.</Em>
                </>
              }
              lead="The best wholesale relationships are not transactional. Our long-standing partners treat us like an extension of their team — and we behave like one."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  'A named contact who knows your account, not a call centre',
                  'Product development input when you are building a new menu',
                  'Honest lead times and early warning if anything changes',
                  'Flexibility around functions, seasonal peaks and quiet weeks',
                  'Consistent specification so your food costing stays stable',
                ]}
              />
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card p-7">
                <blockquote className="text-[0.95rem] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3.5 border-t border-line pt-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-pale font-display text-[0.8rem] font-semibold text-caramel">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[0.88rem] font-semibold text-espresso">
                      {t.name}
                    </span>
                    <span className="block text-[0.78rem] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bake with us."
        lead="If you run a food business in Melbourne and you care about what goes on the plate, we would like to hear from you."
      />
    </>
  );
}
