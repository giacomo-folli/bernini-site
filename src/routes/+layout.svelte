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

<div class="pb-6">
	<Footer />
</div>

<!-- tailwid custom rules -->
<style lang="postcss">
	.layout {
		@apply mx-auto w-full max-w-5xl flex-grow px-3 pb-6 sm:px-6 md:px-12 lg:px-8;
	}
</style>
