<script lang="ts">
	import { goto } from '$app/navigation';
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import TrainingFilter from '$lib/components/calendar/TrainingFilter.svelte';
	import Page from '$lib/components/Page.svelte';
	import { onMount } from 'svelte';
	import Seo from '$lib/components/global/Seo.svelte';

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

<Seo
	title="Calendario Allenamenti | Francesco Bernini"
	description="Scopri e prenota le sessioni di allenamento con Francesco Bernini. Break dance, parkour, arrampicata e molto altro."
/>

<Page id="calendario">
	<div class="pt-3">
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
</Page>
