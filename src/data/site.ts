/* ==========================================================================
   SITE CONTENT — single source of truth
   --------------------------------------------------------------------------
   Almost every piece of copy on the site that is NOT a product lives here.
   Change a phone number, a testimonial or an FAQ in this one file and it
   updates everywhere it appears.
   ========================================================================== */

export const site = {
  name: 'Bread Co',
  legalName: 'Bread Co Pty Ltd',
  tagline: 'Premium Wholesale Bakery — Melbourne',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://breadco.com.au',

  /* ── Contact details ─────────────────────────────────────────── */
  phone: '0481 760 075',
  phoneHref: 'tel:+61481760075',
  email: 'contact@breadco.com.au',
  address: {
    street: '1/2 Peace Street',
    suburb: 'Springvale',
    state: 'VIC',
    postcode: '3171',
    country: 'Australia',
  },
  get addressLine() {
    return `${this.address.street}, ${this.address.suburb} ${this.address.state} ${this.address.postcode}`;
  },
  mapsEmbed:
    'https://www.google.com/maps?q=1/2+Peace+Street,+Springvale+VIC+3171&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=1%2F2+Peace+Street+Springvale+VIC+3171',

  hours: [
    { days: 'Monday – Friday', time: '5:00am – 3:00pm' },
    { days: 'Saturday', time: '5:00am – 12:00pm' },
    { days: 'Sunday', time: 'Production only — office closed' },
  ],

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/breadco.bakery/' },
    { label: 'Facebook', href: 'https://www.facebook.com/p/Bread-Co-100063681636996/' },
  ],

  /* ── Positioning ─────────────────────────────────────────────── */
  brandStatement:
    'At Bread Co, we provide premium-quality bakery products with reliable wholesale supply for Melbourne’s hospitality industry.',
} as const;

/* ── Navigation ────────────────────────────────────────────────── */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/indian-bakery-range', label: 'Indian Range' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

/* ── Trust bar / headline numbers ──────────────────────────────── */
export const stats = [
  { value: '30+', label: 'Years of baking experience' },
  { value: '60+', label: 'Wholesale product lines' },
  { value: '7', label: 'Days a week production' },
  { value: '6am', label: 'Deliveries on your bench by' },
] as const;

/* ── Why choose Bread Co ───────────────────────────────────────── */
export const valueProps = [
  {
    title: 'Consistent Quality, Every Delivery',
    body:
      'The same bun, the same crumb, the same crust — every single day. Our production is built around repeatability so your menu never changes character because your bread did.',
    icon: 'award',
  },
  {
    title: 'Baked Fresh Overnight',
    body:
      'Production runs through the night so your order arrives fresh, not frozen and not from yesterday. Nothing sits in a warehouse waiting for a truck.',
    icon: 'clock',
  },
  {
    title: 'Reliable Melbourne-Wide Delivery',
    body:
      'A fixed delivery run you can build a service around. Metro Melbourne daily, with regional Victoria supplied on scheduled routes.',
    icon: 'truck',
  },
  {
    title: 'Premium Ingredients Only',
    body:
      'Quality flour, real butter in our brioche, and naturally leavened sourdough cultures. No shortcuts, no unnecessary additives.',
    icon: 'wheat',
  },
  {
    title: 'Flexible Ordering',
    body:
      'Adjust quantities week to week, add a line for a function, or scale up for a busy season. We work to your trading pattern, not ours.',
    icon: 'calendar',
  },
  {
    title: 'Capacity to Grow With You',
    body:
      'Commercial production volume with room to scale — from a single café to multi-site hospitality groups and food distributors.',
    icon: 'layers',
  },
] as const;

/* ── Industries we supply ──────────────────────────────────────── */
export const industries = [
  {
    name: 'Cafés',
    body: 'Sourdough, ciabatta and catering tins built for high-turnover toast, brunch and sandwich service.',
  },
  {
    name: 'Restaurants',
    body: 'Table bread, dinner rolls, baguettes and specialty loaves that hold up to a plated service.',
  },
  {
    name: 'Burger Shops',
    body: 'Brioche, milk buns and burger buns sized and structured for commercial burger production.',
  },
  {
    name: 'Caterers',
    body: 'Large-format tins, focaccia slabs and slider buns designed for efficient portioning at volume.',
  },
  {
    name: 'Hotels',
    body: 'Breakfast breads, buffet rolls and premium artisan loaves for consistent in-house dining.',
  },
  {
    name: 'Food Distributors',
    body: 'Reliable production volume, consistent specs and dependable lead times for onward supply.',
  },
  {
    name: 'Retail & Grocers',
    body: 'Retail-ready loaves, packs and specialty breads for delis, IGAs and independent grocers.',
  },
  {
    name: 'Hospitality Groups',
    body: 'One supplier, one invoice, one standard across every venue in your group.',
  },
  {
    name: 'Indian Restaurants',
    body: 'Authentic paav, kulcha and soft white bread produced fresh daily for Indian menus.',
  },
  {
    name: 'Schools & Clubs',
    body: 'Rolls, hot dog buns and donuts in canteen-friendly formats and pack sizes.',
  },
] as const;

