import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: '#fcf9f8',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: '#446538',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
					fixed: '#c7edb5',
					'fixed-dim': '#abd19b',
					container: '#5c7e4f'
				},
				secondary: {
					DEFAULT: '#4b5f7f',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
					fixed: '#d5e3ff',
					'fixed-dim': '#b2c8ec',
					container: '#c3d8fe'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				surface: '#fcf9f8',
				'on-surface': '#1c1b1b',
				'surface-container-low': '#f6f3f2',
				'surface-container-lowest': '#ffffff',
				'outline-variant': '#c3c8bc',
				'on-primary': '#ffffff',
				'surface-variant': '#e5e2e1'
			},
			borderRadius: {
				DEFAULT: '0.25rem',
				lg: '0.5rem',
				xl: '0.75rem',
				full: '9999px'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				headline: ['Noto Serif', ...fontFamily.sans],
				body: ['Inter', ...fontFamily.sans],
				label: ['Inter', ...fontFamily.sans]
			}
		}
	}
};

export default config;
