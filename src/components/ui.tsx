import Link from 'next/link';
import { Icon, type IconName } from './icons';

/* ── Section intro (eyebrow + heading + lead) ─────────────────── */
export function SectionIntro({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'default',
  className = '',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'light' | 'spice';
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`eyebrow ${centered ? 'eyebrow-center' : ''} ${
            tone === 'light'
              ? 'text-gold-light'
              : tone === 'spice'
                ? 'text-spice'
                : ''
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-3xl md:text-4xl lg:text-[2.75rem] ${
          tone === 'light' ? 'text-cream' : ''
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-[1.02rem] leading-relaxed ${
            tone === 'light' ? 'text-cream/70' : 'text-muted'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ── Emphasised word inside a display heading ─────────────────── */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-normal not-italic text-gold">{children}</em>;
}

/* ── Page hero used by every interior page ────────────────────── */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-espresso pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-brand relative">
        <p className="eyebrow text-gold-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl text-cream md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-cream/70">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

/* ── Feature card ─────────────────────────────────────────────── */
export function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <div className="card group h-full p-7 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(44,31,20,0.09)]">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-pale text-caramel transition-colors duration-300 group-hover:bg-gold group-hover:text-espresso">
        <Icon name={icon} />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

/* ── Full-width conversion band ───────────────────────────────── */
export function CtaBand({
  title = 'Ready to put better bread on your menu?',
  lead = 'Send through your details and we will come back with wholesale pricing, product samples and a delivery schedule that fits your service.',
  primary = { href: '/wholesale', label: 'Request Wholesale Pricing' },
  secondary = { href: '/contact', label: 'Contact Our Sales Team' },
}: {
  title?: string;
  lead?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="grain relative overflow-hidden bg-espresso py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-brand relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-cream md:text-[2.6rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-cream/70">
          {lead}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={primary.href} className="btn btn-primary btn-lg">
            {primary.label}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
          <Link href={secondary.href} className="btn btn-outline-light btn-lg">
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Tick list ────────────────────────────────────────────────── */
export function CheckList({
  items,
  tone = 'default',
}: {
  items: readonly string[];
  tone?: 'default' | 'light' | 'spice';
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              tone === 'light'
                ? 'bg-gold/20 text-gold-light'
                : tone === 'spice'
                  ? 'bg-spice/12 text-spice'
                  : 'bg-gold-pale text-caramel'
            }`}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={3} />
          </span>
          <span
            className={`text-[0.95rem] leading-relaxed ${
              tone === 'light' ? 'text-cream/75' : 'text-muted'
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
