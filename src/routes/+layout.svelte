<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/global/Footer.svelte';
	import Navigation from '$lib/components/global/Navigation.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	onMount(() => injectAnalytics());
</script>

<Seo />

{#if $page.url.pathname == "/home"}
	<div class="absolute bottom-0 top-0 block sm:hidden">
		<img
			alt="dd"
			height="100%"
			class="h-screen object-cover"
			src={'/images/images/park-session-1.jpeg'}
			sizes="(max-width: 640px) 640px,(max-width: 960px) 960px,1280px"
			loading="lazy"
		/>
	</div>
{/if}

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
