import Link from 'next/link';
import { site } from '@/data/site';
import { Icon } from './icons';

/* Sticky conversion bar on small screens — the two actions a wholesale
   buyer on a phone actually wants. */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/97 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2.5">
        <a href={site.phoneHref} className="btn btn-outline flex-1">
          <Icon name="phone" className="h-4 w-4" />
          Call
        </a>
        <Link href="/wholesale" className="btn btn-primary flex-[1.6]">
          Request Pricing
        </Link>
      </div>
    </div>
  );
}
