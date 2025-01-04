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

<div class="mx-auto max-w-2xl px-4 py-20 sm:px-6 md:px-12 lg:px-8">
	<AboutHero />

	<div class="mt-6 grid h-full grid-cols-1 gap-2 text-pretty text-base text-zinc-500">
		<div>
			<img
				width="100%"
				height="auto"
				src="https://placehold.co/600"
				alt="placeholder"
				class="object-cover"
			/>
		</div>
	</div>

	<Journey />
	<ImageGallery />
	<Philosophy />
	<Cta />
</div>
