<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import ChiSono from '$lib/components/landing/ChiSono.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import { onMount } from 'svelte';
	import Page from '$lib/components/Page.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	onMount(async () => {
		const res = await fetch('https://bernini-admin.pages.dev/api/classes', {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		});
		const data = res.json();

		console.log('aioo', data);
	});
</script>

<Seo
	title="Home | Francesco Bernini"
	description="Naviga nel sito per trovare i corsi attivi e le sessioni di allenamento online."
/>

<Page id="home">
	<div class="mb-14">
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
</Page>
