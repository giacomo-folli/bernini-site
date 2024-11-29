<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Training } from '$lib/types/training';
	import { getDaysInMonth, getFirstDayOfMonth } from '$lib/utils/date';
	import CalendarDay from './CalendarDay.svelte';

	export let selectedMonth: number;
	export let selectedYear: number;
	export let selectedType: string | null;

	const dispatch = createEventDispatcher();

	const monthNames = [
		'Gennaio',
		'Febbraio',
		'Marzo',
		'Aprile',
		'Maggio',
		'Giugno',
		'Luglio',
		'Agosto',
		'Settembre',
		'Ottobre',
		'Novembre',
		'Dicembre'
	];

	$: daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
	$: firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);
	$: previousDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
	$: days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

	function previousMonth() {
		if (selectedMonth === 0) {
			selectedMonth = 11;
			selectedYear--;
		} else {
			selectedMonth--;
		}
		dispatch('monthChange', { month: selectedMonth, year: selectedYear });
	}

	function nextMonth() {
		if (selectedMonth === 11) {
			selectedMonth = 0;
			selectedYear++;
		} else {
			selectedMonth++;
		}
		dispatch('monthChange', { month: selectedMonth, year: selectedYear });
	}
</script>

<div class="rounded-3xl bg-white p-4 ring-1 ring-zinc-200 sm:p-8">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-medium text-black">
			{monthNames[selectedMonth]}
			{selectedYear}
		</h2>
		<div class="flex gap-2">
			<button
				on:click={previousMonth}
				class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-black"
			>
				<span class="sr-only">Mese precedente</span>
				<svg
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				on:click={nextMonth}
				class="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-black"
			>
				<span class="sr-only">Mese successivo</span>
				<svg
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	</div>

	<div class="mt-6 grid grid-cols-7 text-center text-xs font-medium text-zinc-500">
		<div class="hidden sm:block">Domenica</div>
		<div class="hidden sm:block">Lunedì</div>
		<div class="hidden sm:block">Martedì</div>
		<div class="hidden sm:block">Mercoledì</div>
		<div class="hidden sm:block">Giovedì</div>
		<div class="hidden sm:block">Venerdì</div>
		<div class="hidden sm:block">Sabato</div>
		<div class="sm:hidden">D</div>
		<div class="sm:hidden">L</div>
		<div class="sm:hidden">M</div>
		<div class="sm:hidden">M</div>
		<div class="sm:hidden">G</div>
		<div class="sm:hidden">V</div>
		<div class="sm:hidden">S</div>
	</div>

	<div
		class="mt-2 grid grid-cols-7 gap-px text-sm sm:mt-4"
		style="grid-template-rows: repeat(auto-fill, minmax(2.5rem, 1fr));"
	>
		{#each previousDays as _}
			<div class="relative px-1 py-2 sm:py-3" />
		{/each}

		{#each days as day}
			<CalendarDay {day} {selectedMonth} {selectedYear} {selectedType} />
		{/each}
	</div>
</div>
