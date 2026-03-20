<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import ChiSono from '$lib/components/landing/ChiSono.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import CourseSlider from '$lib/components/landing/CourseSlider.svelte';
	import Slogan from '$lib/components/landing/Slogan.svelte';
	import Page from '$lib/components/Page.svelte';
	import Seo from '$lib/components/global/Seo.svelte';
</script>

<Seo
	title="Home | Francesco Bernini"
	description="Naviga nel sito per trovare i corsi attivi e le sessioni di allenamento online."
/>

<Page id="home">
	<Hero />
	<CourseSlider />
	<Slogan />
	<ChiSono />
	<LogoCloud />
	<Testimonials />
	<Cta />
</Page>
