<script lang="ts">
	import AboutHero from '$lib/components/about/AboutHero.svelte';
	import Journey from '$lib/components/about/Journey.svelte';
	import Philosophy from '$lib/components/about/Philosophy.svelte';
	import ImageGallery from '$lib/components/about/ImageGallery.svelte';
	import Cta from '$lib/components/global/Cta.svelte';
	import Page from '$lib/components/Page.svelte';
	import Seo from '$lib/components/global/Seo.svelte';
</script>

<Seo
	title="Chi Sono | Francesco Bernini"
	description="Scopri la storia e la filosofia di Francesco Bernini, personal coach."
/>

<Page id="about">
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
</Page>
