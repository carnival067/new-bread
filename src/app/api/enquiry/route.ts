import { NextResponse } from 'next/server';
import { site } from '@/data/site';

/* ==========================================================================
   ENQUIRY ENDPOINT
   --------------------------------------------------------------------------
   Forwards wholesale / contact / sample enquiries to Web3Forms, which emails
   them straight to contact@breadco.com.au.

   SETUP (2 minutes):
   1. Go to https://web3forms.com and enter contact@breadco.com.au
   2. Confirm the email — they send you an access key
   3. Put the key in .env.local as  WEB3FORMS_ACCESS_KEY=xxxxxxxx
   4. Add the same variable in your hosting provider's environment settings

   If the key is missing or the service is unreachable the endpoint returns an
   error and the form shows its "email us directly" fallback, so no enquiry is
   ever silently lost.
   ========================================================================== */

export const runtime = 'nodejs';

interface Payload {
  businessName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  businessType?: string;
  suburb?: string;
  products?: string;
  volume?: string;
  message?: string;
  subject?: string;
}

const clean = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 },
    );
  }

  const data = {
    businessName: clean(body.businessName, 200),
    contactName: clean(body.contactName, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    businessType: clean(body.businessType, 80),
    suburb: clean(body.suburb, 120),
    products: clean(body.products, 500),
    volume: clean(body.volume, 500),
    message: clean(body.message),
    subject: clean(body.subject, 120) || 'Website enquiry',
  };

  // Minimal server-side validation
  if (!data.businessName || !data.contactName || !data.phone) {
    return NextResponse.json(
      { ok: false, error: 'Business name, contact person and phone are required' },
      { status: 422 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json(
      { ok: false, error: 'A valid email address is required' },
      { status: 422 },
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { ok: false, error: 'Form service not configured' },
      { status: 503 },
    );
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `${data.subject} — ${data.businessName}`,
        from_name: `${site.name} website`,
        replyto: data.email,
        'Business name': data.businessName,
        'Contact person': data.contactName,
        Phone: data.phone,
        Email: data.email,
        'Business type': data.businessType,
        'Suburb / delivery area': data.suburb,
        'Products of interest': data.products,
        'Estimated requirements': data.volume,
        Message: data.message,
      }),
    });

    const result = await res.json().catch(() => ({}));

    if (!res.ok || result?.success === false) {
      return NextResponse.json(
        { ok: false, error: result?.message ?? 'Delivery failed' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not reach the form service' },
      { status: 502 },
    );
  }
}
