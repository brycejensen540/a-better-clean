// Central image registry.
//
// Every photo on the site resolves through this map, so replacing any
// image is a one-line change here. To use your own photography, drop the
// files into /public/images and update the paths below.
//
// All current photos are CC0 (public domain) images sourced via Openverse
// — see ATTRIBUTIONS.md at the project root for the source of each file.

export const images = {
  // Hero — a festival main stage mid-set, crowd and confetti. The event
  // as guests experience it; our job is what happens after.
  hero: '/images/hero-festival.jpg',

  about: {
    // Cleanup in action — crew-facing imagery of waste handling.
    crew: '/images/crew-cleanup.jpg',
    // Municipal rig — the kind of heavy equipment our fleet includes.
    rig: '/images/garbage-truck.webp',
    // Post-event grounds — the calm, cleared field the morning after.
    grounds: '/images/morning-after.jpg',
  },

  services: {
    // Full-service cleanup — festival grounds with tents and stalls.
    'full-service-cleanup': '/images/festival-grounds.jpg',
    // Overnight turnaround — a night-time event street.
    'overnight-turnaround': '/images/night-festival.jpg',
    // Recycling & diversion — sorted recyclables.
    'recycling-diversion': '/images/recycling.jpg',
    // Porta-john service — event restroom bank.
    'restroom-service': '/images/porta-john.jpg',
    // Pressure & surface washing — a pressure washer at work.
    'surface-washing': '/images/pressure-washing.jpg',
  },

  events: {
    // Music festivals — main-stage crowd at golden hour.
    'music-festivals': '/images/concert-crowd.webp',
    // Fairs & carnivals — fairground wheel.
    'fairs-carnivals': '/images/ferris-wheel.jpg',
    // Parades — a parade moving through a crowd.
    parades: '/images/parade.jpg',
    // Street fests — vendor tents on a closed street.
    'street-fests': '/images/street-fair.jpg',
  },

  // CTA band background — event crowd at dusk, hands up.
  cta: '/images/cta-crowd.jpg',
} as const;
