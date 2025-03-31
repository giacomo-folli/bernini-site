<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import AllScope from '$lib/components/landing/AllScope.svelte';
	import Faq from '$lib/components/landing/Faq.svelte';
	import Howitworks from '$lib/components/landing/Howitworks.svelte';
	import Pricing from '$lib/components/landing/Pricing.svelte';
	import Image from '$lib/components/global/Image.svelte';
	import Page from '$lib/components/Page.svelte';
	import Seo from '$lib/components/global/Seo.svelte';
</script>

<Seo
	title="Come Funziona | Francesco Bernini"
	description="Scopri come allenarti con me e tutte le altre info necessarie."
/>

<Page id="come-funziona">
	<Howitworks />

	<div class="mt-8 w-full overflow-hidden rounded-2xl border">
		<Image src="/capacity.jpg" alt="park session" width="100%" />
	</div>

	<AllScope />

	<Pricing />
	<Faq />
	<Cta />
</Page>
