<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import Seo from '$lib/components/global/Seo.svelte';

	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import { journey, values } from '$lib/data/about.json';
</script>

<Seo
	title="Chi Sono | Francesco Bernini"
	description="Scopri la storia e la filosofia di Francesco Bernini, personal coach specializzato in movimento naturale."
/>

<div class="py-16">
	<!-- Hero Section -->
	<section class="relative">
		<div
			class="text-center"
			style="opacity: 1; transform: none;"
			use:viewportAnimate={{ animation: 'slide-up' }}
		>
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>La mia storia</span
			>
			<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
				Movimento è <span class="font-medium">vita</span>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 lg:text-lg">
				Da sempre appassionato di movimento e sport, ho dedicato la mia vita a esplorare e
				comprendere le infinite possibilità del corpo umano.
			</p>
		</div>

		<div
			class="mt-16 aspect-[2/1] w-full overflow-hidden rounded-3xl bg-zinc-100"
			use:viewportAnimate={{ animation: 'slide-up', delay: 180 }}
		>
			<img
				use:viewportAnimate={{ animation: 'fade' }}
				src="/images/images/park-session-2.jpeg"
				alt="Francesco durante una sessione di allenamento"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
		</div>
	</section>

	<!-- Journey Section -->
	<section class="mt-24">
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<span
					class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
					>Il mio percorso</span
				>
				<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
					La mia <span class="font-medium">formazione</span>
				</h2>
				<p class="mt-4 text-base leading-relaxed text-zinc-600">
					Nell'ultimo decennio mi sono dedicato allo studio del movimento umano, imparando da
					maestri di diverse discipline e sviluppando un approccio unico all'allenamento.
				</p>
			</div>

			<div class="space-y-8">
				{#each journey as { year, title, description }, i}
					<div
						class="journey-item rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200"
						use:viewportAnimate={{ animation: 'scale', delay: 100 * i }}
					>
						<div class="flex items-baseline justify-between">
							<h3 class="text-lg font-medium text-black">{title}</h3>
							<span class="text-sm text-zinc-500">{year}</span>
						</div>
						<p class="mt-2 text-sm text-zinc-600">{description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Values Section -->
	<section class="mt-24" use:viewportAnimate={{ animation: 'scale' }}>
		<div class="text-center">
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>I miei valori</span
			>
			<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
				La mia <span class="font-medium">filosofia</span>
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each values as { title, description }}
				<div class="value-item rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
					<h3 class="text-lg font-medium text-black">{title}</h3>
					<p class="mt-2 text-sm text-zinc-600">{description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Gallery Section -->
	<section class="mt-24" use:viewportAnimate={{ animation: 'scale' }}>
		<div class="text-center">
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Galleria</span
			>
			<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl">
				Il movimento in <span class="font-medium">azione</span>
			</h2>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each [1, 2, 3] as i}
				<div
					class="gallery-item group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100"
				>
					<img
						src="/images/images/park-session-{i}.jpeg"
						alt="Sessione di allenamento"
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="mt-24">
		<Cta />
	</section>
</div>
