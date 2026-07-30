import { Icon } from './icons';

/* Built on native <details>/<summary>: keyboard accessible, works without
   JavaScript, and adds nothing to the client bundle. */
export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-flour">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6">
            <h3 className="font-body text-[0.98rem] font-semibold text-espresso">
              {item.q}
            </h3>
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-pale text-caramel transition-transform duration-300 group-open:rotate-45">
              <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2.4} />
            </span>
          </summary>
          <div className="px-5 pb-6 md:px-6">
            <p className="max-w-3xl text-[0.93rem] leading-relaxed text-muted">
              {item.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
