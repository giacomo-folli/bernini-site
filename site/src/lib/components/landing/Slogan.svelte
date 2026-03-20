<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
</script>

<section class="bg-surface py-40">
	<div
		use:viewportAnimate={{ animation: 'fade', threshold: 0.05 }}
		class="mx-auto max-w-4xl px-8 text-center"
	>
		<span
			class="material-symbols-outlined mb-12 text-4xl text-primary"
			style="font-variation-settings: 'FILL' 1;">format_quote</span
		>
		<blockquote
			class="mb-12 font-headline text-3xl italic leading-tight text-on-surface md:text-5xl"
		>
			"Il movimento è la chiave per sbloccare il tuo potenziale. Ogni passo è un'opportunità per
			crescere, imparare e trasformarsi."
		</blockquote>
		<cite class="font-label text-sm uppercase not-italic tracking-widest text-secondary"
			>— Francesco Bernini</cite
		>
	</div>
</section>
