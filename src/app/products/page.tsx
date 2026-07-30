import Link from 'next/link';
import type { Metadata } from 'next';
import { productCount } from '@/data/products';
import { ProductCatalogue } from '@/components/product-catalogue';
import { CtaBand, PageHero } from '@/components/ui';
import { Icon } from '@/components/icons';
import {
  JsonLd,
  breadcrumbSchema,
  pageMeta,
  productCatalogueSchema,
} from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Wholesale Bakery Products Melbourne | Bread Co Catalogue',
  description:
    'Browse Bread Co’s full wholesale catalogue — artisan sourdough, traditional breads, catering tins, burger buns, brioche, dinner rolls, donuts and our Indian bakery range. Wholesale pricing available on request.',
  path: '/products',
  keywords: [
    'wholesale bakery products Melbourne',
    'burger buns supplier Melbourne',
    'brioche buns wholesale Melbourne',
    'sourdough wholesale Melbourne',
    'dinner rolls supplier Melbourne',
    'catering bread Melbourne',
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          productCatalogueSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Our Product Range"
        title={
          <>
            {productCount} wholesale bakery products,
            <br />
            baked fresh in Melbourne.
          </>
        }
        lead="Every product below is produced daily at our Springvale bakery and delivered to cafés, restaurants, burger shops, caterers, hotels and retailers across Melbourne and country Victoria."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/wholesale" className="btn btn-primary">
            Request Wholesale Pricing
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
          <Link href="/wholesale#samples" className="btn btn-outline-light">
            Request Samples
          </Link>
        </div>
        <p className="mt-6 text-[0.85rem] text-cream/50">
          Prices are not published publicly. Wholesale pricing is quoted to your
          volume, product mix and delivery frequency.
        </p>
      </PageHero>

      <section className="section">
        <div className="container-brand">
          <ProductCatalogue />
        </div>
      </section>

      <section className="border-t border-line bg-flour py-16">
        <div className="container-brand grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Need a custom specification?',
              body: 'Particular bun weight, loaf format or pack configuration? Custom runs are available subject to volume.',
            },
            {
              title: 'Want to taste before you commit?',
              body: 'We send samples to prospective wholesale partners so your kitchen can test products in your own service.',
            },
            {
              title: 'Ordering for multiple venues?',
              body: 'One supplier, one invoice and one consistent standard across every site in your group.',
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-lg">{item.title}</h2>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                {item.body}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-caramel hover:text-espresso"
              >
                Talk to our sales team
                <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
