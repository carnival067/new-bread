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
          scrolled
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
          className={`container-brand flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-18'
          }`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-baseline gap-1 font-display text-2xl tracking-tight text-espresso"
            aria-label="Bread Co — home"
          >
            Bread<span className="text-gold">Co</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`relative rounded px-3.5 py-2 text-[0.88rem] font-medium transition-colors ${
                    isActive(link.href)
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
            <Link href="/wholesale" className="btn btn-primary hidden md:inline-flex">
              Request Pricing
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-espresso lg:hidden"
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
        className="fixed inset-0 z-40 bg-cream px-6 pt-28 pb-10 lg:hidden"
      >
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-b border-line py-4 font-display text-2xl ${
                  isActive(link.href) ? 'text-gold' : 'text-espresso'
                }`}
              >
                {link.label}
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
        </div>
      </div>
    </>
  );
}
