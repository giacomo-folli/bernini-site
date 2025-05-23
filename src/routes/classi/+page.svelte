<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import Image from '$lib/components/global/Image.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	import { features } from '$lib/data/features.json';
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import { Pages } from '$lib/enums';
</script>

<Seo
	title="Come Funziona | Francesco Bernini"
	description="Scopri i nostri corsi di movimento, parkour e allenamento funzionale. Programmi personalizzati per ogni livello."
/>

<div class="py-16" id="top">
	<!-- Hero Section -->
	<section class="relative">
		<div
			class="text-center"
			style="opacity: 1; transform: none;"
			use:viewportAnimate={{ animation: 'slide-up' }}
		>
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>I nostri corsi</span
			>
			<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
				Trasforma il tuo <span class="font-medium">movimento</span>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 lg:text-lg">
				Scopri i nostri corsi progettati per aiutarti a sviluppare forza, agilità e consapevolezza
				del movimento. Ogni corso è adattato al tuo livello e ai tuoi obiettivi.
			</p>
		</div>

		<div
			class="mt-16 aspect-[2/1] w-full overflow-hidden rounded-3xl bg-zinc-100"
			use:viewportAnimate={{ animation: 'scale' }}
		>
			<Image
				animate={true}
				src="/images/images/park-session-1.jpeg"
				alt="Sessione di allenamento"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0"></div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="mt-24">
		<div class="text-center">
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Le discipline</span
			>
			<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
				Esplora le nostre <span class="font-medium">specialità</span>
			</h2>
		</div>

		<div
			class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
			use:viewportAnimate={{ animation: 'slide-up' }}
		>
			{#each features as feature}
				<div
					class="feature-card rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-200 transition-all duration-300 hover:shadow-2xl"
				>
					<h3 class="text-lg font-medium text-black">{feature.title}</h3>
					<p class="mt-4 text-sm text-zinc-600">{feature.description}</p>
					{#if feature.subLevels}
						<ul class="mt-4 space-y-2">
							{#each feature.subLevels as level}
								<li class="flex items-start text-sm text-zinc-600">
									<span class="mr-2 text-black">•</span>
									{level}
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- How it Works Section -->
	<section>
		<div
			class="mt-24 rounded-3xl bg-black p-8 text-white sm:p-12"
			use:viewportAnimate={{ animation: 'slide-up' }}
		>
			<div class="mx-auto max-w-3xl text-center">
				<span class="mb-6 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm"
					>Come funziona</span
				>
				<h2 class="text-3xl font-light sm:text-4xl">
					Il tuo percorso verso il <span class="font-medium">movimento</span>
				</h2>
				<p class="mt-6 text-zinc-300">
					Che si scelga di allenarsi online o di persona, il percorso inizia con una valutazione
					approfondita per creare un programma su misura per te.
				</p>
			</div>

			<div class="mt-12 grid gap-8 sm:grid-cols-3">
				<div class="step-item text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-medium"
					>
						1
					</div>
					<h3 class="mt-4 text-lg font-medium">Valutazione</h3>
					<p class="mt-2 text-sm text-zinc-300">
						Compila il questionario iniziale per aiutarci a capire i tuoi obiettivi e il tuo
						livello.
					</p>
				</div>
				<div class="step-item text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-medium"
					>
						2
					</div>
					<h3 class="mt-4 text-lg font-medium">Programma</h3>
					<p class="mt-2 text-sm text-zinc-300">
						Ricevi un programma personalizzato di 6 settimane basato sulle tue esigenze.
					</p>
				</div>
				<div class="step-item text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-medium"
					>
						3
					</div>
					<h3 class="mt-4 text-lg font-medium">Evoluzione</h3>
					<p class="mt-2 text-sm text-zinc-300">
						Monitoriamo i tuoi progressi e adattiamo il programma per garantire risultati costanti.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section class="mt-24">
		<div class="text-center">
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Prezzi</span
			>
			<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
				Scegli il tuo <span class="font-medium">piano</span>
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div
				class="price-card rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-200"
				use:viewportAnimate={{ animation: 'slide-up', delay: 10 }}
			>
				<h3 class="text-lg font-medium text-black">Lezioni Private</h3>
				<p class="mt-2 text-sm text-zinc-600">Allenamento personalizzato one-to-one</p>
				<div class="mt-6">
					<p class="flex items-baseline">
						<span class="text-4xl font-medium tracking-tight text-black">€35</span>
						<span class="ml-1 text-sm text-zinc-500">/lezione</span>
					</p>
					<p class="mt-2 text-xs text-zinc-500">Prima lezione gratuita!</p>
				</div>
				<a
					href={Pages.CONTACTS}
					class="mt-8 block rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-zinc-800"
				>
					Prenota ora
				</a>
			</div>

			<div
				class="price-card rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-200"
				use:viewportAnimate={{ animation: 'slide-up', delay: 150 }}
			>
				<h3 class="text-lg font-medium text-black">Lezioni di Gruppo</h3>
				<p class="mt-2 text-sm text-zinc-600">Allenati in un ambiente motivante e sociale</p>
				<div class="mt-6">
					<p class="flex items-baseline">
						<span class="text-4xl font-medium tracking-tight text-black">€15</span>
						<span class="ml-1 text-sm text-zinc-500">/lezione</span>
					</p>
					<p class="mt-2 text-xs text-zinc-500">Minimo 4 partecipanti</p>
				</div>
				<a
					href={Pages.CONTACTS}
					class="mt-8 block rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-zinc-800"
				>
					Prenota ora
				</a>
			</div>

			<div
				class="price-card rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-200"
				use:viewportAnimate={{ animation: 'slide-up', delay: 230 }}
			>
				<h3 class="text-lg font-medium text-black">Movement Class</h3>
				<p class="mt-2 text-sm text-zinc-600">Esplora il movimento naturale</p>
				<div class="mt-6">
					<p class="flex items-baseline">
						<span class="text-4xl font-medium tracking-tight text-black">€20</span>
						<span class="ml-1 text-sm text-zinc-500">/lezione</span>
					</p>
					<p class="mt-2 text-xs text-zinc-500">Pacchetto 10 lezioni: €120</p>
				</div>
				<a
					href={Pages.CONTACTS}
					class="mt-8 block rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-zinc-800"
				>
					Prenota ora
				</a>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="mt-24" use:viewportAnimate={{ animation: 'fade' }}>
		<div class="text-center">
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>FAQ</span
			>
			<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
				Domande <span class="font-medium">frequenti</span>
			</h2>
		</div>

		<div class="mt-16">
			<div class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-200">
				<dl class="space-y-8">
					{#each [1, 2, 3] as i}
						<div class="faq-item">
							<dt class="text-lg font-medium text-black">
								Come si svolge la prima lezione di prova?
							</dt>
							<dd class="mt-2 text-sm text-zinc-600">
								La prima lezione è un'opportunità per conoscerci e valutare il tuo livello attuale.
								Faremo una serie di esercizi di base e discuteremo i tuoi obiettivi per creare un
								piano personalizzato.
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="mt-24">
		<div>
			<Cta />
		</div>
	</section>
</div>
