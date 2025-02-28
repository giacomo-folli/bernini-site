<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navigation from '$lib/components/global/Navigation.svelte';
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount } from 'svelte';

	let { children } = $props();
	onMount(() => injectAnalytics());
</script>

<Navigation />
<main class="flex-grow">
	{@render children()}
</main>
<Footer />
