// Event types served. The overview page lists every type we work;
// the four with a `slug` get their own dedicated page under /events/<slug>.

export type EventType = {
  name: string;
  /** When present, this type gets a generated page at /events/<slug>. */
  slug?: string;
};

/** The full list of event types served. */
export const allEvents: EventType[] = [
  { name: 'Music Festivals', slug: 'music-festivals' },
  { name: 'Fairs & Carnivals', slug: 'fairs-carnivals' },
  { name: 'Parades & Races', slug: 'parades-races' },
  { name: 'Street Fests & Markets', slug: 'street-fests' },
  { name: 'Cultural Festivals' },
  { name: 'Food & Drink Festivals' },
  { name: 'Sporting Events' },
  { name: 'Community Celebrations' },
  { name: 'Corporate Events' },
  { name: 'Multi-Weekend Series' },
  { name: 'New Year & Holiday Events' },
  { name: 'Air & Boat Shows' },
];

export type EventPage = {
  slug: string;
  name: string;
  /** Unique meta description for the page. */
  metaDescription: string;
  /** Small label above the heading. */
  eyebrow: string;
  /** Main page heading. */
  title: string;
  /** Hero paragraph — the conversion opener. */
  intro: string;
  /** Supporting body paragraphs. */
  body: string[];
  /** Optional list of services emphasized for this event type. */
  services?: { title: string; description: string }[];
  /** Optional operational notes / highlights. */
  notes?: { title: string; description: string }[];
  /** Path to a real photo of this event type (from /public/images). */
  image: string;
};

import { images } from './images';

