/* ==========================================================================
   PRODUCT CATALOGUE — single source of truth
   --------------------------------------------------------------------------
   HOW TO UPDATE
   • Add a product  → copy any object in `products` and edit the fields.
   • Remove one     → delete its object.
   • Change a photo → set `image` on the product, or change the category
                      image below. Local files go in /public/images and are
                      referenced as '/images/your-file.jpg'.
   • `featured: true` promotes a product to the homepage "best sellers" row.
   • Prices are deliberately never stored or displayed. Wholesale pricing is
     quoted on enquiry.
   ========================================================================== */

export type CategorySlug =
  | 'sourdough'
  | 'traditional'
  | 'catering'
  | 'non-sourdough'
  | 'buns-rolls'
  | 'sweets'
  | 'indian';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  image: string;
  /** Marks the separately-branded Indian Bakery Range */
  accent?: 'spice';
}

export interface Product {
  slug: string;
  category: CategorySlug;
  name: string;
  /** Size / weight as supplied */
  weight: string;
  /** Wholesale pack information */
  pack: string;
  description: string;
  /** Suitable applications, separated by · */
  applications: string;
  featured?: boolean;
  /** Optional per-product photo; falls back to the category photo */
  image?: string;
}

/* Shared photography. Replace these with your own bakery photography by
   dropping files into /public/images and swapping the paths below. */
const IMG = {
  sourdough:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80',
  traditional:
    'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1400&q=80',
  catering:
    'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1400&q=80',
  nonSourdough:
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1400&q=80',
  bunsRolls:
    'https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?auto=format&fit=crop&w=1400&q=80',
  sweets:
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80',
} as const;

export const imagery = {
  hero: IMG.sourdough,
  story: IMG.traditional,
  delivery: IMG.catering,
  quality: IMG.nonSourdough,
  indian: IMG.bunsRolls,
};

export const categories: Category[] = [
  {
    slug: 'sourdough',
    name: 'Artisan Sourdough & Specialty Breads',
    shortName: 'Sourdough',
    description:
      'Slow-fermented, naturally leavened sourdoughs and specialty loaves built for premium café and restaurant menus.',
    image: IMG.sourdough,
  },
  {
    slug: 'traditional',
    name: 'Traditional Artisan Breads',
    shortName: 'Traditional',
    description:
      'Classic European-style breads baked to time-honoured recipes for table service and sandwich production.',
    image: IMG.traditional,
  },
  {
    slug: 'catering',
    name: 'Catering Tins',
    shortName: 'Catering',
    description:
      'Large-format tin loaves purpose-built for high-volume slicing, catering trays and institutional food service.',
    image: IMG.catering,
  },
  {
    slug: 'non-sourdough',
    name: 'Non-Sourdough Breads',
    shortName: 'Non-Sourdough',
    description:
      'Consistent square loaves and focaccia for everyday sandwich, toast and catering production.',
    image: IMG.nonSourdough,
  },
  {
    slug: 'buns-rolls',
    name: 'Buns, Rolls & Sliders',
    shortName: 'Buns & Rolls',
    description:
      'From premium brioche and milk buns to dinner rolls and sliders — a complete roll and bun range for burger and event service.',
    image: IMG.bunsRolls,
  },
  {
    slug: 'sweets',
    name: 'Sweet Bakery Products',
    shortName: 'Sweets',
    description:
      'Italian donuts, jam donuts and chocolate donuts for café counters, schools, clubs and events.',
    image: IMG.sweets,
  },
  {
    slug: 'indian',
    name: 'Indian Bakery Range',
    shortName: 'Indian Range',
    description:
      'Authentic Indian-style bakery products — paav, kulcha, street-food buns and soft white bread — produced fresh daily for Indian restaurants, caterers and grocers.',
    image: IMG.bunsRolls,
    accent: 'spice',
  },
];

