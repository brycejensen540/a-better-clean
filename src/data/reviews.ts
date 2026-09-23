// Testimonials from event organizers and vendors. These are illustrative
// placeholder quotes for the demo — replace with real client quotes as
// you collect them.

export type Review = {
  name: string;
  role: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: 'Dana K.',
    role: 'Festival Director, Lakeshore Music Fest',
    text: 'Three years, three sellouts, and our grounds crew has never opened late. The night report is in my inbox before the morning meeting — tonnage, photos, hazards. It runs our production call now.',
  },
  {
    name: 'Marcus T.',
    role: 'Operations Manager, County Fair Board',
    text: 'They handled ten days of midway grease and barn bedding without a single complaint from exhibitors. The strike was done in three days and the county got its fairgrounds back spotless.',
  },
  {
    name: 'Priya S.',
    role: 'Race Director, Lakefront Marathon',
    text: 'Five-mile corridor cleared and reopened 40 minutes ahead of the permit time. The neighbors wrote in to compliment the cleanup instead of complain. First time that has ever happened.',
  },
  {
    name: 'Elena R.',
    role: 'Ward Liaison, City Events Office',
    text: 'The documentation is the part I did not expect — weight tickets, diversion numbers, wash photos. Our permit reviews are faster now because the paperwork arrives before we ask for it.',
  },
  {
    name: 'Tom W.',
    role: 'Food Vendor Coordinator, Streetsville Market',
    text: 'Our vendor row stayed serviceable all weekend — they ran the grease pads on a loop and washed every night. Sunday strike was swept before most of us had the tents down.',
  },
  {
    name: 'Jasmine L.',
    role: 'Sponsorship Lead, Greenfield Fest',
    text: 'The diversion report went straight into our sponsor deck — 71% documented, by weight. We renewed the sustainability sponsorship the same month because the numbers were real.',
  },
];
