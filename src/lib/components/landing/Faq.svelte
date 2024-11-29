<script lang="ts">
	import FaqItem from '../Faq/FaqItem.svelte';
	import { faqs } from '../Faq/faqs';

	let selected: number | undefined = undefined;
</script>

<section class="scroll-mt-24" id="faq">
	<div class="py-12">
		<div class="py-4">
			<h2 class="text-2xl font-light tracking-tighter text-black lg:text-3xl">Domande frequenti</h2>
			<p class="mt-3 text-black">
				Non sei soddisfatto/a? Sentiamoci via <a
					class="text-blue-400 duration-200 hover:text-black"
					href="mailto:email@difrancesco.com">email</a
				>, sarò felice di chiarire qualsiasi dubibo.
			</p>
		</div>

		<div>
			<ul
				class="mt-5 list-none divide-y divide-zinc-200 rounded-3xl bg-white text-black"
				role="list"
			>
				{#each faqs as faq, i}
					<FaqItem question={faq.question} answer={faq.answer} index={i + 1} bind:selected />
				{/each}
			</ul>
		</div>
	</div>
</section>
