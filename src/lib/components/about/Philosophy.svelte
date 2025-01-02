<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Belief } from '$lib/types/about';

	const beliefs: Belief[] = [
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

<section>
	<div class="py-4 sm:py-8 md:py-12">
		<h2
			class="mb-12 mt-10 text-2xl font-light tracking-tighter text-black sm:mb-4 sm:mt-3 sm:text-3xl"
		>
			La mia filosofia
		</h2>

		<div class="mt-4 grid gap-4 sm:mt-6 sm:gap-8">
			{#each beliefs as belief, i}
				<div
					class="rounded-2xl bg-white p-6 ring-1 ring-zinc-200 transition-all duration-300 hover:ring-2 hover:ring-black"
					in:fade={{ delay: i * 150 }}
				>
					<h3 class="text-base font-medium text-black sm:text-lg">{belief.title}</h3>
					<p class="mt-1 text-pretty text-sm text-zinc-600">{belief.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
