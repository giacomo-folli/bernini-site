<script lang="ts">
	import BookACall from '../pricing/BookACall.svelte';
	import FirstOption from '../pricing/FirstOption.svelte';
	import GoodToKnow from '../pricing/GoodToKnow.svelte';
	import IntroBlock from '../pricing/IntroBlock.svelte';
	import SecondOption from '../pricing/SecondOption.svelte';
	import ThirdOption from '../pricing/ThirdOption.svelte';
</script>

<section class="scroll-mt-4" id="pricing">
	<div class="mx-auto max-w-7xl px-8 py-12 md:px-12">
		<div class="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<IntroBlock />
			<FirstOption />
			<SecondOption />
			<ThirdOption />
			<GoodToKnow />
			<BookACall />
		</div>
	</div>
</section>
