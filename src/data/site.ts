// Central company information. Change it here and it updates
// everywhere: header, footer, contact page, and SEO metadata.

export const site = {
  name: 'A Better Clean',
  tagline: 'Massive crowds. Massive cleanup. Never your problem.',
  description:
    'A Better Clean moves tonnes of waste out of festivals and events — overnight. High-throughput outdoor cleanup that keeps grounds guest-ready so attendees focus on the show, not the cleanup.',

  // Primary contact — this is the number every page points to.
  phone: '(312) 555-0148',
  phoneHref: 'tel:+13125550148',
  email: 'crew@abetterclean.example.com',
  emailHref: 'mailto:crew@abetterclean.example.com',

  address: 'Chicago, IL',
  radius: 'across the Midwest — festivals, fairs, races, and multi-day events',

  // Operations
  crew: '40+ trained crew members',
  fleet: 'Roll-off trucks, box trucks, and sweepers on call',

  hours: {
    weekdays: 'Office: Mon–Fri: 8:00 am – 6:00 pm',
    weekends: 'Crews: on-site around the clock during events',
  },

  rating: {
    score: '5.0',
    count: '120+',
    label: 'Over 120 event partners',
  },

  stats: {
    tonnesPerEvent: 'up to 60',
    turnaround: 'overnight',
    eventsPerSeason: '200+',
  },

  url: 'https://a-better-clean.pages.dev',
} as const;
