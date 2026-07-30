import type { Metadata } from 'next';
import { site, faqs } from '@/data/site';
import { products, categories } from '@/data/products';

/* ── Page metadata helper ─────────────────────────────────────── */
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  return {
    // `absolute` opts out of the root layout's "%s | Bread Co …" template so
    // each page controls its own title length (search engines truncate ~60ch)
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/* ── Structured data ──────────────────────────────────────────── */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  '@id': `${site.url}/#bakery`,
  name: site.name,
  alternateName: 'BreadCo',
  description:
    'Bread Co is a Melbourne wholesale bakery supplying cafés, restaurants, burger shops, caterers, hotels, food distributors and retailers with artisan sourdough, burger buns, brioche, rolls, catering loaves and an authentic Indian bakery range.',
  url: site.url,
  telephone: '+61481760075',
  email: site.email,
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.suburb,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: 'AU',
  },
  areaServed: [
    { '@type': 'City', name: 'Melbourne' },
    { '@type': 'State', name: 'Victoria' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '05:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '05:00',
      closes: '12:00',
    },
  ],
  sameAs: site.socials.map((s) => s.href),
  makesOffer: categories.map((c) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Product',
      name: c.name,
      description: c.description,
    },
    availability: 'https://schema.org/InStock',
    businessFunction: 'https://schema.org/Sell',
    eligibleCustomerType: 'https://schema.org/Business',
  })),
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export const productCatalogueSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bread Co Wholesale Product Range',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `${p.name} ${p.weight}`,
      description: p.description,
      category: categories.find((c) => c.slug === p.category)?.name,
      brand: { '@type': 'Brand', name: site.name },
    },
  })),
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path === '/' ? '' : t.path}`,
    })),
  };
}

/* Renders a <script type="application/ld+json"> block */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
