import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileCta } from '@/components/mobile-cta';
import { JsonLd, localBusinessSchema } from '@/lib/seo';
import { site } from '@/data/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      'Wholesale Bakery Melbourne | Bread Supplier for Cafés & Restaurants — Bread Co',
    template: '%s | Bread Co — Wholesale Bakery Melbourne',
  },
  description:
    'Bread Co is a Melbourne wholesale bakery supplying cafés, restaurants, burger shops, caterers and hotels with artisan sourdough, burger buns, brioche, rolls and an authentic Indian bakery range. Baked fresh daily in Springvale.',
  keywords: [
    'wholesale bakery Melbourne',
    'burger buns supplier Melbourne',
    'bread supplier Melbourne',
    'bakery wholesale supplier',
    'café bread supplier',
    'restaurant bread supplier',
    'catering bakery Melbourne',
    'sourdough wholesale Melbourne',
    'Indian paav supplier Melbourne',
    'kulcha wholesale Melbourne',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#2c1f14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd data={localBusinessSchema} />
        <SiteHeader />
        <main id="main" className="pb-20 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
