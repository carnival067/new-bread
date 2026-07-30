import Image from 'next/image';
import Link from 'next/link';
import { getCategory, productImage, type Product } from '@/data/products';
import { Icon } from './icons';

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const category = getCategory(product.category);
  const spice = category?.accent === 'spice';

  return (
    <article
      className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,31,20,0.1)] ${
        spice ? 'border-spice/20' : ''
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <Image
          src={productImage(product)}
          alt={`${product.name} ${product.weight} — wholesale bakery product from Bread Co Melbourne`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
        <span
          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-wider uppercase backdrop-blur ${
            spice ? 'bg-spice/90 text-white' : 'bg-espresso/85 text-cream'
          }`}
        >
          {category?.shortName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug">{product.name}</h3>
          <span
            className={`shrink-0 rounded px-2 py-1 text-[0.72rem] font-bold ${
              spice ? 'bg-spice-pale text-spice-dark' : 'bg-gold-pale text-caramel'
            }`}
          >
            {product.weight}
          </span>
        </div>

        <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">
          {product.description}
        </p>

        <dl className="mt-5 space-y-2.5 border-t border-line pt-4 text-[0.8rem]">
          <div>
            <dt className="font-bold tracking-wider text-faint uppercase">Pack</dt>
            <dd className="mt-0.5 text-ink/80">{product.pack}</dd>
          </div>
          <div>
            <dt className="font-bold tracking-wider text-faint uppercase">
              Suitable for
            </dt>
            <dd className="mt-0.5 text-ink/80">{product.applications}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <p className="text-[0.78rem] font-medium text-muted">
            Wholesale pricing on request
          </p>
          <Link
            href={`/wholesale?product=${encodeURIComponent(product.name)}`}
            className={`inline-flex items-center gap-1.5 text-[0.82rem] font-semibold transition-colors ${
              spice
                ? 'text-spice hover:text-spice-dark'
                : 'text-caramel hover:text-espresso'
            }`}
          >
            Enquire
            <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span className="sr-only">about {product.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
