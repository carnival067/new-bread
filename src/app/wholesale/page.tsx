import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { imagery } from '@/data/products';
import { industries, processSteps, site, valueProps } from '@/data/site';
import { EnquiryForm } from '@/components/enquiry-form';
import { CheckList, FeatureCard, PageHero, SectionIntro, Em } from '@/components/ui';
import { Icon } from '@/components/icons';
import { JsonLd, breadcrumbSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Wholesale Bakery Supplier Melbourne | Bread Co',
  description:
    'Open a wholesale bakery account with Bread Co. Consistent quality, fresh daily production, reliable Melbourne-wide delivery and flexible ordering for cafés, restaurants, burger shops, caterers, hotels and distributors. Request pricing and samples.',
  path: '/wholesale',
  keywords: [
    'bakery wholesale supplier',
    'wholesale bread supplier Melbourne',
    'commercial bakery Melbourne',
    'wholesale bakery account Melbourne',
    'bread supplier for cafés Melbourne',
  ],
});

export default function WholesalePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Wholesale', path: '/wholesale' },
        ])}
      />

      <PageHero
        eyebrow="Wholesale Partnerships"
        title={
          <>
            Become a Bread Co
            <br />
            wholesale partner.
          </>
        }
        lead="We supply Melbourne's hospitality industry with bakery products that are consistent enough to build a menu on. Tell us what your kitchen needs and we will put pricing, samples and a delivery schedule in front of you within one business day."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#enquiry" className="btn btn-primary btn-lg">
            Request Wholesale Pricing
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
          <a href={site.phoneHref} className="btn btn-outline-light btn-lg">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </PageHero>

      {/* ══ WHY BUSINESSES CHOOSE US ═══════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="Why Businesses Choose Bread Co"
            title={
              <>
                Seven reasons operators
                <br />
                <Em>stay with us.</Em>
              </>
            }
            lead="Switching bread supplier is disruptive, so operators only do it when the new one is clearly better. This is what makes the difference."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <FeatureCard key={v.title} icon={v.icon} title={v.title} body={v.body} />
            ))}
            <div className="card flex flex-col justify-center bg-espresso p-7">
              <h3 className="text-xl text-cream">Custom solutions</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/70">
                Need a specific bun weight, loaf format, slicing thickness or pack
                configuration for your menu? Custom production runs are available
                subject to volume — talk to us about what you need.
              </p>
              <Link href="#enquiry" className="btn btn-primary mt-6 self-start">
                Discuss a custom run
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPACITY ═══════════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line">
            <Image
              src={imagery.delivery}
              alt="Bread Co wholesale bakery production in Springvale, Melbourne"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Production & Delivery Capability"
              title={
                <>
                  Volume when you need it.
                  <br />
                  <Em>Consistency always.</Em>
                </>
              }
              lead="Our Springvale facility runs through the night, seven days a week. That gives us the headroom to take on multi-site groups and distributors without letting standards slip for a single-site café."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  'Large-scale commercial production capacity with room to grow',
                  'Seven-day-a-week baking schedule',
                  'Daily metro Melbourne delivery, scheduled country Victoria routes',
                  'Most metro deliveries completed before 6am',
                  'Standing orders adjustable week to week — no lock-in contracts',
                  'Additional runs for functions, events and peak trading periods',
                ]}
              />
            </div>
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
                We already bake for
                <br />
                <Em>businesses like yours.</Em>
              </>
            }
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <span
                key={i.name}
                className="rounded-full border border-line-gold bg-flour px-5 py-2.5 text-[0.88rem] font-medium text-espresso"
              >
                {i.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="section bg-flour">
        <div className="container-brand">
          <SectionIntro
            align="center"
            eyebrow="How It Works"
            title={
              <>
                From first enquiry to
                <br />
                <Em>first delivery.</Em>
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

      {/* ══ ENQUIRY FORM ═══════════════════════════════════════ */}
      <section id="enquiry" className="section scroll-mt-24">
        <div className="container-brand grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="Wholesale Enquiry"
              title={
                <>
                  Request pricing
                  <br />
                  <Em>and samples.</Em>
                </>
              }
              lead="The more you tell us about your volumes and delivery needs, the more accurate our first quote will be. Every enquiry gets a reply within one business day."
            />

            <div id="samples" className="card mt-9 scroll-mt-28 p-6">
              <h3 className="text-lg">Requesting samples?</h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                Note the products you would like to try in the{' '}
                <em className="not-italic font-semibold text-espresso">
                  Products you are interested in
                </em>{' '}
                field and we will arrange a sample drop with your quote.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-line bg-flour p-5 transition-colors hover:border-gold"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block text-[0.75rem] font-bold tracking-wider text-muted uppercase">
                    Prefer to talk it through?
                  </span>
                  <span className="block font-semibold text-espresso">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}?subject=Wholesale%20account%20enquiry`}
                className="flex items-center gap-4 rounded-xl border border-line bg-flour p-5 transition-colors hover:border-gold"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel">
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

          <EnquiryForm variant="wholesale" />
        </div>
      </section>
    </>
  );
}
