<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/global/Footer.svelte';
	import Navigation from '$lib/components/global/Navigation.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Images } from '$lib/enums';

	let { children } = $props();
	onMount(() => injectAnalytics());
</script>

<Seo />

<Navigation />
<main>
	{@render children()}
</main>

<Footer />
