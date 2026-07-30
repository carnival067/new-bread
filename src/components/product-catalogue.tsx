'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  categories,
  products,
  productCount,
  type CategorySlug,
  type Product,
} from '@/data/products';
import { ProductCard } from './product-card';
import { Icon } from './icons';

type Filter = CategorySlug | 'all';

const validCategories = new Set<string>(categories.map((c) => c.slug));

/* The full catalogue renders on the server so every product is present in
   the static HTML for search engines. The ?category= deep link is applied
   after mount, which keeps the page fully prerenderable. */
export function ProductCatalogue() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('category');
    if (requested && validCategories.has(requested)) {
      setFilter(requested as Filter);
    }
  }, []);

  const tabs: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All Products' },
    ...categories.map((c) => ({ id: c.slug as Filter, label: c.shortName })),
  ];

  const results: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = filter === 'all' || p.category === filter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.applications.toLowerCase().includes(q) ||
        p.weight.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  const activeCategory = categories.find((c) => c.slug === filter);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-y border-line bg-cream/95 px-5 py-4 backdrop-blur-md md:-mx-8 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1"
            role="tablist"
            aria-label="Filter products by category"
          >
            {tabs.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[0.82rem] font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? tab.id === 'indian'
                        ? 'border-spice bg-spice text-white'
                        : 'border-espresso bg-espresso text-cream'
                      : 'border-line text-muted hover:border-gold hover:text-espresso'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative lg:w-72 lg:shrink-0">
            <Icon
              name="search"
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-faint"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${productCount} products…`}
              aria-label="Search products"
              className="field pl-9"
            />
          </div>
        </div>
      </div>

      {/* Active category blurb */}
      {activeCategory ? (
        <div
          className={`mb-8 rounded-xl border p-6 ${
            activeCategory.accent === 'spice'
              ? 'border-spice/20 bg-spice-pale'
              : 'border-line-gold bg-flour'
          }`}
        >
          <h2 className="text-xl">{activeCategory.name}</h2>
          <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-muted">
            {activeCategory.description}
          </p>
          {activeCategory.accent === 'spice' ? (
            <Link
              href="/indian-bakery-range"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-spice hover:text-spice-dark"
            >
              Explore the full Indian Bakery Range
              <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
            </Link>
          ) : null}
        </div>
      ) : null}

      <p className="mb-6 text-[0.85rem] text-muted" aria-live="polite">
        Showing <strong className="text-espresso">{results.length}</strong>{' '}
        {results.length === 1 ? 'product' : 'products'}
        {query ? ` matching “${query}”` : ''}
      </p>

      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product, i) => (
            <ProductCard
              key={`${product.slug}-${i}`}
              product={product}
              priority={i < 3}
            />
          ))}
        </div>
      ) : (
        <div className="card p-14 text-center">
          <h3 className="text-xl">No products match that search</h3>
          <p className="mx-auto mt-3 max-w-md text-[0.92rem] text-muted">
            Try a different term, or clear the filters to browse the full range. If
            you need something we do not list, we can often produce it to
            specification.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setQuery('');
                setFilter('all');
              }}
              className="btn btn-outline"
            >
              Clear filters
            </button>
            <Link href="/contact" className="btn btn-primary">
              Ask about a custom product
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