/* ── How ordering works ────────────────────────────────────────── */
export const processSteps = [
  {
    step: '01',
    title: 'Tell us what you need',
    body: 'Send through your business details and rough weekly volumes using the wholesale enquiry form, or call us directly.',
  },
  {
    step: '02',
    title: 'Samples and pricing',
    body: 'We send a wholesale price list and arrange product samples so your kitchen can test before committing.',
  },
  {
    step: '03',
    title: 'Set your standing order',
    body: 'We lock in your delivery days and quantities. Adjust any time — you are never locked into a fixed contract.',
  },
  {
    step: '04',
    title: 'Fresh bread, every morning',
    body: 'Baked overnight and delivered to your door before service. Consistent, on time, every day.',
  },
] as const;

/* ── Quality & freshness pillars ───────────────────────────────── */
export const qualityPillars = [
  {
    title: 'Naturally leavened',
    body: 'Our sourdough is raised with a live lactobacillus culture rather than commercial yeast, developed over a long, slow ferment for depth of flavour and a better crumb.',
  },
  {
    title: 'Baked overnight, delivered at dawn',
    body: 'Bread leaves the bakery within hours of coming out of the oven. There is no cold storage stage between our oven and your kitchen.',
  },
  {
    title: 'Made by qualified bakers',
    body: 'Our director is a qualified baker with more than 30 years in the trade, and that standard is trained into every person on the production floor.',
  },
  {
    title: 'Specification you can rely on',
    body: 'Weights, sizes and finishes are held to spec so your portioning, plating and food costing stay predictable.',
  },
] as const;

/* ── Testimonials ──────────────────────────────────────────────── */
export const testimonials = [
  {
    quote:
      'Bread Co has supplied our café for over two years. The sourdough is consistently excellent and our customers ask for it by name. Delivery is always on time.',
    name: 'Sarah L.',
    role: 'Owner, Halo Café — Richmond, VIC',
    initials: 'SL',
  },
  {
    quote:
      'The walnut rye sourdough is exceptional. We put it on every charcuterie board and guests rave about it. Bread Co understands what quality wholesale bread should be.',
    name: 'Marcus C.',
    role: 'Head Chef, The Larder — South Yarra, VIC',
    initials: 'MC',
  },
  {
    quote:
      'Reliable, professional, and the bread is genuinely artisan. Our deli could not be happier. The ciabatta and focaccia are our biggest sellers every week.',
    name: 'Julia P.',
    role: 'Manager, Corner Deli — Fitzroy, VIC',
    initials: 'JP',
  },
] as const;

/* ── FAQs (also emitted as FAQPage structured data) ────────────── */
export const faqs = [
  {
    q: 'Do you supply wholesale only, or can individuals order too?',
    a: 'Bread Co is a wholesale-first bakery. We supply food businesses including cafés, restaurants, burger shops, hotels, caterers, supermarkets, delis, schools, clubs and events. Get in touch to discuss your business requirements and minimum order.',
  },
  {
    q: 'What areas do you deliver to?',
    a: 'We deliver across metropolitan Melbourne daily, and supply country Victoria on scheduled routes. Contact us to confirm delivery availability for your suburb or region.',
  },
  {
    q: 'What is the minimum order for wholesale delivery?',
    a: 'Minimums depend on your location and delivery day. We will confirm the minimum for your run when we send your wholesale pricing — in most metro areas it is modest and easily met by a working café or restaurant.',
  },
  {
    q: 'How do I get wholesale pricing?',
    a: 'Prices are not published publicly because they vary with volume, product mix and delivery frequency. Submit the wholesale enquiry form or call us, and we will send a tailored price list.',
  },
  {
    q: 'Can we try products before committing?',
    a: 'Yes. We regularly send samples to prospective wholesale partners so your kitchen can test the products in your own service before you place a standing order.',
  },
  {
    q: 'How early do deliveries arrive?',
    a: 'Bread is baked overnight and most metro deliveries land before 6am so your product is on the bench before service starts.',
  },
  {
    q: 'Do you make Indian bakery products?',
    a: 'Yes. Our Indian Bakery Range includes Indian Paav in 80g and 60g, Kulcha in packs of four, and 800g soft white bread, all produced fresh daily for Indian restaurants, caterers and grocery stores.',
  },
  {
    q: 'Can you produce custom sizes or specifications?',
    a: 'In many cases, yes. If you need a particular bun weight, loaf format or pack configuration for your menu, talk to us — custom runs are available subject to volume.',
  },
  {
    q: 'Do your breads contain preservatives?',
    a: 'We bake with quality ingredients and no unnecessary additives. Our sourdoughs are naturally leavened with a live culture. Specific ingredient and allergen information is available on request for any product.',
  },
  {
    q: 'How do we place and change orders?',
    a: 'Once your account is set up you will have a standing order and a direct line to our team. Quantities can be adjusted by phone or email ahead of the cut-off for your delivery day.',
  },
] as const;

/* ── Business type options used across enquiry forms ───────────── */
export const businessTypes = [
  'Café',
  'Restaurant',
  'Burger Shop',
  'Indian Restaurant',
  'Caterer',
  'Hotel',
  'Food Distributor',
  'Retail / Grocery',
  'Hospitality Group',
  'School / Club',
  'Other',
] as const;