export const products: Product[] = [
  {
    slug: 'white-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'White Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A classic artisan sourdough with a golden crust, soft open crumb, and balanced tang. Ideal for cafés, restaurants, sandwiches, toast service, and breakfast menus.',
    applications: 'Cafés · Restaurants · Toast Service',
    featured: true,
  },
  {
    slug: 'white-sourdough-cob-680g',
    category: 'sourdough',
    name: 'White Sourdough COB',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A round cob-style sourdough with a thick, blistered crust and chewy interior. Perfect for sharing boards, dipping, and artisan bread service.',
    applications: 'Restaurants · Sharing Boards · Events',
  },
  {
    slug: 'white-sourdough-loaf-1300g',
    category: 'sourdough',
    name: 'White Sourdough Loaf',
    weight: '1300g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Our signature white sourdough in a large format — perfect for high-volume slicing, catering trays, and busy café kitchens.',
    applications: 'High-Volume Cafés · Catering · Hotels',
    featured: true,
  },
  {
    slug: 'seven-grains-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Seven Grains Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A hearty grain sourdough with rich texture and a nutty finish. Perfect for premium sandwiches, brunch plates, and health-focused menus.',
    applications: 'Cafés · Health Menus · Brunch Plates',
    featured: true,
  },
  {
    slug: 'seven-grains-sourdough-loaf-1300g',
    category: 'sourdough',
    name: 'Seven Grains Sourdough Loaf',
    weight: '1300g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'The large-format seven grains sourdough, ideal for high-output kitchens looking to serve premium grain bread at scale.',
    applications: 'Hotels · Caterers · High-Volume Kitchens',
  },
  {
    slug: 'seven-grains-sourdough-cob-680g',
    category: 'sourdough',
    name: 'Seven Grains Sourdough COB',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A round, rustically shaped seven-grain cob — striking on any bread board and full of wholesome grain flavour.',
    applications: 'Restaurants · Sharing Boards · Delis',
  },
  {
    slug: 'wholemeal-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Wholemeal Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A wholesome sourdough crafted from premium wholemeal flour. Dense, flavourful, and ideal for health-conscious menus.',
    applications: 'Health Cafés · Delis · Grocers',
  },
  {
    slug: 'walnut-rye-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Walnut Rye Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A sophisticated blend of rye sourdough studded with whole walnuts. Exceptional on a cheese board or with smoked meats.',
    applications: 'Restaurants · Cheese Boards · Delis',
    featured: true,
  },
  {
    slug: 'dark-rye-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Dark Rye Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A deeply flavoured dark rye with robust character. A staple of European-style bakeries and premium delis.',
    applications: 'Delis · European Menus · Smoked Salmon Service',
  },
  {
    slug: 'dark-rye-sourdough-loaf-1300g',
    category: 'sourdough',
    name: 'Dark Rye Sourdough Loaf',
    weight: '1300g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Large-format dark rye sourdough for high-volume kitchens — consistent, bold flavour, ideal for slicing and catering.',
    applications: 'Hotels · Caterers · Supermarkets',
  },
  {
    slug: 'dark-rye-sourdough-cob-680g',
    category: 'sourdough',
    name: 'Dark Rye Sourdough COB',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A round cob of dark rye sourdough with a bold crackled crust. Impressive on any artisan bread display.',
    applications: 'Restaurants · Delis · Sharing Boards',
  },
  {
    slug: 'olive-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Olive Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Mediterranean-inspired sourdough laced with whole olives. A natural match for antipasto spreads, tapas, and wine menus.',
    applications: 'Restaurants · Wine Bars · Events',
    featured: true,
  },
  {
    slug: 'olive-sourdough-baguette-500g',
    category: 'sourdough',
    name: 'Olive Sourdough Baguette',
    weight: '500g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A long-shaped olive sourdough baguette combining a crisp crust with rich olive flavour — elegant and versatile.',
    applications: 'Restaurants · Sharing Platters · Catering',
  },
  {
    slug: 'fruit-loaf-sourdough-900g',
    category: 'sourdough',
    name: 'Fruit Loaf Sourdough',
    weight: '900g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A sweet and aromatic sourdough filled with dried fruits. Exceptional toasted for breakfast or afternoon tea service.',
    applications: 'Cafés · Breakfast Service · Hotels',
  },
  {
    slug: 'chia-seed-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Chia Seed Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A nutrition-forward sourdough packed with chia seeds, delivering omega-rich goodness in every slice.',
    applications: 'Health Cafés · Wellness Menus · Delis',
  },
  {
    slug: 'quinoa-sourdough-loaf-650g',
    category: 'sourdough',
    name: 'Quinoa Sourdough Loaf',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A light, protein-rich sourdough made with quinoa — ideal for health-focused operators and modern café menus.',
    applications: 'Health Menus · Cafés · Delis',
  },
  {
    slug: 'artisan-italian-ciabatta-650g',
    category: 'sourdough',
    name: 'Artisan Italian Ciabatta',
    weight: '650g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Rustic Italian-style ciabatta with a crisp golden crust and airy, holey interior. Excellent for paninis, sandwiches, and dipping.',
    applications: 'Cafés · Restaurants · Panini Service',
    featured: true,
  },
  {
    slug: 'italian-ciabatta-rolls-150g',
    category: 'sourdough',
    name: 'Italian Ciabatta Rolls',
    weight: '150g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Individual-sized ciabatta rolls ideal for gourmet sandwiches, burger service, and restaurant bread baskets.',
    applications: 'Cafés · Sandwich Bars · Restaurants',
  },
  {
    slug: 'italian-ciabatta-bite-50g',
    category: 'sourdough',
    name: 'Italian Ciabatta Bite',
    weight: '50g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Miniature ciabatta bites — perfect for canapés, tapas service, sliders, and event catering.',
    applications: 'Events · Catering · Tapas Service',
  },
  {
    slug: 'pasta-dura-750g',
    category: 'traditional',
    name: 'Pasta Dura',
    weight: '750g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A traditional Italian hard dough bread with a firm crumb and distinctive golden crust. A bakery staple for Italian-style delis and cafés.',
    applications: 'Italian Delis · Cafés · Restaurants',
    featured: true,
  },
  {
    slug: 'white-vienna-750g',
    category: 'traditional',
    name: 'White Vienna',
    weight: '750g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A classic white Vienna loaf with a soft crust and pillowy interior. Versatile, crowd-pleasing, and perfect for any bread service.',
    applications: 'Cafés · Hotels · Food Service',
  },
  {
    slug: 'rustic-baguette-360g',
    category: 'traditional',
    name: 'Rustic Baguette',
    weight: '360g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A beautifully crafted rustic baguette with a crackly crust and light, airy crumb. Ideal for restaurant bread service and catering.',
    applications: 'Restaurants · Catering · Bread Baskets',
    featured: true,
  },
  {
    slug: 'half-rustic-baguette-180g',
    category: 'traditional',
    name: 'Half Rustic Baguette',
    weight: '180g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A half-size rustic baguette for individual servings, side dishes, or smaller bread basket portions.',
    applications: 'Restaurants · Catering · Individual Service',
  },
  {
    slug: 'white-catering-tin-1-4kg',
    category: 'catering',
    name: 'White Catering Tin',
    weight: '1.4kg',
    pack: 'Per tin · Sliced to your thickness on request',
    description: 'A large white tin loaf purpose-built for high-volume slicing, catering trays, sandwiches, and institutional food service.',
    applications: 'Caterers · Schools · Hotels · Institutions',
    featured: true,
  },
  {
    slug: 'seven-grain-catering-tin-1-4kg',
    category: 'catering',
    name: 'Seven Grain Catering Tin',
    weight: '1.4kg',
    pack: 'Per tin · Sliced to your thickness on request',
    description: 'A large seven-grain tin loaf for health-conscious catering operations requiring consistent, premium grain bread at scale.',
    applications: 'Caterers · Hotels · Health Food Service',
  },
  {
    slug: 'dark-rye-catering-tin-1-4kg',
    category: 'catering',
    name: 'Dark Rye Catering Tin',
    weight: '1.4kg',
    pack: 'Per tin · Sliced to your thickness on request',
    description: 'A large dark rye tin loaf with bold flavour, ideal for delis, European-style catering, and smoked fish service.',
    applications: 'Caterers · Delis · European Food Service',
  },
  {
    slug: 'white-square-bread-680g',
    category: 'non-sourdough',
    name: 'White Square Bread',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A classic square white loaf, consistently baked for even slicing and reliable sandwich production.',
    applications: 'Cafés · Schools · Sandwich Bars',
  },
  {
    slug: 'wholemeal-square-bread-680g',
    category: 'non-sourdough',
    name: 'Wholemeal Square Bread',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A wholesome square wholemeal loaf delivering consistent nutrition and a clean, mild flavour.',
    applications: 'Schools · Health Cafés · Supermarkets',
  },
  {
    slug: 'multigrain-square-bread-680g',
    category: 'non-sourdough',
    name: 'Multigrain Square Bread',
    weight: '680g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A multigrain square loaf packed with seeds and grains — a premium everyday bread for health-conscious customers.',
    applications: 'Delis · Health Cafés · Grocers',
  },
  {
    slug: 'large-square-white-900g',
    category: 'non-sourdough',
    name: 'Large Square White',
    weight: '900g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A large-format white sandwich loaf for high-volume kitchens and catering operations needing consistent output.',
    applications: 'Caterers · Schools · Hotels',
  },
  {
    slug: 'large-square-wholemeal-900g',
    category: 'non-sourdough',
    name: 'Large Square Wholemeal',
    weight: '900g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A large wholemeal loaf ideal for high-volume health-focused sandwich production and catering.',
    applications: 'Caterers · Schools · Supermarkets',
  },
  {
    slug: 'large-square-multigrain-900g',
    category: 'non-sourdough',
    name: 'Large Square Multigrain',
    weight: '900g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Large-format multigrain loaf for operations requiring premium grain bread in quantity.',
    applications: 'Caterers · Hotels · Grocers',
  },
  {
    slug: 'large-square-dark-rye-900g',
    category: 'non-sourdough',
    name: 'Large Square Dark Rye',
    weight: '900g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A large dark rye square loaf for premium delis and catering operators serving European-style bread.',
    applications: 'Delis · Caterers · European Menus',
  },
  {
    slug: 'focaccia-slab-1-1kg',
    category: 'non-sourdough',
    name: 'Focaccia Slab',
    weight: '1.1kg',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'Soft, dimpled focaccia with an artisan texture and rich olive oil finish. Ideal for catering, sharing boards, and food service.',
    applications: 'Catering · Restaurants · Events',
    featured: true,
  },
  {
    slug: 'focaccia-square-1-7kg',
    category: 'non-sourdough',
    name: 'Focaccia Square',
    weight: '1.7kg',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description: 'A generous square focaccia slab for large-scale catering — easy to portion, consistently beautiful.',
    applications: 'Caterers · Events · Food Service',
  },
  {
    slug: 'brioche-bun-25g',
    category: 'buns-rolls',
    name: 'Brioche Bun',
    weight: '25g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Mini brioche buns with a buttery golden finish — perfect for sliders, canapés, and high-end event catering.',
    applications: 'Events · Sliders · Canapés',
  },
  {
    slug: 'brioche-bun-pack-of-4-100g',
    category: 'buns-rolls',
    name: 'Brioche Bun Pack of 4',
    weight: '100g',
    pack: 'Packed in 4s · Bulk cartons available',
    description: 'A pack of four soft, golden brioche buns. Ideal for café burger menus, lunch service, and retail.',
    applications: 'Cafés · Burger Menus · Retail',
    featured: true,
  },
  {
    slug: 'brioche-bun-90g',
    category: 'buns-rolls',
    name: 'Brioche Bun',
    weight: '90g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Our full-size brioche bun — soft, pillowy, and beautifully golden. The premium choice for restaurant burgers and café fare.',
    applications: 'Restaurants · Cafés · Premium Burger Service',
    featured: true,
  },
  {
    slug: 'milk-bun-90g',
    category: 'buns-rolls',
    name: 'Milk Bun',
    weight: '90g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'A soft, enriched milk bun with a tender crumb and delicate sweetness. Versatile for burgers, rolls, and breakfast service.',
    applications: 'Cafés · Restaurants · Burger Service',
  },
  {
    slug: 'milk-bun-loaf-1kg',
    category: 'buns-rolls',
    name: 'Milk Bun Loaf',
    weight: '1kg',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'A pillowy milk bun loaf — tear-apart style for sharing or slice for catering. A crowd favourite at events.',
    applications: 'Events · Catering · Food Service',
  },
  {
    slug: 'round-rolls-6-pack-500g',
    category: 'buns-rolls',
    name: 'Round Rolls 6 Pack',
    weight: '500g',
    pack: 'Packed in 6s · Bulk cartons available',
    description: 'Six soft round rolls per pack — reliable, consistent, and perfect for café lunch service and sandwich bars.',
    applications: 'Cafés · Sandwich Bars · Schools',
  },
  {
    slug: 'hot-dog-rolls-6-pack-500g',
    category: 'buns-rolls',
    name: 'Hot Dog Rolls 6 Pack',
    weight: '500g',
    pack: 'Packed in 6s · Bulk cartons available',
    description: 'Six classic hot dog rolls — soft, even, and ideal for school canteens, sporting events, and kiosks.',
    applications: 'Sports Clubs · Schools · Events',
  },
  {
    slug: 'white-dinner-rolls-45g',
    category: 'buns-rolls',
    name: 'White Dinner Rolls',
    weight: '45g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Classic white dinner rolls with a soft crust and tender crumb. An essential for restaurant bread service.',
    applications: 'Restaurants · Hotels · Catering',
  },
  {
    slug: 'wholemeal-dinner-rolls-45g',
    category: 'buns-rolls',
    name: 'Wholemeal Dinner Rolls',
    weight: '45g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Wholesome dinner rolls for health-conscious menus and mixed bread baskets.',
    applications: 'Restaurants · Hotels · Health Menus',
  },
  {
    slug: 'multigrain-dinner-rolls-45g',
    category: 'buns-rolls',
    name: 'Multigrain Dinner Rolls',
    weight: '45g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Multigrain dinner rolls packed with seeds and texture — a premium addition to any bread service.',
    applications: 'Restaurants · Catering · Hotels',
  },
  {
    slug: 'burger-bun-white-100g',
    category: 'buns-rolls',
    name: 'Burger Bun White',
    weight: '100g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'A classic white burger bun — light, consistent, and perfectly sized for commercial burger production.',
    applications: 'Restaurants · Cafés · Burger Bars',
  },
  {
    slug: 'burger-bun-wholemeal-100g',
    category: 'buns-rolls',
    name: 'Burger Bun Wholemeal',
    weight: '100g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'A wholemeal burger bun offering a wholesome alternative for health-focused café and restaurant menus.',
    applications: 'Health Cafés · Restaurants · Burger Bars',
  },
  {
    slug: 'burger-bun-multigrain-100g',
    category: 'buns-rolls',
    name: 'Burger Bun Multigrain',
    weight: '100g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'A premium multigrain burger bun with texture and nutrition — ideal for gourmet burger offerings.',
    applications: 'Gourmet Burger Bars · Restaurants · Cafés',
  },
  {
    slug: 'turkish-rolls-160g',
    category: 'buns-rolls',
    name: 'Turkish Rolls',
    weight: '160g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Traditional Turkish-style rolls with a chewy crust and soft interior — popular for deli sandwiches and catering.',
    applications: 'Delis · Sandwich Bars · Catering',
  },
  {
    slug: 'hot-dog-rolls-100g',
    category: 'buns-rolls',
    name: 'Hot Dog Rolls',
    weight: '100g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Individual hot dog rolls — soft and even, ready for kiosks, canteens, and event food service.',
    applications: 'Sports Clubs · Kiosks · Schools',
  },
  {
    slug: 'french-rolls-120g',
    category: 'buns-rolls',
    name: 'French Rolls',
    weight: '120g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Classic French-style rolls with a crisp crust and airy crumb. A versatile favourite for restaurants and cafés.',
    applications: 'Restaurants · Cafés · Hotels',
  },
  {
    slug: 'knot-rolls-100g',
    category: 'buns-rolls',
    name: 'Knot Rolls',
    weight: '100g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Artisan-shaped knot rolls with a soft interior — visually striking for bread baskets and sharing platters.',
    applications: 'Restaurants · Catering · Hotels',
  },
  {
    slug: 'ciabatta-rolls-140g',
    category: 'buns-rolls',
    name: 'Ciabatta Rolls',
    weight: '140g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Individual ciabatta rolls with a crisp crust and open crumb. A premium choice for gourmet sandwiches and restaurant service.',
    applications: 'Cafés · Restaurants · Sandwich Bars',
  },
  {
    slug: 'classic-slider-45g',
    category: 'buns-rolls',
    name: 'Classic Slider',
    weight: '45g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Soft mini slider buns perfect for events, cocktail parties, catering, and mini burger menus.',
    applications: 'Events · Catering · Cocktail Parties',
  },
  {
    slug: 'italian-donuts-large-120g',
    category: 'sweets',
    name: 'Italian Donuts Large',
    weight: '120g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Classic Italian-style donuts with a light, airy bite and rich golden exterior. Great for cafés, events, and catering.',
    applications: 'Cafés · Events · Sports Clubs',
    featured: true,
  },
  {
    slug: 'italian-donuts-small-80g',
    category: 'sweets',
    name: 'Italian Donuts Small',
    weight: '80g',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Smaller format Italian donuts for individual café service, kiosk display, or mixed catering platters.',
    applications: 'Cafés · Kiosks · Catering',
  },
  {
    slug: 'jam-donuts',
    category: 'sweets',
    name: 'Jam Donuts',
    weight: 'Weight on request',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Soft, sugar-dusted jam donuts with a sweet fruit filling. A crowd favourite for schools, clubs, and events.',
    applications: 'Schools · Sports Clubs · Events',
  },
  {
    slug: 'chocolate-donuts',
    category: 'sweets',
    name: 'Chocolate Donuts',
    weight: 'Weight on request',
    pack: 'Supplied in bulk trays · Pack size confirmed on quote',
    description: 'Rich chocolate-glazed donuts for café display, catering, and events. Always a bestseller.',
    applications: 'Cafés · Events · Schools',
  },
  /* ── INDIAN BAKERY RANGE ─────────────────────────────────────────
     Supplied to Indian restaurants, caterers, grocery stores and
     hospitality venues. Baked fresh daily alongside our artisan range. */
  {
    slug: 'indian-paav-80g',
    category: 'indian',
    name: 'Indian Paav',
    weight: '80g',
    pack: 'Supplied in joined trays · Pack size confirmed on quote',
    description:
      'Soft, pillowy Indian-style paav with a fine, tender crumb and a lightly glazed golden top. Baked fresh daily and made to be torn, not cut — the authentic base for pav bhaji, vada pav and misal pav service.',
    applications: 'Indian Restaurants · Pav Bhaji · Vada Pav · Catering',
    featured: true,
  },
  {
    slug: 'indian-paav-60g',
    category: 'indian',
    name: 'Indian Paav',
    weight: '60g',
    pack: 'Supplied in joined trays · Pack size confirmed on quote',
    description:
      'The smaller-format paav, ideal for entrée portions, share plates, street-food style menus and functions where portion control matters. Same soft crumb, same daily bake.',
    applications: 'Indian Restaurants · Street Food Menus · Events · Grocers',
  },
  {
    slug: 'kulcha-pack-of-4',
    category: 'indian',
    name: 'Kulcha',
    weight: 'Pack of 4',
    pack: 'Packed in 4s · Bulk cartons available for food service',
    description:
      'Traditional soft kulcha with a light, layered texture that warms and finishes beautifully on a griddle or in a tandoor. Consistent sizing for reliable plating across a busy service.',
    applications: 'Indian Restaurants · Kulcha Chole · Catering · Grocery Retail',
    featured: true,
  },
  {
    slug: 'indian-white-bread-800g',
    category: 'indian',
    name: 'White Bread',
    weight: '800g',
    pack: 'Per loaf · Sliced or unsliced on request · Bulk trays available',
    description:
      'A generous 800g soft white loaf with a fine, even crumb — the everyday bread for Indian grocery shelves, sandwich preparation, bread pakora and high-volume catering kitchens.',
    applications: 'Grocery Stores · Indian Restaurants · Catering · Sandwich Prep',
    featured: true,
  },
  {
    slug: 'patti-pav',
    category: 'indian',
    name: 'Patti Pav',
    weight: 'Confirmed on quote',
    pack: 'Supplied as a joined slab · Pack size confirmed on quote',
    description:
      'Pav baked as a single joined slab, so the sides stay pale and soft and each bun tears away cleanly at the seam. The format most Indian kitchens want when pav is going out by the tray rather than the piece.',
    applications: 'Indian Restaurants · Street Food Menus · Caterers · Grocers',
  },
  {
    slug: 'pav-bhaji-bun',
    category: 'indian',
    name: 'Pav Bhaji Bun',
    weight: 'Confirmed on quote',
    pack: 'Supplied in joined trays · Pack size confirmed on quote',
    description:
      'A soft, open-crumbed bun built for the griddle — it takes butter without going greasy and holds together through a hard toast, ready to mop up bhaji straight off the plate.',
    applications: 'Indian Restaurants · Pav Bhaji Service · Food Trucks · Events',
  },
  {
    slug: 'bharwa-kulcha',
    category: 'indian',
    name: 'Bharwa Kulcha',
    weight: 'Confirmed on quote',
    pack: 'Packed for food service · Bulk cartons available',
    description:
      'Our stuffed kulcha, filled and sealed in the bakery so your kitchen only has to finish it on the griddle or in the tandoor. Filling and portion size are set with you when we quote.',
    applications: 'Indian Restaurants · Catering · Grocery Retail',
  },
  {
    slug: 'maska-bun',
    category: 'indian',
    name: 'Maska Bun',
    weight: 'Confirmed on quote',
    pack: 'Packed for food service · Bulk cartons available',
    description:
      'The soft, lightly sweet bun of the Irani café counter — a tender crumb and a glazed top, made to be split, buttered generously and served alongside chai.',
    applications: 'Cafés · Indian Restaurants · Chai Houses · Grocery Retail',
  },
  {
    slug: 'dabeli-bun',
    category: 'indian',
    name: 'Dabeli Bun',
    weight: 'Confirmed on quote',
    pack: 'Supplied in joined trays · Pack size confirmed on quote',
    description:
      'Sized and structured for Kutchi dabeli — soft enough to press flat, sturdy enough to carry a wet filling with sev and pomegranate without falling apart in service.',
    applications: 'Indian Restaurants · Street Food Menus · Caterers · Grocers',
  },
];

/* ── Helpers ──────────────────────────────────────────────────── */

export const getCategory = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug);

export const productImage = (product: Product) =>
  product.image ?? getCategory(product.category)?.image ?? IMG.sourdough;

export const productsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);

export const featuredProducts = products.filter((p) => p.featured);

export const productCount = products.length;
