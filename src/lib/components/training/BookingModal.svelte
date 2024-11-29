<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let participants = 1;
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
	<div class="w-full max-w-md rounded-3xl bg-white p-8">
		<div class="flex items-center justify-between">
			<h2 class="text-lg font-medium text-black">Prenota la tua sessione</h2>
			<button
				on:click={() => dispatch('close')}
				class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-black"
			>
				<span class="sr-only">Chiudi</span>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<form class="mt-6 space-y-6">
			<div>
				<label for="participants" class="block text-sm font-medium text-zinc-700">
					Numero di partecipanti
				</label>
				<select
					id="participants"
					bind:value={participants}
					class="mt-1 block w-full rounded-lg border-zinc-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm"
				>
					{#each Array(10) as _, i}
						<option value={i + 1}>{i + 1}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="notes" class="block text-sm font-medium text-zinc-700">Note (opzionale)</label>
				<textarea
					id="notes"
					rows="3"
					class="mt-1 block w-full rounded-lg border-zinc-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
				/>
			</div>

			<div class="flex items-center justify-between border-t border-zinc-200 pt-6">
				<p class="text-sm text-zinc-500">Totale: ${participants * 9}</p>
				<button
					type="submit"
					class="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
				>
					Conferma prenotazione
				</button>
			</div>
		</form>
	</div>
</div>