<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Training } from '$lib/types/training';

	export let day: number;
	export let selectedMonth: number;
	export let selectedYear: number;
	export let selectedType: string | null;

	// Mock training data matching homepage courses
	const trainings: Training[] = [
		{
			id: 'verticali',
			title: 'Verticali',
			trainer: 'Francesco',
			time: '18:00',
			type: 'Verticali',
			level: 'Tutti i livelli',
			maxParticipants: 10
		},
		{
			id: 'movement',
			title: 'Movement',
			trainer: 'Francesco',
			time: '19:30',
			type: 'Movement',
			level: 'Tutti i livelli',
			maxParticipants: 10
		},
		{
			id: 'parkour',
			title: 'Parkour',
			trainer: 'Francesco',
			time: '17:00',
			type: 'Parkour',
			level: 'Tutti i livelli',
			maxParticipants: 10
		}
	];

	$: isToday =
		new Date().getDate() === day &&
		new Date().getMonth() === selectedMonth &&
		new Date().getFullYear() === selectedYear;

	$: filteredTrainings = selectedType && selectedType !== 'Tutti'
		? trainings.filter((t) => t.type === selectedType)
		: trainings;
</script>

<div class="relative px-1 py-2 sm:py-3">
	<button
		class="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm {isToday
			? 'bg-black font-semibold text-white hover:bg-zinc-800'
			: 'text-zinc-900 hover:bg-zinc-100'}"
	>
		{day}
	</button>

	{#if filteredTrainings.length > 0}
		<div class="mt-1">
			{#each filteredTrainings as training}
				<a
					href="/corsi/{training.id}"
					class="mt-1 block rounded-lg bg-zinc-100 px-2 py-1 text-xs text-zinc-900 transition-colors hover:bg-zinc-200"
					in:fade
				>
					<div class="font-medium">{training.title}</div>
					<div class="text-zinc-600">{training.time}</div>
				</a>
			{/each}
		</div>
	{/if}
</div>