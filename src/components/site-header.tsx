'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks, site } from '@/data/site';
import { Icon } from './icons';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // The header is transparent until you scroll, and every page opens on a dark
  // hero — espresso via PageHero (and the home page and 404), spice-dark on the
  // Indian range. So while it is transparent the bar always needs light type.
  // Once solid it sits on cream and switches back to dark type; the mobile menu
  // forces the solid state because the bar then sits on the cream menu panel.
  //
  // NB: a new page whose first section is light would need this reconsidered.
  const solid = scrolled || open;
  const onDark = !solid;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? 'border-b border-line bg-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(44,31,20,0.06)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        {/* Utility strip */}
        <div className="hidden border-b border-line-gold bg-espresso text-cream/70 lg:block">
          <div className="container-brand flex h-9 items-center justify-between text-[0.78rem]">
            <p>
              Wholesale bakery supplying cafés, restaurants &amp; caterers across
              Melbourne &amp; country Victoria
            </p>
            <div className="flex items-center gap-5">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
              >
                <Icon name="mail" className="h-3.5 w-3.5" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <nav
          className={`container-brand flex items-center justify-between gap-4 transition-all duration-300 ${
            solid ? 'h-16' : 'h-18'
          }`}
          aria-label="Main navigation"
        >
          {/* Wordmark lockup */}
          <Link
            href="/"
            className="group flex shrink-0 flex-col leading-none"
            aria-label="Bread Co — home"
          >
            <span
              className={`font-display text-[1.45rem] tracking-tight transition-colors sm:text-[1.6rem] ${
                onDark ? 'text-cream' : 'text-espresso'
              }`}
            >
              Bread<span className="text-gold">&nbsp;Co.</span>
            </span>
            <span
              className={`mt-[0.3rem] text-[0.5rem] font-semibold uppercase tracking-[0.26em] transition-colors sm:text-[0.55rem] ${
                onDark ? 'text-cream/55' : 'text-muted'
              }`}
            >
              Australian Made &amp; Owned
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`relative rounded px-3.5 py-2 text-[0.88rem] font-medium transition-colors ${
                    onDark
                      ? isActive(link.href)
                        ? 'text-cream'
                        : 'text-cream/70 hover:text-cream'
                      : isActive(link.href)
                        ? 'text-espresso'
                        : 'text-muted hover:text-espresso'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded bg-gold" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Tap-to-call — the fastest path for a chef on a phone */}
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className={`inline-flex h-11 w-11 items-center justify-center rounded border transition-colors lg:hidden ${
                onDark
                  ? 'border-cream/25 text-cream hover:bg-cream/10'
                  : 'border-line text-espresso hover:bg-espresso/5'
              }`}
            >
              <Icon name="phone" className="h-[1.05rem] w-[1.05rem]" />
            </a>

            <Link href="/wholesale" className="btn btn-primary hidden md:inline-flex">
              Request Pricing
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded border transition-colors lg:hidden ${
                onDark
                  ? 'border-cream/25 text-cream hover:bg-cream/10'
                  : 'border-line text-espresso hover:bg-espresso/5'
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <Icon name={open ? 'close' : 'menu'} strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-cream px-6 pt-24 pb-[calc(2.5rem+env(safe-area-inset-bottom))] lg:hidden"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex min-h-14 items-center justify-between border-b border-line py-3.5 font-display text-2xl ${
                  isActive(link.href) ? 'text-gold' : 'text-espresso'
                }`}
              >
                {link.label}
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 text-faint"
                  strokeWidth={1.8}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <Link href="/wholesale" className="btn btn-primary btn-lg w-full">
            Request Wholesale Pricing
          </Link>
          <a href={site.phoneHref} className="btn btn-outline btn-lg w-full">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="btn btn-outline btn-lg w-full"
          >
            <Icon name="mail" className="h-4 w-4" />
            Email us
          </a>
        </div>

        <p className="mt-8 text-center text-[0.8rem] leading-relaxed text-muted">
          Wholesale bakery supplying cafés, restaurants &amp; caterers across
          Melbourne &amp; country Victoria
        </p>
      </div>
    </>
  );
}
