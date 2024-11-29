<script lang="ts">
	import { onMount } from 'svelte';
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import TrainingFilter from '$lib/components/calendar/TrainingFilter.svelte';
	import type { Training } from '$lib/types/training';
	import SpotsCounter from '$lib/components/global/SpotsCounter.svelte';

	let selectedMonth = new Date().getMonth();
	let selectedYear = new Date().getFullYear();
	let selectedType: string | null = null;

	const trainingTypes = [
		'Tutti',
		'Break Dance',
		'Parkour',
		'Arrampicata',
		'Verticali',
		'Flessibilità'
	];
</script>

<svelte:head>
	<title>Calendario Allenamenti | Francesco Bernini</title>
	<meta
		name="description"
		content="Scopri e prenota le sessioni di allenamento con Francesco Bernini. Break dance, parkour, arrampicata e molto altro."
	/>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 md:px-12 lg:px-8">
	<SpotsCounter />
	<div class="mx-auto mt-12 max-w-3xl">
		<h1 class="text-3xl font-normal tracking-tighter text-black sm:text-4xl">
			Calendario Allenamenti
		</h1>
		<p class="mt-4 text-base text-zinc-600">
			Esplora le sessioni disponibili e prenota il tuo prossimo allenamento.
		</p>

		<div class="mt-8">
			<TrainingFilter {trainingTypes} bind:selectedType />
		</div>

		<div class="mt-8">
			<Calendar
				{selectedMonth}
				{selectedYear}
				{selectedType}
				on:monthChange={(e) => {
					selectedMonth = e.detail.month;
					selectedYear = e.detail.year;
				}}
			/>
		</div>
	</div>
</div>
