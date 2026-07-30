import Link from 'next/link';
import { navLinks, site } from '@/data/site';
import { categories } from '@/data/products';
import { Icon } from './icons';

export function SiteFooter() {
  return (
    <footer className="grain bg-charcoal text-cream/65">
      <div className="container-brand py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-cream">
              Bread<span className="text-gold">Co</span>
            </p>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed">
              {site.brandStatement}
            </p>
            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-cream/15 px-3 py-1.5 text-[0.78rem] font-medium transition-colors hover:border-gold hover:text-gold-light"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer navigation">
            <h2 className="text-[0.75rem] font-bold tracking-[0.16em] text-cream uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5 text-[0.9rem]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Product categories */}
          <nav aria-label="Product categories">
            <h2 className="text-[0.75rem] font-bold tracking-[0.16em] text-cream uppercase">
              Our Range
            </h2>
            <ul className="mt-5 space-y-2.5 text-[0.9rem]">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={
                      c.slug === 'indian'
                        ? '/indian-bakery-range'
                        : `/products?category=${c.slug}`
                    }
                    className="transition-colors hover:text-gold-light"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[0.75rem] font-bold tracking-[0.16em] text-cream uppercase">
              Get In Touch
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.9rem]">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-gold-light"
                >
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-gold-light"
                >
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.suburb} {site.address.state} {site.address.postcode}
                </span>
              </li>
            </ul>
            <Link href="/wholesale" className="btn btn-primary mt-6">
              Become a Wholesale Partner
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-[0.8rem] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Wholesale bakery, Springvale
            Victoria. All rights reserved.
          </p>
          <p className="text-cream/40">
            Wholesale pricing available upon request — prices are not published
            publicly.
          </p>
        </div>
      </div>
    </footer>
  );
}
