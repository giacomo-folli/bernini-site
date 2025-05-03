<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import ChiSono from '$lib/components/landing/ChiSono.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import CourseSlider from '$lib/components/landing/CourseSlider.svelte';
	import Slogan from '$lib/components/landing/Slogan.svelte';
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
	<div class="mb-4">
		<Hero />
	</div>

	<div class="border-t border-zinc-200" />

	<CourseSlider />

	<div class="border-t border-zinc-200" />

	<div class="-mx-4 sm:-mx-6 lg:-mx-10">
		<Slogan />
	</div>

	<div class="border-t border-zinc-200" />

	<ChiSono />

	<div class="border-t border-zinc-200" />

	<LogoCloud />

	<div class="border-t border-zinc-200" />

	<Testimonials />

	<div class="border-t border-zinc-200" />

	<div class="py-16">
		<Cta />
	</div>
</Page>
