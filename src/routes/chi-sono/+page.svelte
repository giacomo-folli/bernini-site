<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { inView } from '$lib/actions/intersectionObserver';
	import Cta from '$lib/components/global/Cta.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	let visible = {
		hero: false,
		journey: false,
		values: false,
		gallery: false
	};

	const journey = [
		{
			year: '2014',
			title: 'Inizio del viaggio',
			description:
				'Ho iniziato il mio percorso nel mondo del movimento, esplorando diverse discipline dalla break dance al parkour.'
		},
		{
			year: '2016',
			title: 'Prima certificazione',
			description:
				'Ho ottenuto la mia prima certificazione come istruttore, iniziando a condividere la mia passione con gli altri.'
		},
		{
			year: '2018',
			title: 'Apertura studio',
			description:
				"Ho aperto il mio studio personale, creando uno spazio dedicato all'esplorazione del movimento naturale."
		},
		{
			year: '2020',
			title: 'Espansione online',
			description:
				'Ho ampliato la mia presenza online, raggiungendo e aiutando più persone a trasformare il loro approccio al movimento.'
		}
	];

	const values = [
		{
			title: 'Movimento Naturale',
			description:
				'Credo che il nostro corpo sia progettato per muoversi liberamente. Il movimento naturale è la chiave per una vita sana e attiva.'
		},
		{
			title: 'Approccio Olistico',
			description:
				"Non si tratta solo di forza fisica, ma di un equilibrio tra corpo, mente e spirito. Ogni sessione è un'opportunità di crescita completa."
		},
		{
			title: 'Progressione Graduale',
			description:
				'Ogni persona ha il suo ritmo di apprendimento. Rispetto questo processo, guidando ciascuno verso i propri obiettivi con pazienza.'
		}
	];
</script>

<Seo
	title="Chi Sono | Francesco Bernini"
	description="Scopri la storia e la filosofia di Francesco Bernini, personal coach specializzato in movimento naturale."
/>

<div class="py-16">
	<!-- Hero Section -->
	<section
		class="relative"
		use:inView
		on:enter={() => (visible.hero = true)}
	>
		{#if visible.hero}
			<div class="text-center" in:fly={{ y: 20, duration: 800 }}>
				<span
					class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
					>La mia storia</span
				>
				<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
					Movimento è <span class="font-medium">vita</span>
				</h1>
				<p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 lg:text-lg">
					Da sempre appassionato di movimento e sport, ho dedicato la mia vita a esplorare e comprendere
					le infinite possibilità del corpo umano.
				</p>
			</div>

			<div
				class="mt-16 aspect-[2/1] w-full overflow-hidden rounded-3xl bg-zinc-100"
				in:fade={{ duration: 800, delay: 200 }}
			>
				<img
					src="/images/images/park-session-2.jpeg"
					alt="Francesco durante una sessione di allenamento"
					class="h-full w-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
			</div>
		{/if}
	</section>

	<!-- Journey Section -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.journey = true)}
	>
		{#if visible.journey}
			<div class="grid gap-12 lg:grid-cols-2">
				<div in:fly={{ y: 20, duration: 800 }}>
					<span
						class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
						>Il mio percorso</span
					>
					<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
						La mia <span class="font-medium">formazione</span>
					</h2>
					<p class="mt-4 text-base leading-relaxed text-zinc-600">
						Nell'ultimo decennio mi sono dedicato allo studio del movimento umano, imparando da maestri
						di diverse discipline e sviluppando un approccio unico all'allenamento.
					</p>
				</div>

				<div class="space-y-8" in:fade={{ duration: 800, delay: 200 }}>
					{#each journey as { year, title, description }}
						<div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
							<div class="flex items-baseline justify-between">
								<h3 class="text-lg font-medium text-black">{title}</h3>
								<span class="text-sm text-zinc-500">{year}</span>
							</div>
							<p class="mt-2 text-sm text-zinc-600">{description}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<!-- Values Section -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.values = true)}
	>
		{#if visible.values}
			<div class="text-center" in:fly={{ y: 20, duration: 800 }}>
				<span
					class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
					>I miei valori</span
				>
				<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
					La mia <span class="font-medium">filosofia</span>
				</h2>
			</div>

			<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each values as { title, description }, i}
					<div
						class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200"
						in:fade={{ duration: 300, delay: 200 + i * 100 }}
					>
						<h3 class="text-lg font-medium text-black">{title}</h3>
						<p class="mt-2 text-sm text-zinc-600">{description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</section>

	<!-- Gallery Section -->
	<section
		class="mt-24"
		use:inView
		on:enter={() => (visible.gallery = true)}
	>
		{#if visible.gallery}
			<div class="text-center" in:fly={{ y: 20, duration: 800 }}>
				<span
					class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
					>Galleria</span
				>
				<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
					Il movimento in <span class="font-medium">azione</span>
				</h2>
			</div>

			<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" in:fade={{ duration: 800, delay: 200 }}>
				{#each [1, 2, 3] as i}
					<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
						<img
							src="/images/images/park-session-{i}.jpeg"
							alt="Sessione di allenamento"
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
					</div>
				{/each}
			</div>
		{/if}
	</section>

	<!-- CTA Section -->
	<section class="mt-24">
		<Cta />
	</section>
</div>