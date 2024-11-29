<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Training } from '$lib/types/training';

	export let day: number;
	export let selectedMonth: number;
	export let selectedYear: number;
	export let selectedType: string | null;

	let showPopover = false;

	// Mock training data - In a real app, this would come from your backend
	const training: Training = {
		id: '1',
		title: 'Break Dance',
		trainer: 'Francesco Bernini',
		time: '18:00',
		type: 'Break Dance',
		level: 'Principianti',
		maxParticipants: 10
	};

	function handleClick() {
		goto('/calendario/break-dance-principianti');
	}
</script>

<div
	class="relative py-2 px-1 sm:py-3"
	on:mouseenter={() => (showPopover = true)}
	on:mouseleave={() => (showPopover = false)}
>
	<button
		class="mx-auto flex h-8 w-8 items-center justify-center rounded-full hover:bg-zinc-50 {day === new Date().getDate() &&
		selectedMonth === new Date().getMonth() &&
		selectedYear === new Date().getFullYear()
			? 'bg-black text-white hover:bg-zinc-800'
			: ''}"
		on:click={handleClick}
	>
		{day}
	</button>

	{#if showPopover && day === 1}
		<div
			class="absolute left-1/2 top-14 z-10 w-64 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow-lg ring-1 ring-zinc-200 sm:w-72"
		>
			<div class="flex flex-col gap-2">
				<p class="font-medium text-black">{training.title}</p>
				<p class="text-sm text-zinc-500">Ore: {training.time}</p>
				<p class="text-sm text-zinc-500">Con: {training.trainer}</p>
				<button
					class="mt-2 inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-sm text-white hover:bg-zinc-800"
					on:click={handleClick}
				>
					Dettagli
				</button>
			</div>
		</div>
	{/if}
</div>