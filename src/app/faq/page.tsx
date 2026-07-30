import type { Metadata } from 'next';
import { faqs } from '@/data/site';
import { FaqAccordion } from '@/components/faq-accordion';
import { CtaBand, PageHero } from '@/components/ui';
import { JsonLd, breadcrumbSchema, faqSchema, pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Wholesale Bakery FAQ | Bread Co Melbourne',
  description:
    'Answers to common questions about ordering wholesale bakery products from Bread Co Melbourne — delivery areas, minimum orders, wholesale pricing, samples, custom specifications and our Indian bakery range.',
  path: '/faq',
  keywords: [
    'wholesale bakery FAQ Melbourne',
    'bread delivery Melbourne wholesale',
    'minimum order wholesale bakery',
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Everything wholesale
            <br />
            buyers ask us.
          </>
        }
        lead="If your question is not answered here, call us on 0481 760 075 — we would rather have a two-minute conversation than leave you guessing."
      />

      <section className="section">
        <div className="container-brand max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        lead="Our wholesale team answers every enquiry within one business day — pricing, samples, delivery availability or custom specifications."
        primary={{ href: '/contact', label: 'Contact Our Sales Team' }}
        secondary={{ href: '/wholesale', label: 'Request Wholesale Pricing' }}
      />
    </>
  );
}
