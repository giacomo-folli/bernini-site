<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { inView, type InViewEventDetail } from '$lib/actions/intersectionObserver';

	let visible = false;

	function handleEnter(e: CustomEvent<InViewEventDetail>) {
		visible = true;
	}
</script>

<section class="relative overflow-hidden" use:inView={{ threshold: 0.1 }} on:enter={handleEnter}>
	{#if visible}
		<div class="relative pb-10 pt-12 md:rounded">
			<div class="absolute inset-0 bg-black">
				<div
					class="absolute inset-0 opacity-20"
					style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"
				></div>
			</div>

			<div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<span
						in:fade={{ duration: 800 }}
						class="mb-8 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white"
						>La mia filosofia</span
					>

					<h2
						in:fly={{ y: 20, duration: 800, delay: 200 }}
						class="text-2xl font-light italic tracking-tight text-white sm:text-4xl lg:text-5xl"
					>
						"Il movimento è la chiave per sbloccare il tuo potenziale. Ogni passo è un'opportunità
						per crescere, imparare e trasformarsi."
					</h2>

					<p
						in:fade={{ duration: 800, delay: 400 }}
						class="text-md mt-12 font-medium text-zinc-300"
					>
						Francesco Bernini
					</p>
				</div>
			</div>
		</div>
	{/if}
</section>
