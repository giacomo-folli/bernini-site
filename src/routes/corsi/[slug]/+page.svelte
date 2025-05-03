<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { inView } from '$lib/actions/intersectionObserver';
	import Seo from '$lib/components/global/Seo.svelte';

	const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	const courses = {
		verticali: {
			title: 'Verticali',
			subtitle: 'Padroneggia l\'arte di stare in verticale',
			description: loremIpsum,
			duration: '3 Mesi',
			price: 35,
			image: '/images/images/park-session-3.jpeg',
			features: [
				'Progressioni tecniche personalizzate',
				'Focus sulla forza e il controllo',
				'Esercizi di mobilità specifici',
				'Tecniche di allineamento avanzate'
			],
			requirements: ['Nessuna esperienza richiesta', 'Buona mobilità delle spalle consigliata'],
			schedule: 'Lezioni settimanali di 90 minuti'
		},
		movement: {
			title: 'Movement',
			subtitle: 'Esplora il movimento naturale',
			description: loremIpsum,
			duration: '3 Mesi',
			price: 35,
			image: '/images/images/park-session-4.jpeg',
			features: [
				'Fondamenti di movimento naturale',
				'Tecniche di parkour base',
				'Elementi di break dance',
				'Sviluppo della creatività nel movimento'
			],
			requirements: ['Adatto a tutti i livelli', 'Desiderio di esplorare nuovi movimenti'],
			schedule: 'Lezioni bisettimanali di 60 minuti'
		},
		parkour: {
			title: 'Parkour',
			subtitle: 'Muoviti con sicurezza in ogni ambiente',
			description: loremIpsum,
			duration: '3 Mesi',
			price: 35,
			image: '/images/images/park-session-1.jpeg',
			features: [
				'Tecniche di base del parkour',
				'Valutazione del rischio',
				'Condizionamento specifico',
				'Progressioni per salti e atterraggi'
			],
			requirements: ['Livello base di fitness', 'Voglia di sfidare i propri limiti'],
			schedule: 'Lezioni settimanali di 90 minuti'
		},
		custom: {
			title: 'Custom',
			subtitle: 'Allenamento su misura per i tuoi obiettivi',
			description: loremIpsum,
			duration: 'Personalizzabile',
			price: 45,
			image: '/images/images/park-session-2.jpeg',
			features: [
				'Valutazione iniziale approfondita',
				'Programma completamente personalizzato',
				'Monitoraggio costante dei progressi',
				'Supporto continuo'
			],
			requirements: ['Nessun requisito specifico', 'Determinazione a raggiungere i propri obiettivi'],
			schedule: 'Orari flessibili in base alle tue esigenze'
		}
	};

	$: course = courses[$page.params.slug];
	let visible = {
		hero: false,
		details: false,
		features: false,
		cta: false
	};
</script>

<Seo
	title="{course.title} | Francesco Bernini"
	description={course.description}
/>

<div class="py-16">
	<!-- Hero Section -->
	<section
		class="relative"
		use:inView
		on:enter={() => (visible.hero = true)}
	>
		{#if visible.hero}
			<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
				<div class="order-2 lg:order-1" in:fly={{ y: 20, duration: 800 }}>
					<span
						class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
						>Corso</span
					>
					<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl">
						{course.title}
						<span class="block font-medium">{course.subtitle}</span>
					</h1>
					<p class="mt-6 text-base leading-relaxed text-zinc-600 lg:text-lg">
						{course.description}
					</p>
					<div class="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href="/contatti"
							class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-zinc-800 hover:translate-y-[-2px]"
						>
							Prenota una lezione
						</a>
						<a
							href="/contatti"
							class="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white hover:translate-y-[-2px]"
						>
							Richiedi informazioni
						</a>
					</div>
				</div>

				<div
					class="order-1 lg:order-2"
					in:fade={{ duration: 800, delay: 200 }}
				>
					<div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100">
						<img
							src={course.image}
							alt={course.title}
							class="h-full w-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
					</div>
				</div>
			</div>
		{/if}
	</section>

	<!-- Course Details -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.details = true)}
	>
		{#if visible.details}
			<div class="grid gap-8 lg:grid-cols-3">
				<div class="lg:col-span-2" in:fly={{ y: 20, duration: 800 }}>
					<h2 class="text-2xl font-light tracking-tight text-black sm:text-3xl">
						Dettagli del <span class="font-medium">corso</span>
					</h2>
					<div class="mt-8 grid gap-8 sm:grid-cols-2">
						<div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
							<h3 class="text-lg font-medium text-black">Durata</h3>
							<p class="mt-2 text-zinc-600">{course.duration}</p>
						</div>
						<div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
							<h3 class="text-lg font-medium text-black">Prezzo</h3>
							<p class="mt-2 text-zinc-600">€{course.price} / lezione</p>
						</div>
					</div>

					<div class="mt-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
						<h3 class="text-lg font-medium text-black">Requisiti</h3>
						<ul class="mt-4 space-y-2">
							{#each course.requirements as requirement}
								<li class="flex items-center text-zinc-600">
									<span class="mr-2 text-black">•</span>
									{requirement}
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div in:fade={{ duration: 800, delay: 200 }}>
					<div class="rounded-2xl bg-black p-6 text-white">
						<h3 class="text-lg font-medium">Orari e frequenza</h3>
						<p class="mt-4 text-zinc-300">{course.schedule}</p>
						<a
							href="/contatti"
							class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
						>
							Prenota ora
						</a>
					</div>
				</div>
			</div>
		{/if}
	</section>

	<!-- Features -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.features = true)}
	>
		{#if visible.features}
			<div in:fly={{ y: 20, duration: 800 }}>
				<h2 class="text-2xl font-light tracking-tight text-black sm:text-3xl">
					Cosa <span class="font-medium">imparerai</span>
				</h2>
				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					{#each course.features as feature}
						<div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
							<p class="text-zinc-600">{feature}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<!-- CTA -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.cta = true)}
	>
		{#if visible.cta}
			<div class="rounded-3xl bg-black px-8 py-12 text-center sm:py-16" in:fade={{ duration: 800 }}>
				<h2 class="text-3xl font-light tracking-tight text-white sm:text-4xl">
					Pronto a iniziare il tuo <span class="font-medium">percorso</span>?
				</h2>
				<p class="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
					Unisciti a noi e scopri il tuo potenziale attraverso il movimento.
				</p>
				<div class="mt-10 flex justify-center gap-6">
					<a
						href="/contatti"
						class="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:bg-zinc-100 hover:translate-y-[-2px]"
					>
						Prenota una lezione
					</a>
					<a
						href="/contatti"
						class="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:translate-y-[-2px]"
					>
						Contattaci
					</a>
				</div>
			</div>
		{/if}
	</section>
</div>