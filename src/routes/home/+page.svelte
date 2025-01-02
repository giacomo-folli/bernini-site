<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import AllScope from '$lib/components/landing/AllScope.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import ChiSono from '$lib/components/landing/ChiSono.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import { DEFAULT_DESCRIPTION, defaultOpenGraph } from '$lib/utils/seo';
</script>

<div class="mx-auto max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8">
	<div class="mb-14 mt-14 lg:mt-24">
		<Hero />
	</div>
	<!-- <Work /> -->
	<ChiSono />
	<div class="my-8 lg:my-12">
		<LogoCloud />
	</div>

	<div class="my-4">
		<Testimonials />
	</div>

	<div class="my-12">
		<Cta />
	</div>

	<div class="w-full">
		<div class="mx-auto mt-4 flex w-fit flex-col gap-2 text-pretty text-sm text-zinc-500">
			<a class="text-sm font-semibold text-zinc-500" href="/come-funziona/#">
				<span class="underline underline-offset-2"> Vai ai corsi </span>
				<span>&rarr;</span></a
			>
		</div>
	</div>
</div>

<svelte:head>
	<title>Home | Francesco Bernini</title>
	<meta
		name="description"
		content="Naviga nel sito per trovare i corsi attivi e le sessioni di allenamento online."
	/>

	<meta name="description" content={DEFAULT_DESCRIPTION} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={defaultOpenGraph.type} />
	<meta property="og:url" content={defaultOpenGraph.url} />
	<meta property="og:title" content={defaultOpenGraph.title} />
	<meta property="og:description" content={defaultOpenGraph.description} />
	<meta property="og:image" content={defaultOpenGraph.image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={defaultOpenGraph.url} />
	<meta property="twitter:title" content={defaultOpenGraph.title} />
	<meta property="twitter:description" content={defaultOpenGraph.description} />
	<meta property="twitter:image" content={defaultOpenGraph.image} />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Francesco Bernini",
			"url": "https://bernini.vercel.com",
			"image": "https://bernini.vercel.com/profile.jpg",
			"sameAs": [
				"https://instagram.com/francescobernini7"
				// "https://facebook.com/francesco.bernini.coach"
			],
			"jobTitle": "Personal Coach",
			"description": "Personal trainer specializzato in movimento naturale e allenamento funzionale a Parma",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Salsomaggiore Terme",
				"addressRegion": "PR",
				"addressCountry": "IT"
			}
		}
	</script>
</svelte:head>
