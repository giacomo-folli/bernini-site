<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navigation from '$lib/components/global/Navigation.svelte';
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount } from 'svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	let { children } = $props();
	onMount(() => injectAnalytics());
</script>

<Seo />

<Navigation />
<main class="layout">
	{@render children()}
</main>

<Footer />

<style lang="postcss">
	.layout {
		@apply mx-auto w-full px-4 pb-6 sm:px-6 lg:px-8 xl:px-0;
		max-width: min(100%, 80rem);
	}
</style>