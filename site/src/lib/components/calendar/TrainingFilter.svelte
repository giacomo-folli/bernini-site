<script lang="ts">
	export let trainingTypes: string[];
	export let selectedType: string | null = null;
</script>

<div class="flex flex-wrap gap-2">
	{#each trainingTypes as type}
		<button
			class="rounded-full px-3 py-1 text-sm transition-colors {selectedType === type
				? 'bg-black text-white'
				: 'bg-white text-zinc-600 hover:bg-zinc-100'}"
			on:click={() => (selectedType = type)}
		>
			{type}
		</button>
	{/each}
</div>