<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import AllScope from '$lib/components/landing/AllScope.svelte';
	import Faq from '$lib/components/landing/Faq.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Howitworks from '$lib/components/landing/Howitworks.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Pricing from '$lib/components/landing/Pricing.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
</script>

<div class="mx-auto max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8">
	<div class="mt-14 lg:mt-24 mb-14">
		<Hero />
	</div>
	<LogoCloud />
	<!-- <Work /> -->
	<Howitworks />
	<AllScope />
	<Testimonials />
	<Pricing />
	<Faq />
	<Cta />
</div>
