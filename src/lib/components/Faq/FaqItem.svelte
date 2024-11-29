<script lang="ts">
	import { slide } from 'svelte/transition';

	export let index: number | undefined = undefined;
	export let selected: number | undefined = undefined;
	export let question: string | undefined = undefined;
	export let answer: string | undefined = undefined;
</script>

<li class="relative">
	<button
		class="w-full p-4 text-left"
		on:click={() => (selected = selected !== index ? index : undefined)}
		type="button"
	>
		<div class="flex items-center justify-between text-black">
			<p class="text-md tracking-tight text-black">{question}</p>
			<svg
				class="ml-4 inline h-5 w-5 min-w-5 rotate-180 transform transition-transform duration-200 {selected ===
				index
					? ' rotate-180'
					: ' rotate-0'}"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
					clip-rule="evenodd"
					fill-rule="evenodd"
				></path></svg
			>
		</div>
	</button>
	{#if selected === index}
		<div transition:slide id="container1">
			<div class="px-4 pb-6 pt-0 text-sm text-zinc-500">
				{answer}
			</div>
		</div>
	{/if}
</li>
