<script lang="ts">
	import { page } from '$app/stores';
	import BookingModal from '$lib/components/training/BookingModal.svelte';
	import TrainerBio from '$lib/components/training/TrainerBio.svelte';
	import TestimonialCarousel from '$lib/components/training/TestimonialCarousel.svelte';

	let showBookingModal = false;
</script>

<svelte:head>
	<title>Break Dance - Livello Principianti | Francesco Bernini</title>
	<meta
		name="description"
		content="Impara le basi della Break Dance con Francesco Bernini. Migliora equilibrio e coordinazione in un ambiente stimolante."
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-24 md:px-12 lg:mt-8 sm:px-6 lg:px-8">
	<nav class="flex mb-2" aria-label="Breadcrumb">
		<ol class="flex items-center space-x-2 text-sm text-zinc-500">
			<li>
				<a href="/" class="hover:text-black">Home</a>
			</li>
			<li>
				<span class="mx-2">/</span>
				<a href="/calendario" class="hover:text-black">Calendario</a>
			</li>
			<li>
				<span class="mx-2">/</span>
				<span class="text-black">Break Dance</span>
			</li>
		</ol>
	</nav>

	<div class="mx-auto max-w-2xl lg:max-w-none">
		<h1 class="text-3xl font-normal tracking-tighter text-black sm:text-4xl">
			Break Dance - Livello Principianti
		</h1>
		<p class="mt-2 text-lg text-zinc-600">Con Francesco Bernini | 1 Dicembre 2024, 18:00</p>

		<div class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<div class="prose prose-zinc">
					<p>
						Impara le basi della Break Dance, migliora il tuo equilibrio e coordinazione in un ambiente
						dinamico e stimolante. Questo corso è perfetto per chi vuole iniziare a esplorare il mondo
						della break dance in modo graduale e divertente.
					</p>

					<h2 class="text-xl font-medium text-black mt-8">Dettagli del corso</h2>
					<ul class="mt-4 space-y-3">
						<li class="flex items-center text-zinc-600">
							<span class="mr-2">⏤</span>
							Durata: 1 ora
						</li>
						<li class="flex items-center text-zinc-600">
							<span class="mr-2">⏤</span>
							Livello: Principianti
						</li>
						<li class="flex items-center text-zinc-600">
							<span class="mr-2">⏤</span>
							Numero massimo di partecipanti: 10
						</li>
						<li class="flex items-center text-zinc-600">
							<span class="mr-2">⏤</span>
							Luogo: Palestra Bernini
						</li>
					</ul>
				</div>

				<TrainerBio />
				<TestimonialCarousel />
			</div>

			<div class="lg:sticky lg:top-24 lg:h-fit">
				<div class="rounded-3xl bg-white p-8 ring-1 ring-zinc-200">
					<h2 class="text-lg font-medium text-black">Prenota la tua sessione</h2>
					<p class="mt-2 text-sm text-zinc-600">
						Unisciti a questa sessione di allenamento e inizia il tuo percorso verso il movimento
						naturale.
					</p>

					<div class="mt-6">
						<div class="flex items-baseline">
							<span class="text-3xl font-medium tracking-tight text-black">$9</span>
							<span class="ml-1 text-sm text-zinc-500">/sessione</span>
						</div>
						<span
							class="mt-2 inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
						>
							Prima lezione gratuita!
						</span>
					</div>

					<button
						on:click={() => (showBookingModal = true)}
						class="mt-8 flex h-10 w-full items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
					>
						Prenota Ora
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

{#if showBookingModal}
	<BookingModal on:close={() => (showBookingModal = false)} />
{/if}