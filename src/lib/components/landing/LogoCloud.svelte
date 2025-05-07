<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { inView, type InViewEventDetail } from '$lib/actions/intersectionObserver';
	
	let visible = false;

	function handleEnter(e: CustomEvent<InViewEventDetail>) {
		visible = true;
	}
</script>

<section 
	class="py-16"
	use:inView={{ threshold: 0.1 }}
	on:enter={handleEnter}
>
	{#if visible}
		<div class="text-center" in:fly={{ y: 20, duration: 800 }}>
			<span class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Partner</span
			>
			<h2 class="text-4xl font-light tracking-tight text-black lg:text-5xl">
				Dove mi puoi <span class="font-medium">trovare</span>
			</h2>
		</div>

		<div class="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
			<div class="grid grid-cols-1 items-center gap-8 rounded-3xl bg-white p-8 shadow-lg sm:grid-cols-2">
				<div class="col-span-1 flex justify-center" in:fade={{ duration: 800, delay: 200 }}>
					<img
						class="max-h-16 w-full object-contain transition-all duration-300 hover:scale-105"
						src="/logos/logo-wemove.jpg"
						alt="WeMove"
						width="auto"
						height="fit-content"
					/>
				</div>
				<div class="col-span-1 flex justify-center" in:fade={{ duration: 800, delay: 400 }}>
					<img
						class="max-h-24 w-full object-contain transition-all duration-300 hover:scale-105"
						src="/logos/logo-palestra.jpg"
						alt="Reform"
						width="auto"
						height="fit-content"
					/>
				</div>
			</div>
		</div>
	{/if}
</section>