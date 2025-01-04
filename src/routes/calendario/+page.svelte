<script lang="ts">
	import { goto } from '$app/navigation';
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import TrainingFilter from '$lib/components/calendar/TrainingFilter.svelte';
	import { onMount } from 'svelte';

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

	onMount(() => goto('/home'));
</script>

<svelte:head>
	<title>Calendario Allenamenti | Francesco Bernini</title>
	<meta
		name="description"
		content="Scopri e prenota le sessioni di allenamento con Francesco Bernini. Break dance, parkour, arrampicata e molto altro."
	/>

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Schedule",
			"name": "Calendario Allenamenti Francesco Bernini",
			"description": "Calendario delle sessioni di allenamento disponibili con Francesco Bernini",
			"location": {
				"@type": "Place",
				"name": "Palestra Bernini",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Salsomaggiore Terme",
					"addressRegion": "PR",
					"addressCountry": "IT"
				}
			}
		}
	</script>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 py-20 sm:px-6 md:px-12 lg:px-8">
	<div class="mx-auto max-w-3xl pt-3">
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