export const eventPages: EventPage[] = [
  {
    slug: 'music-festivals',
    name: 'Music Festivals',
    metaDescription:
      'Waste management for music festivals — grounds crews, overnight turnarounds, and documented diversion rates across the Midwest. A Better Clean moves the tonnes. Call (312) 555-0148.',
    eyebrow: 'Event Type',
    title: 'From Soundcheck to Sunrise, We Handle the Tonnes',
    image: images.events['music-festivals'],
    intro:
      'A three-day music festival generates more waste per guest than a stadium — and it lands on open ground with no infrastructure. Cups, confetti, food packaging, camping gear abandoned at load-out: our festival crews are sized and sequenced for exactly this. During sets, grounds crews keep the bowl and concourses walkable. After the encore, the night shift consolidates, hauls, and sweeps so gates open on time tomorrow — and on Monday, your site passes inspection.',
    body: [
      'Festival waste planning starts with the crowd math. Expected attendance, days of operation, vendor count, and whether camping is on-site drive the bin count, crew size, and truck schedule — and we scope the site in person before quoting. The plan places waste infrastructure where crowd flow actually puts people, not where the site map looks tidy.',
      'During event hours, crews run rotating loops through the bowl, concourses, vendor rows, and campgrounds. Bins are serviced before they overflow because an overflowing bin is where litter starts. Eco-team members at high-traffic stations keep recycling contamination down, protecting your diversion numbers.',
      'Overnight is where festivals are won. The night shift consolidates bagged waste, runs roll-off swaps through the small hours, sweeps the morning’s first impressions, and delivers the photo log and tonnage report before your production meeting. On load-out day, we clear debris as vendors break down and finish with a documented sweep of the grounds.',
    ],
    services: [
      {
        title: 'Full-Service Cleanup',
        description:
          'Bins staged per crowd flow, grounds crews on loops through the bowl and campgrounds, and hauling sized to festival tonnage.',
      },
      {
        title: 'Overnight Turnaround',
        description:
          'Night-shift consolidation, roll-off swaps, and sweeping so every day opens on schedule with a morning report in your inbox.',
      },
      {
        title: 'Recycling & Diversion',
        description:
          'Paired stations, eco-teams at peak-hour bins, and a documented diversion rate ready for sponsors and permit reports.',
      },
      {
        title: 'Restroom Service',
        description:
          'Scheduled service loops, restocking, and pumping for the banks your guests will absolutely talk about.',
      },
    ],
  },
  {
    slug: 'fairs-carnivals',
    name: 'Fairs & Carnivals',
    metaDescription:
      'Cleanup for county fairs and carnivals — midway waste, animal-barn debris, and nightly turnarounds. A Better Clean keeps the fairgrounds guest-ready. Call (312) 555-0148.',
    eyebrow: 'Event Type',
    title: 'Ten Days of Fair, Zero Days of Mess',
    image: images.events['fairs-carnivals'],
    intro:
      'A county fair is a city that builds itself in a week and strikes in three days — midway fryers, animal barns, grandstand crowds, and a garbage profile that changes by the day. We run the fairgrounds like the municipality it temporarily is: bins serviced on schedule, barns and midway on separate loops, and every night a full turnaround so the gates open clean tomorrow morning.',
    body: [
      'Fairs pile up waste streams other events never see — fryer oil and grease board from the midway, bedding and manure from the barns, grandstand debris after the demolition derby. Our crews are briefed per zone: the midway loop keeps food-area bins ahead of the rush, the barn crew coordinates with exhibitors, and the grandstand team clears after every headline event.',
      'The nightly turnaround is non-negotiable at a fair, because the fair reopens at eight. We sweep the midway, empty and re-line every bin, hose down food pads, and stage the next day’s consumables — so morning walkthroughs find grounds, not garbage. Multi-weekend fairs get a refined plan each cycle; the crew that knows your grounds clears them faster every run.',
      'When the fair ends, the strike is where we earn the season. Barn bedding, fencing, signage, and midway debris move by the truckload on a schedule that returns your fairgrounds to the county clean — and documented — before the next event books the space.',
    ],
    services: [
      {
        title: 'Full-Service Cleanup',
        description:
          'Zone-based crews for midway, barns, and grandstand — each loop matched to its own waste profile.',
      },
      {
        title: 'Overnight Turnaround',
        description:
          'Midway swept, bins re-lined, food pads hosed — every morning, for the full run of the fair.',
      },
      {
        title: 'Surface & Pressure Washing',
        description:
          'Grease pre-treatment and pad washing in food rows, and a documented post-fair wash of the grounds.',
      },
    ],
    notes: [
      {
        title: 'Animal-barn streams handled separately',
        description:
          'Bedding and manure move on their own schedule, coordinated with exhibitors and composted or hauled per county rules.',
      },
      {
        title: 'Multi-weekend continuity',
        description:
          'The same crew works every cycle, so the turnaround gets faster and the plan keeps improving all season.',
      },
    ],
  },
  {
    slug: 'parades-races',
    name: 'Parades & Races',
    metaDescription:
      'Post-event cleanup for parades, marathons, and races — route sweeps and barricade-line debris cleared within hours of the finish. A Better Clean. Call (312) 555-0148.',
    eyebrow: 'Event Type',
    title: 'The Street Reopens Like It Never Closed',
    image: images.events.parades,
    intro:
      'A parade or road race closes the street for the morning and promises the city it will be back by the afternoon. Confetti cannons, water stations, gel packets, and a million candy wrappers stand between the finish line and that promise. Our route crews sweep the corridor in rolling sections so the barricades come down on schedule — and the neighborhood sees a clean street, not the morning’s party.',
    body: [
      'Route cleanup is a logistics problem, not a shovelling problem. We sweep in rolling sections behind the last participants — the block that finished an hour ago is already being cleared — staging bagged waste at pickup points along the route for the trucks, so full bags never sit at the curb. Water-stop and start/finish zones get dedicated crews because that is where the volume concentrates.',
      'The clock is the client. Permits state a reopen time, residents know it, and the alderman’s office hears about it if it slips. Our crews are sized to the promise: for a typical 10K we can clear a five-mile corridor in under three hours; for a large parade with full confetti coverage, we bring the sweeper trucks and stage them at the tail of the route.',
      'When the route includes parks and medians, we finish with a detail pass — the wrapper in the shrubbery is the one a resident photographs. The goal is that by the time traffic returns, the only evidence of the morning is the chalk arrows.',
    ],
    services: [
      {
        title: 'Route Sweeps',
        description:
          'Rolling-section sweeps behind the last participant, with waste staged at pickup points for the trucks.',
      },
      {
        title: 'Surface & Pressure Washing',
        description:
          'Start/finish plazas and staging corridors washed where the event left more than litter behind.',
      },
      {
        title: 'Overnight Turnaround',
        description:
          'For evening parades and holiday events, night crews clear the corridor before morning traffic.',
      },
    ],
    notes: [
      {
        title: 'Built to the reopen time',
        description:
          'Crews are sized to your permit’s street-reopen promise, and we plan to beat it, not meet it.',
      },
      {
        title: 'Detail pass included',
        description:
          'Parks, medians, and tree lawns get a hand pass — the photographable details are the ones that matter to neighbors.',
      },
    ],
  },
  {
    slug: 'street-fests',
    name: 'Street Fests & Markets',
    metaDescription:
      'Cleanup for neighborhood street fests and open-air markets — vendor-row waste, nightly street sweeps, and pressure washing between weekend days. Call A Better Clean at (312) 555-0148.',
    eyebrow: 'Event Type',
    title: 'Closed Streets, Clean Streets, Both Weekends',
    image: images.events['street-fests'],
    intro:
      'A neighborhood street fest is twelve hours of thousands of guests on asphalt that belongs to the residents who live behind it. Vendor rows generate grease and packaging at a shocking rate, and every hour the street stays dirty is an hour the neighbors remember. We run the loop — bins, vendor-row sweeps, nightly washdowns — so Sunday night looks like Friday never happened.',
    body: [
      'Street fests compress an entire festival’s waste profile onto four blocks. Vendor rows need grease-aware servicing every hour; the stage areas need cups off the ground before they become a slipping hazard; and the residential edges need the bins that overflow first watched like a hawk. Our loop plans treat each of these as its own zone.',
      'Between festival days we run the morning reset: street sweeper down the corridor, bins re-lined, food pads washed, and the sidewalk fronts of homes along the route detailed. It is the difference between a fest the neighborhood welcomes back and one the ward office hears about in the fall.',
      'Sunday night is the promise-keeping night. Vendors strike through the evening, and our load-out crew clears debris as it comes down, sweeps the corridor, and finishes with the pressure wash that returns the street to the city clean. When the permit requires documentation, you get the photos and weight tickets that close the file.',
    ],
    services: [
      {
        title: 'Full-Service Cleanup',
        description:
          'Zone loops for vendor rows, stage areas, and residential edges — each with its own servicing rhythm.',
      },
      {
        title: 'Overnight Turnaround',
        description:
          'The morning reset between festival days: sweeper, re-lining, pad washes, and sidewalk detail.',
      },
      {
        title: 'Surface & Pressure Washing',
        description:
          'Sunday-night washdown that returns the street to the city clean, with documentation for the permit file.',
      },
    ],
    notes: [
      {
        title: 'Neighbors are a stakeholder',
        description:
          'Residential frontage gets detail passes every morning — the fest’s reputation lives on their block.',
      },
      {
        title: 'Ward-ready documentation',
        description:
          'Photos and weight tickets that make next year’s permit conversation easy.',
      },
    ],
  },
];

/** Helper for page generation. */
export function getEventPage(slug: string): EventPage | undefined {
  return eventPages.find((e) => e.slug === slug);
}
