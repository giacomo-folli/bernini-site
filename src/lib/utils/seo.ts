// SEO Constants
export const DEFAULT_TITLE = 'Francesco Bernini | Personal Coach & Movement Specialist';
export const DEFAULT_DESCRIPTION = 'Scopri un nuovo modo di allenarti con Francesco Bernini. Movimento naturale, parkour e allenamento funzionale personalizzato a Milano.';
export const SITE_URL = 'https://bernini.vercel.com';

export const KEYWORDS = [
  'personal trainer salsomaggiore',
  'personal trainer parma',
  'allenamento funzionale',
  'breath work',
  'movement coach',
  'parkour trainer',
  'movimento naturale',
  'calisthenics fidenza',
  'calisthenics parma',
  'allenamento personalizzato',
  'coach movimento naturale',
  'lezioni break dance',
  'vertical training',
  'flessibilità e mobilità'
];

export type OpenGraph = {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
};

export const defaultOpenGraph: OpenGraph = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  type: 'website',
  image: `${SITE_URL}/logo.jpg`,
  url: SITE_URL
};