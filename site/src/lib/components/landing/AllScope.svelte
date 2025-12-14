<script lang="ts">
	import { features } from '../../data/features.json';
</script>

<section class="scroll-mt-24" id="services">
	<div class="py-4">
		<div
			class="rounded-4xl col-span-full inline-flex h-full w-full items-center text-black lg:col-span-2"
		>
			<h2 class="text-3xl font-light tracking-tighter">Che cosa offro.</h2>
		</div>

		<div class="mt-4 grid grid-cols-1 gap-px md:grid-cols-1">
			<div class="rounded-3xl bg-white p-8">
				<div class="divide-y divide-white/10">
					{#each features as feat}
						<div class="mt-2 flex flex-col justify-between gap-4 sm:flex-row lg:items-end">
							<p class="flex items-center gap-2 text-sm font-semibold leading-6 text-zinc-600">
								- {feat.title}:
							</p>
						</div>
						<p class="font-base ml-2.5 flex items-center gap-2 text-sm leading-6 text-zinc-600">
							{feat.description}
						</p>

						{#if feat.subLevels}
							<ol class="">
								{#each feat.subLevels as level}
									<li
										class="font-base ml-2.5 flex items-center gap-2 text-sm leading-6 text-zinc-600"
									>
										{level}
									</li>
								{/each}
							</ol>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
