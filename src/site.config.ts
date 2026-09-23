/**
 * Hub site configuration (deployed at https://rouraroble.github.io/).
 */
export const site = {
  name: 'Roura Labs',
  slug: 'hub',
  tagline: 'Free, private web tools that run in your browser.',
  description:
    'Free, no-sign-up web tools by Roura Labs: spin wheels, QR codes, money calculators, kitchen conversions, holidays, image compression, grades, geo games, invoices.',
  locale: 'en',
  ogLocale: 'en_US',
  themeColor: '#0f172a',
  backgroundColor: '#ffffff',
  accent: '#2563eb',
  author: { name: 'RouraRoble', url: 'https://github.com/RouraRoble' },
  contactEmail: 'roura.roble@gmail.com',
  launched: '2026-09-23',
  category: 'UtilitiesApplication',
  keywords: ['free online tools', 'browser tools', 'no sign-up tools'],
  social: { twitter: '' },
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT || '',
  beaconUrl: import.meta.env.PUBLIC_BEACON_URL || '',
  plausibleDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || '',
};
export type SiteConfig = typeof site;

/** The product portfolio (kept in sync with mission/DECISIONS.md). */
export const products = [
  { id: 'WEB-01', slug: 'whirl', name: 'Whirl', blurb: 'Spin-the-wheel and random pickers. The wheel lives in the link you share.', tag: 'Decide' },
  { id: 'WEB-02', slug: 'everqr', name: 'EverQR', blurb: 'Static QR codes that never expire, styled and exportable, plus an expiry checker.', tag: 'Create' },
  { id: 'WEB-03', slug: 'compoundly', name: 'Compoundly', blurb: 'Compare three saving or investing scenarios side by side, in one link.', tag: 'Money' },
  { id: 'WEB-04', slug: 'gramcup', name: 'GramCup', blurb: 'Grams to cups by ingredient, with sources, and a paste-a-recipe scaler.', tag: 'Kitchen' },
  { id: 'WEB-05', slug: 'holiday-atlas', name: 'Holiday Atlas', blurb: 'Public holidays and long weekends for every country, with calendar feeds.', tag: 'Plan' },
  { id: 'WEB-06', slug: 'pixlite', name: 'Pixlite', blurb: 'Convert, compress and resize images in your browser. Nothing is uploaded.', tag: 'Files' },
  { id: 'WEB-07', slug: 'gradegoal', name: 'GradeGoal', blurb: 'What you need on the final, weighted grades and GPA, saved on your device.', tag: 'Study' },
  { id: 'WEB-08', slug: 'geostreak', name: 'GeoStreak', blurb: 'Daily geography puzzles under one streak, plus a page for every country.', tag: 'Play' },
  { id: 'WEB-09', slug: 'worththen', name: 'WorthThen', blurb: 'What money from any year is worth today, for the US, UK, Canada, Australia and more.', tag: 'Money' },
  { id: 'WEB-10', slug: 'billdraft', name: 'BillDraft', blurb: 'Invoices, quotes and receipts with no sign-up and no watermark.', tag: 'Work' },
];
