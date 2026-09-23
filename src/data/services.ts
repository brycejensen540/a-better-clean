// The five services offered by A Better Clean. Each entry powers a
// generated page at /services/<slug> and its card in the services grid.
// Every service is built around one promise: guests never see the waste.

import { images } from './images';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  /** Small label shown above the page heading. */
  eyebrow: string;
  /** Main page heading. */
  title: string;
  /** Unique meta description for the page. */
  metaDescription: string;
  /** Hero paragraph — the conversion opener. */
  intro: string;
  /** Supporting body paragraphs. */
  body: string[];
  /** Bullet benefits shown on the page and the home cards. */
  benefits: string[];
  /** Optional FAQ entries. */
  faqs?: { question: string; answer: string }[];
  /** One-liner used on cards and in JSON-LD. */
  shortDescription: string;
  /** Path to the service photo (from /public/images). */
  image: string;
  /** Homepage grid ordering (only three are featured). */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'full-service-cleanup',
    name: 'Full-Service Event Cleanup',
    shortName: 'Full-Service Cleanup',
    eyebrow: 'Our Services',
    title: 'Tonnes Out the Gate, Before Doors',
    metaDescription:
      'Full-service festival and event cleanup — waste removal, grounds crews, and load-out support across the Midwest. A Better Clean moves tonnes so your guests never see them. Call (312) 555-0148.',
    intro:
      'A festival generates waste by the tonne — food vendor scraps, cups, packaging, broken fencing, mud-caked everything. Our full-service crews handle all of it:bins emptied before they overflow, grounds walked on a continuous loop, and load-out debris cleared as it hits the ground. Your guests experience a clean event; your crew experiences an exit without a week of shovelling.',
    body: [
      'We plug into your event plan the way a security or medical vendor does. Before gates open we place and stage waste infrastructure — bins, recycling stations, bag stands, signage — sized to your expected crowd, not a guess. During event hours our grounds crews work rotating loops through vendor rows, stage areas, and campgrounds, so nothing sits long enough to become a hazard or an eyesore.',
      'When the headline act walks off, our night shift clocks in. Bagged waste is consolidated, compacted, and loaded onto our trucks; vendor load-out debris is cleared in real time; and by morning the grounds are swept, stockpiled, and ready for inspection. We handle the haul too — roll-off swaps on schedule, transfer station runs, and weight tickets documented for your post-event report.',
      'Because every event is different, we scope in person. A 40,000-person weekend festival needs a different plan than a one-night street closure, and our quotes reflect the actual tonnage, staffing, and equipment your site requires — not a flat template.',
    ],
    benefits: [
      'Grounds crews on continuous loops during event hours',
      'Bins sized, placed, and emptied before they overflow',
      'Overnight load-out and bag consolidation',
      'Roll-off swaps, hauling, and transfer station runs included',
      'Weight tickets and tonnage documented for post-event reporting',
    ],
    faqs: [
      {
        question: 'How much waste can you move in a night?',
        answer:
          'Our fleet moves up to 60 tonnes per event across trucks and roll-off containers, and multiple crews run in parallel on large sites. For context, a typical three-day music festival produces 30–100 tonnes — we plan staffing and equipment around your expected volume.',
      },
      {
        question: 'Do you work during the event or only after?',
        answer:
          'Both. During event hours our crews keep bins clear and grounds walkable on continuous loops; after close, the night shift consolidates, compacts, and hauls so the site is inspection-ready by morning.',
      },
      {
        question: 'Do you provide the bins and containers?',
        answer:
          'Yes. We stage bins, recycling stations, and roll-offs sized to your crowd estimates, place them per the site plan, and swap them out on schedule throughout the event.',
      },
      {
        question: 'How far in advance should we book?',
        answer:
          'Peak season (May–September) books 2–3 months out, especially for multi-day festivals. Off-season and single-day events can often be scoped within a few weeks.',
      },
    ],
    shortDescription:
      'Bins, grounds crews, and hauling for the whole event lifecycle — gates to load-out.',
    image: images.services['full-service-cleanup'],
    featured: true,
  },
  {
    slug: 'overnight-turnaround',
    name: 'Overnight Turnaround',
    shortName: 'Overnight Turnaround',
    eyebrow: 'Our Services',
    title: 'Asleep After the Encore, Gone by Sunrise',
    metaDescription:
      'Overnight event cleanup and turnaround for multi-day festivals — grounds cleared, swept, and inspection-ready before doors the next morning. Call A Better Clean at (312) 555-0148.',
    intro:
      'Multi-day events live or die by the morning. Day two starts at six, and a site buried in last night’s cups and confetti cannot open on time. Our overnight crews take the grounds from headliner to inspection-ready between last call and first entry — swept paths, emptied bins, cleared walkways, and the morning report in your inbox before your production meeting.',
    body: [
      'The overnight window is our specialty because it is the only window most events have. We staff night shifts specifically for it: consolidation teams bag and pile waste while the haul crews run roll-offs and box trucks to the transfer station. Sweeper teams follow behind, clearing the paths and concourses your guests walk first thing in the morning.',
      'Every night ends with a documented walkthrough. You get a photo log of cleared areas, tonnage hauled, and any hazards flagged for the day crew — so your site manager opens the morning briefing with facts, not guesses. If weather complicates the night, we re-sequence and communicate; the goal is doors opening on schedule, every day of the event.',
      'For recurring events — a fair that runs two weekends, a series of summer street fests — we build the turnaround plan once and refine it each night. The crew that knows your site clears it faster every shift.',
    ],
    benefits: [
      'Night-shift crews built for the overnight window',
      'Grounds swept and inspection-ready before doors',
      'Photo log and tonnage report delivered each morning',
      'Roll-off swaps and hauls run through the night',
      'Sequenced around weather, curfews, and load-in schedules',
    ],
    faqs: [
      {
        question: 'How late do overnight crews work?',
        answer:
          'Until the grounds are ready. Typical shifts run from close to 6–8 am; for very large sites we run staggered crews so the morning deadline is never the constraint.',
      },
      {
        question: 'Do you work around curfews and noise rules?',
        answer:
          'Yes. We plan the loudest operations — compaction, truck loading — around local noise ordinances and your curfew, and sequence quieter work (sweeping, bagging) where sound matters.',
      },
      {
        question: 'What do we get in the morning report?',
        answer:
          'A photo log of each cleared zone, total tonnage hauled, bin swap counts, and flagged hazards — delivered before your production meeting so day-of decisions start with facts.',
      },
    ],
    shortDescription:
      'Night crews clear, sweep, and haul so the grounds open clean every single morning.',
    image: images.services['overnight-turnaround'],
    featured: true,
  },
  {
    slug: 'recycling-diversion',
    name: 'Recycling & Diversion',
    shortName: 'Recycling & Diversion',
    eyebrow: 'Our Services',
    title: 'Landfill Is the Last Resort, Not the Plan',
    metaDescription:
      'Event recycling and waste-diversion programs for festivals — sorting, composting, and documented diversion rates. Meet sustainability goals with A Better Clean. Call (312) 555-0148.',
    intro:
      'Sponsors ask for diversion numbers. Cities require them. Guests notice them. We build recycling and composting into the waste plan from the start — sorted streams, trained sorters, and a documented diversion rate you can publish. A festival that diverts 70% of its waste tells a better story than one that hauls it all to landfill, and we make the difference measurable.',
    body: [
      'Diversion fails at the bin, not the facility — guests toss everything into whatever is closest. So we engineer the front end: paired waste-and-recycling stations with clear signage, trained eco-team members at high-traffic bins during peak hours, and vendor rules that cut contamination before it starts. Behind the scenes, sorters pull recyclables and compostables from the mixed stream before compaction.',
      'The result is a diversion rate that holds up to scrutiny. We track each stream by weight, document where it went, and hand you a post-event report your sustainability team and sponsors can cite directly. Grants and city permits increasingly ask for these numbers — we make sure yours exist.',
      'For events with existing sustainability programs, we slot in as the operations partner: your plan, our crews, bins, and hauling. For events starting from zero, we design the program end to end and staff it.',
    ],
    benefits: [
      'Paired stations and signage engineered to cut contamination',
      'Eco-team staffing at high-traffic bins during peaks',
      'Post-event sorting to rescue recyclables and compostables',
      'Diversion rate tracked by weight and documented per stream',
      'Report format ready for sponsors, grants, and city permits',
    ],
    shortDescription:
      'Sorted streams, trained sorters, and a documented diversion rate you can publish.',
    image: images.services['recycling-diversion'],
    featured: true,
  },
  {
    slug: 'restroom-service',
    name: 'Restroom Service',
    shortName: 'Restroom Service',
    eyebrow: 'Our Services',
    title: 'The Detail Guests Remember Most',
    metaDescription:
      'Event restroom servicing — mid-event cleaning, restocking, and pumping for festival porta-john banks and facilities. A Better Clean keeps them guest-ready. Call (312) 555-0148.',
    intro:
      'Nothing gets mentioned in a festival review faster than the restrooms. A bank of porta-johns at hour ten of a hot day is either a maintained amenity or a reason people leave early — and the difference is a service crew on a schedule, not a one-time drop. We clean, restock, and pump units throughout the event so the state guests find is closer to hour one than hour ten.',
    body: [
      'Our restroom crews run scheduled loops: every unit serviced on a frequency matched to your crowd size and weather — more often during heat, more often where lines build. Service means what it says — surfaces cleaned, restocked, deodorized, and the pad area hosed down, not a quick look through the door.',
      'When units need more than service, we pump them. Our trucks handle waste removal on-site or shuttle to disposal as the site plan allows, and units that fail outright are swapped so the bank never shrinks mid-event. Attendants stationed at high-traffic banks keep lines moving and catch problems before guests do.',
      'It is the least glamorous service we offer and the one guests mention most. We treat it that way — the restroom bank is front-of-house as far as we are concerned, and it gets crewed like it.',
    ],
    benefits: [
      'Scheduled cleaning loops matched to crowd and weather',
      'Restocking — paper, sanitizer, deodorizer — every service',
      'On-site pumping and waste removal without leaving the grounds',
      'Failed units swapped so the bank never shrinks mid-event',
      'Attendants at high-traffic banks during peak hours',
    ],
    shortDescription:
      'Scheduled cleaning, restocking, and pumping so restrooms stay guest-ready all event.',
    image: images.services['restroom-service'],
  },
  {
    slug: 'surface-washing',
    name: 'Surface & Pressure Washing',
    shortName: 'Surface Washing',
    eyebrow: 'Our Services',
    title: 'Streets, Sidewalks, and Pads Like It Never Happened',
    metaDescription:
      'Post-event pressure washing for streets, sidewalks, plazas, and vendor pads — gum, grease, and grime removed after festivals and street fests. Call A Better Clean at (312) 555-0148.',
    intro:
      'The event ends; the evidence stays. Grease drops from food rows, gum by the stage, spill stains across the plaza, a ring of mud where the beer garden stood. Pressure and surface washing removes the last trace of the event — the difference between “the festival was here” and “nothing happened here” in the eyes of the neighborhood, the city, and next year’s permit reviewer.',
    body: [
      'Our wash crews run hot-water pressure rigs and surface cleaners sized to the space — wide surface cleaners for plazas and streets, wands and detail nozzles for brick, monuments, and fixtures. We pre-treat grease zones in vendor rows, collect wastewater where regulations require it, and stage the wash so sidewalks and storefronts are done before businesses open.',
      'Most post-event washes happen on the same overnight or early-morning window as the rest of the turnaround — sweep first, wash second, so the street opens clean, not just clear. For city-permitted events, a documented wash of the affected corridors is often the fastest way to a smooth relationship with the local alderman’s office.',
      'We also handle pre-event washing — refreshing plazas and vendor pads before load-in so the first impression is yours, not the last event’s.',
    ],
    benefits: [
      'Hot-water pressure rigs and wide surface cleaners',
      'Grease pre-treatment for food vendor rows',
      'Wastewater collection where regulations require it',
      'Sequenced with overnight cleanup — sweep, then wash',
      'Pre-event washing for plazas and vendor pads',
    ],
    shortDescription:
      'Pressure washing that erases the event from streets, plazas, and vendor rows.',
    image: images.services['surface-washing'],
  },
];

/** Helper for the services grid / page generation. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
