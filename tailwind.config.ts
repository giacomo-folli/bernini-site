import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, scrollbarHide]
} as Config;
