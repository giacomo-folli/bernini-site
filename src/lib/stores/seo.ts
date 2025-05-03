import { writable } from 'svelte/store';

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  type?: string;
}

const defaultSeo: SeoData = {
  title: 'Francesco Bernini | Personal Coach & Movement Specialist',
  description: 'Scopri un nuovo modo di allenarti con Francesco Bernini. Movimento naturale, parkour e allenamento funzionale personalizzato.',
  keywords: [
    'personal trainer online',
    'corsi movimento online',
    'allenamento funzionale',
    'movement coach',
    'lezioni online movimento',
    'coaching personalizzato'
  ],
  type: 'website',
  image: '/logo.jpg'
};

export const seo = writable<SeoData>(defaultSeo);