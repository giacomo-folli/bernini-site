<script lang="ts">
	import BookACall from '../pricing/BookACall.svelte';
	import FirstOption from '../pricing/FirstOption.svelte';
	import GoodToKnow from '../pricing/GoodToKnow.svelte';
	import IntroBlock from '../pricing/IntroBlock.svelte';
	import SecondOption from '../pricing/SecondOption.svelte';
	import ThirdOption from '../pricing/ThirdOption.svelte';
</script>

<section class="scroll-mt-4" id="pricing">
	<div class="py-12">
		<IntroBlock />

		<div class="grid w-full grid-cols-1 gap-1 py-1 md:grid-cols-2 lg:grid-cols-3">
			<FirstOption />
			<SecondOption />
			<ThirdOption />
		</div>

		<div class="grid-flow-col-1 grid w-full gap-1 sm:grid-cols-2">
			<GoodToKnow />
			<BookACall />
		</div>
	</div>
</section>
