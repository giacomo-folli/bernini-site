<script lang="ts">
	import BaseOption from '../pricing/BaseOption.svelte';
	import BookACall from '../pricing/BookACall.svelte';
	import GoodToKnow from '../pricing/GoodToKnow.svelte';
</script>

<section class="scroll-mt-4" id="pricing">
	<div class="pt-10">
		<div>
			<h2 class="text-2xl font-light tracking-tighter text-black lg:text-3xl">Prezzi</h2>
		</div>
		<!-- <IntroBlock /> -->

		<div class="mt-4 grid w-full grid-cols-1 gap-1 py-1 md:grid-cols-2 lg:grid-cols-3">
			<BaseOption
				firstFree
				title="Individuale"
				price={35}
				feats={['Nutrizione', 'Skill e Tecniche', 'Moduli']}
				slogan="Ideale per chi vuole essere seguito individualmente."
			></BaseOption>
			<BaseOption
				firstFree
				title="Gruppi"
				price={15}
				feats={['Nutrizione', 'Skill e Tecniche', 'Moduli']}
				slogan="Ideale per chi preferisce allenarsi in compagnia."
			></BaseOption>
			<BaseOption title="Movement" price={20} batchOfferPrice={120} batchOfferQuantity={10}
			></BaseOption>
		</div>

		<div class="grid-flow-col-1 grid w-full gap-1 sm:grid-cols-2">
			<GoodToKnow />
			<BookACall />
		</div>
	</div>
</section>
