import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { categories } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' }[] =
    [
      { path: '/', priority: 1, freq: 'weekly' },
      { path: '/products', priority: 0.9, freq: 'weekly' },
      { path: '/indian-bakery-range', priority: 0.9, freq: 'weekly' },
      { path: '/wholesale', priority: 0.9, freq: 'monthly' },
      { path: '/about', priority: 0.6, freq: 'monthly' },
      { path: '/faq', priority: 0.6, freq: 'monthly' },
      { path: '/contact', priority: 0.7, freq: 'monthly' },
    ];

  const categoryViews = categories
    .filter((c) => c.slug !== 'indian')
    .map((c) => ({
      url: `${site.url}/products?category=${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path === '/' ? '' : p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...categoryViews,
  ];
}
