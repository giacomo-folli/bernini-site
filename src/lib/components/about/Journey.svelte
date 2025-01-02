<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Milestone } from '$lib/types/about';

	const milestones: Milestone[] = [
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
</script>

<section class="my-12 rounded-2xl bg-white">
	<div class="p-4 sm:p-8 md:p-12">
		<h2 class="text-2xl font-light tracking-tighter text-black sm:text-3xl">Il mio percorso</h2>
		<div class="mt-8 space-y-8 sm:mt-12">
			<ul class="list-outside list-none sm:list-disc">
				{#each milestones as milestone, i}
					<li in:slide={{ delay: i * 150 }}>
						<div class="flex items-baseline justify-between md:justify-start">
							<div class="flex items-baseline gap-1">
								<!-- <div class="h-2 w-2 rounded-full bg-black"></div> -->
								<h3 class="font-semibold text-black">{milestone.title}</h3>
							</div>

							<span class="ml-2 text-xs text-zinc-500">{milestone.year}</span>
						</div>
						<p class="mb-3 text-pretty text-sm text-zinc-600">{milestone.description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
