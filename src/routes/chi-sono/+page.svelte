<script lang="ts">
	import AboutHero from '$lib/components/about/AboutHero.svelte';
	import Journey from '$lib/components/about/Journey.svelte';
	import Philosophy from '$lib/components/about/Philosophy.svelte';
	import ImageGallery from '$lib/components/about/ImageGallery.svelte';
	import Cta from '$lib/components/global/Cta.svelte';
</script>

<svelte:head>
	<title>Chi Sono | Francesco Bernini</title>
	<meta
		name="description"
		content="Scopri la storia e la filosofia di Francesco Bernini, personal coach."
	/>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8">
	<AboutHero />
	<Journey />
	<ImageGallery />
	<Philosophy />
	<Cta />
</div>
