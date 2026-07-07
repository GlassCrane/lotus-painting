// Central content for the Lotus site. Edit copy, services, projects here.

export const BUSINESS = {
  name: 'Lotus',
  full: 'Lotus Painting & Handy-Man Services',
  tagline: 'Painting & Handy-Man Services',
  owner: 'Steven McCorry Sr.',
  phone: '585-797-7845',
  phoneHref: 'tel:+15857977845',
  email: 'smccorry7845@gmail.com',
  emailHref: 'mailto:smccorry7845@gmail.com',
  area: 'Clermont, FL',
}

export const SERVICES = [
  {
    id: 'interior',
    title: 'Interior Painting',
    blurb:
      'Flawless walls, ceilings and trim. Clean lines, premium low-VOC finishes, and dust-free prep that protects your home.',
    tags: ['Walls & Ceilings', 'Trim & Doors', 'Color Consults'],
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    blurb:
      'Weather-tough coatings that hold their color. Power-wash, scrape, prime and finish — built to survive every season.',
    tags: ['Siding', 'Decks & Fences', 'Power Washing'],
  },
  {
    id: 'backsplash',
    title: 'Backsplashes',
    blurb:
      'Tile and stone backsplashes set with a craftsman’s eye — perfect spacing, crisp grout lines, a kitchen centerpiece.',
    tags: ['Tile', 'Natural Stone', 'Mosaic'],
  },
  {
    id: 'woodwork',
    title: 'Custom Woodwork',
    blurb:
      'Built-ins, accent walls, mantels and trim carpentry, milled and finished in-house to fit your space exactly.',
    tags: ['Built-ins', 'Accent Walls', 'Trim Carpentry'],
  },
  {
    id: 'epoxy',
    title: 'Epoxy Flooring',
    blurb:
      'Showroom-grade epoxy for garages, basements and shops — seamless, chemical-proof, and built to shine for years.',
    tags: ['Garages', 'Basements', 'Metallic Finishes'],
  },
  {
    id: 'handyman',
    title: 'General Handyman',
    blurb:
      'The whole punch list, handled by one trusted pro. Drywall, fixtures, mounting, repairs — done right the first time.',
    tags: ['Drywall Repair', 'Fixtures', 'Mounting'],
  },
  {
    id: 'cabinet',
    title: 'Cabinet Refinishing',
    blurb:
      'A new kitchen without the demo. Doors degreased, sanded and sprayed to a factory-smooth, durable finish.',
    tags: ['Spray Finish', 'Re-staining', 'Hardware'],
  },
  {
    id: 'drywall',
    title: 'Drywall & Texture',
    blurb:
      'From hairline cracks to full rooms — hung, taped, mudded and sanded to a mirror-flat surface ready for color.',
    tags: ['Patching', 'Skim Coat', 'Texture Match'],
  },
]

export const PROJECTS = [
  {
    id: 'p1',
    image: '20250922_090751.jpg',
    title: 'Kitchen Accent Wall Build',
    type: 'Custom Woodwork',
    hue: 30,
    accent: '#8a6f42',
  },
  {
    id: 'p2',
    image: '20260317_094021.jpg',
    title: 'Marble Subway Backsplash',
    type: 'Tile & Stone',
    hue: 38,
    accent: '#7a6a4e',
  },
  {
    id: 'p3',
    image: '20260317_094028.jpg',
    title: 'Corner Tile Detail',
    type: 'Tile & Stone',
    hue: 38,
    accent: '#8a7a63',
  },
  {
    id: 'p4',
    image: '20260317_094032.jpg',
    title: 'Backsplash Install',
    type: 'Tile & Stone',
    hue: 38,
    accent: '#6b5d45',
  },
  {
    id: 'p5',
    image: '20260321_173412.jpg',
    title: 'Board & Batten Framing',
    type: 'Custom Woodwork',
    hue: 30,
    accent: '#a08050',
  },
  {
    id: 'p6',
    image: '20260324_082651.jpg',
    title: 'Coastal Blue Board & Batten',
    type: 'Interior Painting',
    hue: 215,
    accent: '#5a708f',
  },
  {
    id: 'p7',
    image: '20260325_200153.jpg',
    title: 'Bedroom Accent Wall Reveal',
    type: 'Custom Woodwork',
    hue: 215,
    accent: '#4e6685',
  },
]

export const PROCESS = [
  {
    n: '01',
    title: 'Consult & Quote',
    body: 'We walk the space together, talk colors and finishes, and you get a clear, itemized quote — no surprises.',
  },
  {
    n: '02',
    title: 'Protect & Prep',
    body: 'Floors masked, furniture covered, surfaces scraped, sanded and primed. Prep is 80% of a flawless finish.',
  },
  {
    n: '03',
    title: 'Craft & Coat',
    body: 'Premium materials, steady hands, crisp lines. Every coat inspected before the next one goes on.',
  },
  {
    n: '04',
    title: 'Walk & Reveal',
    body: 'A final walkthrough together. We don’t pack up until you’re genuinely delighted with the result.',
  },
]

export const STATS = [
  { value: 18, suffix: '+', label: 'Years of Craft' },
  { value: 640, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Satisfaction Focus' },
  { value: 5, suffix: '★', label: 'Average Rating' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Steven repainted our whole first floor and built a stunning oak accent wall. The lines are razor sharp and he left the place cleaner than he found it.',
    name: 'Danielle R.',
    role: 'Homeowner · Clermont',
  },
  {
    quote:
      'Our garage epoxy floor looks like a showroom. On time, on budget, and he genuinely cares about the details.',
    name: 'Marcus T.',
    role: 'Homeowner · Minneola',
  },
  {
    quote:
      'The herringbone backsplash is the best part of our kitchen now. True craftsman — I’ve already booked him for the basement.',
    name: 'Priya & Sam',
    role: 'Homeowners · Winter Garden',
  },
]
