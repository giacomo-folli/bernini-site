<script>
	import Cta from '$lib/components/global/Cta.svelte';
	import AllScope from '$lib/components/landing/AllScope.svelte';
	import Faq from '$lib/components/landing/Faq.svelte';
	import Howitworks from '$lib/components/landing/Howitworks.svelte';
	import Pricing from '$lib/components/landing/Pricing.svelte';
</script>

<div class="mx-auto max-w-2xl px-4 py-20 sm:px-6 md:px-12 lg:px-8">
	<Howitworks />
	<AllScope />

	<div class="w-full overflow-hidden rounded-2xl border">
		<img class="object-cover" src="https://placehold.co/650x400" alt="placeholder" />
	</div>

	<Pricing />
	<Faq />
	<Cta />
</div>

<svelte:head>
	<title>Come Funziona | Francesco Bernini</title>
	<meta
		name="description"
		content="Scopri come allenarti con me e tutte le altre info necessarie."
	/>
</svelte:head>
