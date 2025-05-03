<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { animate, spring } from 'motion';
	import Image from '../global/Image.svelte';

	let heroSection: HTMLElement;
	let imageWrapper: HTMLElement;

	onMount(() => {
		animate(heroSection, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, easing: spring() });

		animate(
			imageWrapper,
			{ scale: [0.95, 1], opacity: [0, 1] },
			{ duration: 0.8, delay: 0.2, easing: spring() }
		);
	});
</script>

<section bind:this={heroSection} class="relative min-h-[60vh] overflow-hidden lg:min-h-[90vh]">
	<div class="grid min-h-[60vh] grid-cols-1 gap-8 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-12">
		<div in:fly={{ y: 20, duration: 800 }} class="z-10 px-4 pt-8 sm:px-6 lg:px-0 lg:pt-0">
			<span
				class="mb-4 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 lg:mb-6"
				>Online Movement Training</span
			>
			<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-7xl">
				Move <span class="font-medium">Better.</span>
				<br />Live <span class="font-medium">Better.</span>
			</h1>
			<p class="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 lg:mt-6 lg:text-lg">
				Scopri il potenziale del tuo corpo attraverso il movimento naturale. Corsi online
				personalizzati per ogni livello.
			</p>
			<div class="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
				<a
					href="/come-funziona"
					class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-zinc-800"
				>
					Scopri i Corsi Online
				</a>
				<a
					href="/contatti"
					class="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:translate-y-[-2px] hover:bg-black hover:text-white"
				>
					Contattami
				</a>
			</div>
		</div>

		<div
			bind:this={imageWrapper}
			class="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-zinc-100 shadow-2xl sm:aspect-[2/1] sm:rounded-3xl lg:aspect-auto lg:h-[90vh]"
		>
			<Image
				src="/images/images/park-session-1.jpeg"
				alt="Movement training"
				class="h-full w-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
				in:fade={{ duration: 1000 }}
			/>
		</div>
	</div>
</section>
