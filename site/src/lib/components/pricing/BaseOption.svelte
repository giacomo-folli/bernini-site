<script lang="ts">
	export let title: string = 'Titolo';
	export let type: 'online' | 'live' = 'live';
	export let firstFree: boolean = false;
	export let batchOfferPrice: number | undefined = undefined;
	export let batchOfferQuantity: number | undefined = undefined;
	export let price: number = 30;
	export let feats: string[] = [];
	export let slogan: string = '';
</script>

<section class="flex h-full flex-col justify-between rounded-3xl bg-white p-8 text-black">
	<div>
		<div class="flex flex-col gap-2">
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between">
					<p class="text-lg text-black">{title}</p>
				</div>
				<p class="mt-1 text-xl font-medium text-black">
					€{price}<span class="ml-1 text-sm text-zinc-500">/lezione</span>
					{#if batchOfferPrice}
						€{batchOfferPrice}<span class="ml-1 text-sm text-zinc-500">
							x {batchOfferQuantity} lezioni</span
						>
					{/if}
					{#if firstFree}
						<span class="block text-xs text-black">+ 1° lezione gratis</span>
					{/if}
				</p>
			</div>

			<p class="mt-1 text-sm text-zinc-500">{slogan}</p>
		</div>

		<!-- {#if feats.length > 0}
			<div class="mt-6 text-sm text-zinc-700">
				<p class="">Cosa faremo:</p>
				<ul class=" list-inside list-disc" role="list">
					{#each feats as feat}
						<li><span class="text-xs">{feat}</span></li>
					{/each}
				</ul>
			</div>
		{/if} -->
	</div>

	<!-- <div class="mt-6">
		<a
			class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
			href="#_">Scopri di più <span>&rarr;</span></a
		>
	</div> -->
</section>
