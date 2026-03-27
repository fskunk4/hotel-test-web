export const site = {
  name: 'Hotel Aureline',
  url: 'http://localhost:3000',
  description:
    'A calm five-star city retreat blending design-led rooms, seasonal dining, restorative wellness, and thoughtful service.',
  phone: '+385 1 555 0100',
  email: 'stay@hotelaureline.com',
  address: '14 Lantern Square, Zagreb, Croatia',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/dining', label: 'Dining' },
  { href: '/spa', label: 'Spa & Wellness' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservations', label: 'Book a Stay' },
] as const;

export const roomHighlights = [
  {
    name: 'Courtyard King',
    size: '32 m²',
    description:
      'Soft oak finishes, a king bed, rainfall shower, and views over the quiet inner garden.',
    features: ['King bed', 'Garden outlook', 'Workspace', 'Rainfall shower'],
    price: 'From €220 / night',
  },
  {
    name: 'Skyline Suite',
    size: '48 m²',
    description:
      'A generous corner suite with a lounge area, soaking tub, and sunset views across the city roofs.',
    features: ['Separate lounge', 'Deep soaking tub', 'Espresso bar', 'Late checkout'],
    price: 'From €360 / night',
  },
  {
    name: 'Aureline Residence',
    size: '74 m²',
    description:
      'Our signature stay with dining space, private wellness amenities, and host service on request.',
    features: ['Dining for four', 'Wellness minibar', 'Hosted arrival', 'Panoramic terrace'],
    price: 'From €540 / night',
  },
] as const;

export const diningMoments = [
  {
    title: 'Ember Room',
    text: 'A softly lit restaurant serving ingredient-led Adriatic cuisine, from slow breakfasts to late suppers.',
  },
  {
    title: 'Glasshouse Terrace',
    text: 'An all-day garden lounge for coffee, small plates, and evening cocktails under a retractable canopy.',
  },
  {
    title: 'In-room Dining',
    text: 'Comforting classics and chef specials delivered with the same care as the dining room experience.',
  },
] as const;

export const wellnessPillars = [
  'Indoor vitality pool with skylight lounge beds',
  'Sauna circuit with herbal steam and salt room',
  'Tailored body treatments using botanical oils',
  'Private movement studio for yoga and recovery sessions',
] as const;

export const bookingPerks = [
  'Best flexible rate when booking direct',
  'Complimentary breakfast for every room category',
  'Spa access included from check-in to departure',
  'Concierge support for transfers and local itineraries',
] as const;
