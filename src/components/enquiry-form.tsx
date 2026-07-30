'use client';

import { useEffect, useState } from 'react';
import { businessTypes, site } from '@/data/site';
import { Icon } from './icons';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const initial = {
  businessName: '',
  contactName: '',
  phone: '',
  email: '',
  businessType: '',
  suburb: '',
  products: '',
  volume: '',
  message: '',
};

export function EnquiryForm({
  variant = 'wholesale',
  defaultProduct = '',
  tone = 'default',
}: {
  variant?: 'wholesale' | 'contact' | 'samples';
  defaultProduct?: string;
  tone?: 'default' | 'spice';
}) {
  const [values, setValues] = useState({
    ...initial,
    products: defaultProduct,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  /* Carries context from a product card ("Enquire" → /wholesale?product=…)
     into the form. Applied after mount so the page stays prerenderable. */
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('product');
    if (fromUrl) {
      setValues((v) => ({
        ...v,
        products: v.products ? `${v.products}${fromUrl}` : fromUrl,
      }));
    }
  }, []);

  const set =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const subject =
    variant === 'samples'
      ? 'Product sample request'
      : variant === 'contact'
        ? 'Website enquiry'
        : 'Wholesale account enquiry';

  /* Plain-text version of the enquiry, reused for the mailto fallback */
  const asText = () =>
    [
      `Business name: ${values.businessName}`,
      `Contact person: ${values.contactName}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Business type: ${values.businessType}`,
      `Suburb / delivery area: ${values.suburb}`,
      `Products of interest: ${values.products}`,
      `Estimated requirements: ${values.volume}`,
      '',
      values.message,
    ].join('\n');

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `${subject} — ${values.businessName || 'New enquiry'}`,
  )}&body=${encodeURIComponent(asText())}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    // Honeypot — bots fill hidden fields, humans do not
    const form = e.currentTarget;
    const botField = form.elements.namedItem('company_website') as HTMLInputElement;
    if (botField?.value) {
      setStatus('sent');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, subject }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  const accent = tone === 'spice';

  if (status === 'sent') {
    return (
      <div
        className={`card p-10 text-center ${accent ? 'border-spice/25 bg-spice-pale' : ''}`}
        role="status"
      >
        <span
          className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full ${
            accent ? 'bg-spice text-white' : 'bg-gold text-espresso'
          }`}
        >
          <Icon name="check" className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-2xl">Thank you — your enquiry is with us.</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">
          A member of our wholesale team will be in touch within one business day
          with pricing, samples and a delivery schedule. If it is urgent, call us on{' '}
          <a href={site.phoneHref} className="font-semibold text-caramel underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`card relative p-6 md:p-9 ${accent ? 'border-spice/25' : ''}`}
      noValidate={false}
    >
      {/* Honeypot */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className="field-label">
            Business name *
          </label>
          <input
            id="businessName"
            name="businessName"
            required
            autoComplete="organization"
            value={values.businessName}
            onChange={set('businessName')}
            className="field"
            placeholder="e.g. Halo Café"
          />
        </div>

        <div>
          <label htmlFor="contactName" className="field-label">
            Contact person *
          </label>
          <input
            id="contactName"
            name="contactName"
            required
            autoComplete="name"
            value={values.contactName}
            onChange={set('contactName')}
            className="field"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={set('phone')}
            className="field"
            placeholder="04XX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            className="field"
            placeholder="you@business.com.au"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="field-label">
            Business type *
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            value={values.businessType}
            onChange={set('businessType')}
            className="field"
          >
            <option value="">Select…</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="suburb" className="field-label">
            Suburb / delivery area
          </label>
          <input
            id="suburb"
            name="suburb"
            autoComplete="address-level2"
            value={values.suburb}
            onChange={set('suburb')}
            className="field"
            placeholder="e.g. Richmond VIC"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="products" className="field-label">
            Products you are interested in
          </label>
          <input
            id="products"
            name="products"
            value={values.products}
            onChange={set('products')}
            className="field"
            placeholder="e.g. Brioche buns 90g, White sourdough 650g, Indian Paav 80g"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="volume" className="field-label">
            Estimated requirements
          </label>
          <input
            id="volume"
            name="volume"
            value={values.volume}
            onChange={set('volume')}
            className="field"
            placeholder="e.g. approx. 300 buns and 40 loaves per week, delivered Mon–Sat"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={set('message')}
            className="field resize-y"
            placeholder="Delivery times, custom specifications, sample requests…"
          />
        </div>
      </div>

      {status === 'error' ? (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-spice/30 bg-spice-pale p-4 text-[0.88rem] text-spice-dark"
        >
          We could not send that automatically ({error}). Please use the direct email
          option below and we will pick it up straight away.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`btn btn-lg w-full disabled:cursor-not-allowed disabled:opacity-60 ${
            accent ? 'btn-spice' : 'btn-primary'
          }`}
        >
          {status === 'sending'
            ? 'Sending…'
            : variant === 'samples'
              ? 'Request Product Samples'
              : variant === 'contact'
                ? 'Send Enquiry'
                : 'Request Wholesale Pricing'}
          {status !== 'sending' ? (
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
          ) : null}
        </button>

        {/* Fallback — always visible, never lose a lead */}
        <p className="text-center text-[0.82rem] leading-relaxed text-muted">
          Prefer not to use the form? Email{' '}
          <a href={mailtoHref} className="font-semibold text-caramel underline">
            {site.email}
          </a>{' '}
          or call{' '}
          <a href={site.phoneHref} className="font-semibold text-caramel underline">
            {site.phone}
          </a>
          . We reply to every enquiry within one business day.
        </p>
      </div>
    </form>
  );
}
