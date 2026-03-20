<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
</script>

<section class="border-t border-outline-variant/10 py-24">
	<div class="mx-auto max-w-screen-2xl px-8" use:viewportAnimate={{ animation: 'fade' }}>
		<p
			class="mb-12 text-center font-label text-[10px] uppercase tracking-[0.3em] text-secondary/60"
		>
			Dove mi puoi trovare
		</p>
		<div class="flex flex-wrap items-center justify-center gap-16 opacity-50 grayscale md:gap-32">
			<span class="font-body text-3xl font-bold tracking-tighter">WeMove</span>
			<span class="font-headline text-3xl italic">Reform</span>
			<span class="font-body text-3xl font-light">KINETIC</span>
		</div>
	</div>
</section>
