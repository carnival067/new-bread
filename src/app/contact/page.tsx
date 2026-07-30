import type { Metadata } from 'next';
import { site } from '@/data/site';
import { EnquiryForm } from '@/components/enquiry-form';
import { Em, PageHero, SectionIntro } from '@/components/ui';
import { Icon } from '@/components/icons';
import { JsonLd, breadcrumbSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Contact Bread Co | Wholesale Bakery Melbourne',
  description:
    'Contact Bread Co’s wholesale team in Springvale, Melbourne. Call 0481 760 075, email contact@breadco.com.au, or send an enquiry for wholesale pricing, product samples and delivery availability.',
  path: '/contact',
  keywords: [
    'contact wholesale bakery Melbourne',
    'bread supplier contact Melbourne',
    'bakery Springvale contact',
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Talk to our
            <br />
            wholesale team.
          </>
        }
        lead="Whether you need pricing, samples, a delivery check for your suburb, or a custom product spec — we will get you a straight answer within one business day."
      />

      {/* ══ CONTACT CARDS ══════════════════════════════════════ */}
      <section className="section">
        <div className="container-brand">
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={site.phoneHref}
              className="card group p-7 transition-shadow hover:shadow-[0_14px_36px_rgba(44,31,20,0.09)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel transition-colors group-hover:bg-gold group-hover:text-espresso">
                <Icon name="phone" />
              </span>
              <h2 className="mt-5 text-lg">Phone</h2>
              <p className="mt-1.5 text-[1.05rem] font-semibold text-caramel">
                {site.phone}
              </p>
              <p className="mt-2 text-[0.85rem] text-muted">
                Fastest way to reach us during production hours.
              </p>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="card group p-7 transition-shadow hover:shadow-[0_14px_36px_rgba(44,31,20,0.09)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel transition-colors group-hover:bg-gold group-hover:text-espresso">
                <Icon name="mail" />
              </span>
              <h2 className="mt-5 text-lg">Email</h2>
              <p className="mt-1.5 break-all text-[1.02rem] font-semibold text-caramel">
                {site.email}
              </p>
              <p className="mt-2 text-[0.85rem] text-muted">
                Send through your requirements and we will reply with pricing.
              </p>
            </a>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card group p-7 transition-shadow hover:shadow-[0_14px_36px_rgba(44,31,20,0.09)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel transition-colors group-hover:bg-gold group-hover:text-espresso">
                <Icon name="pin" />
              </span>
              <h2 className="mt-5 text-lg">Bakery</h2>
              <p className="mt-1.5 text-[0.98rem] font-semibold text-caramel">
                {site.address.street}
                <br />
                {site.address.suburb} {site.address.state} {site.address.postcode}
              </p>
              <p className="mt-2 text-[0.85rem] text-muted">
                Wholesale collection by arrangement.
              </p>
            </a>
          </div>

          {/* Hours + socials */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card p-7 md:col-span-2">
              <h2 className="text-lg">Trading hours</h2>
              <dl className="mt-4 divide-y divide-line">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-center justify-between gap-4 py-2.5 text-[0.9rem]"
                  >
                    <dt className="font-medium text-espresso">{h.days}</dt>
                    <dd className="text-muted">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[0.82rem] text-muted">
                Deliveries run through the early hours — most metro drops are
                completed before 6am.
              </p>
            </div>

            <div className="card p-7">
              <h2 className="text-lg">Follow the bakery</h2>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                New products, daily bakes and behind-the-scenes from the production
                floor.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORM + MAP ═════════════════════════════════════════ */}
      <section className="section bg-flour pt-0">
        <div className="container-brand grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionIntro
              eyebrow="Send an Enquiry"
              title={
                <>
                  Tell us what
                  <br />
                  <Em>your kitchen needs.</Em>
                </>
              }
            />
            <div className="mt-9">
              <EnquiryForm variant="contact" />
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Find Us"
              title={
                <>
                  Springvale,
                  <br />
                  <Em>Victoria.</Em>
                </>
              }
            />
            <div className="mt-9 overflow-hidden rounded-xl border border-line">
              <iframe
                src={site.mapsEmbed}
                title={`Map showing Bread Co at ${site.addressLine}`}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-5 w-full"
            >
              <Icon name="pin" className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
