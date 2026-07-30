/* Inline SVG icon set — no icon library, no extra network request.
   Add an icon by adding a key to `paths` below. */

export type IconName =
  | 'award'
  | 'clock'
  | 'truck'
  | 'wheat'
  | 'calendar'
  | 'layers'
  | 'arrowRight'
  | 'check'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'search'
  | 'star'
  | 'menu'
  | 'close'
  | 'plus';

const paths: Record<IconName, React.ReactNode> = {
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  truck: (
    <>
      <path d="M3 16V6a1 1 0 0 1 1-1h10v11" />
      <path d="M14 9h4l3 3.5V16h-2" />
      <circle cx="7.5" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 22V9" />
      <path d="M12 9c0-2 1.5-3.5 3.5-3.5C15.5 7.5 14 9 12 9Z" />
      <path d="M12 9c0-2-1.5-3.5-3.5-3.5C8.5 7.5 10 9 12 9Z" />
      <path d="M12 14c0-2 1.5-3.5 3.5-3.5C15.5 12.5 14 14 12 14Z" />
      <path d="M12 14c0-2-1.5-3.5-3.5-3.5C8.5 12.5 10 14 12 14Z" />
      <path d="M12 5.5C12 3.5 12 2 12 2s0 1.5 0 3.5Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  star: (
    <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8L12 3Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export function Icon({
  name,
  className = 'h-5 w-5',
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
