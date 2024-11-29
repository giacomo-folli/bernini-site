<script lang="ts">
	import { slide } from 'svelte/transition';

	let selected: number | undefined = undefined;
</script>

<section class="scroll-mt-24" id="faq">
	<div class="mx-auto max-w-2xl px-8 py-12 md:px-12">
		<div class="">
			<h2 class="text-3xl font-light tracking-tighter text-black lg:text-4xl">Domande frequenti</h2>
			<p class="mt-5 text-black">
				Non sei soddisfatto/a? Sentiamoci via <a
					class="text-blue-400 duration-200 hover:text-black"
					href="mailto:email@difrancesco.com">email</a
				>, sarò felice di chiarire qualsiasi dubibo.
			</p>
		</div>
		<div>
			<ul
				class="mt-8 list-none divide-y divide-zinc-200 rounded-3xl bg-white text-black"
				role="list"
			>
				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 1 ? 1 : undefined)}
						type="button"
					>
						<div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Che tipo di risultati posso aspettarmi dal tuo programma di allenamento?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								1
									? ' rotate-180'
									: ' rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path></svg
							>
						</div>
					</button>
					{#if selected === 1}
						<div transition:slide id="container1">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								I risultati variano da persona a persona, ma in generale puoi aspettarti un
								miglioramento significativo della forza, flessibilità, equilibrio e consapevolezza
								corporea. Molti clienti riportano anche un aumento dell'energia, una postura
								migliore e una maggiore fiducia nei propri movimenti quotidiani.
							</div>
						</div>
					{/if}
				</li>
				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 2 ? 2 : undefined)}
						type="button"
					>
						<div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Devo avere esperienza pregressa con discipline come yoga o parkour per partecipare
								ai tuoi allenamenti?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								2
									? ' rotate-180'
									: ' rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path>
							</svg>
						</div>
					</button>
					{#if selected === 2}
						<div transition:slide id="container2">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								Assolutamente no! Il mio approccio è adatto a tutti i livelli di esperienza, dal
								principiante assoluto all'atleta avanzato. Ogni programma è personalizzato in base
								al tuo livello di partenza e ai tuoi obiettivi specifici.
							</div>
						</div>
					{/if}
				</li>
				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 3 ? 3 : undefined)}
						type="button"
						><div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Con che frequenza dovrei allenarmi per vedere dei risultati?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								3
									? 'rotate-180'
									: 'rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path></svg
							>
						</div>
					</button>
					{#if selected === 3}
						<div transition:slide id="container2">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								La frequenza ideale dipende dai tuoi obiettivi e dal tuo stile di vita.
								Generalmente, raccomando da 2 a 4 sessioni a settimana per ottenere risultati
								ottimali. Durante la nostra valutazione iniziale, stabiliremo insieme un piano che
								si adatti perfettamente alle tue esigenze e al tuo programma.
							</div>
						</div>
					{/if}
				</li>
				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 4 ? 4 : undefined)}
						type="button"
						><div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Offri sessioni online o solo in presenza?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								4
									? 'rotate-180'
									: 'rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path></svg
							>
						</div></button
					>
					<!-- x-bind:style="selected == 4 ? 'max-height: ' + $refs.container2.scrollHeight + 'px' : ''" -->
					{#if selected === 4}
						<div transition:slide id="container4">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								Offro entrambe le opzioni! Le sessioni in presenza sono ideali per un feedback
								immediato e correzioni pratiche, ma le sessioni online sono una grande alternativa
								per chi ha un programma fitto o vive lontano. Entrambe le modalità sono efficaci e
								personalizzate.
							</div>
						</div>
					{/if}
				</li>
				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 5 ? 5 : undefined)}
						type="button"
						><div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Quanto dura in media un programma di allenamento?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								5
									? 'rotate-180'
									: 'rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path></svg
							>
						</div></button
					>
					<!-- x-bind:style="selected == 5 ? 'max-height: ' + $refs.container2.scrollHeight + 'px' : ''" -->
					{#if selected === 5}
						<div transition:slide id="container2">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								La durata del programma varia in base ai tuoi obiettivi. Solitamente, i programmi
								iniziali durano da 8 a 12 settimane, tempo sufficiente per vedere cambiamenti
								significativi. Molti clienti scelgono di continuare oltre questo periodo per
								raggiungere obiettivi più avanzati o mantenere i risultati ottenuti.
							</div>
						</div>
					{/if}
				</li>

				<li class="relative">
					<button
						class="w-full p-4 text-left"
						on:click={() => (selected = selected !== 7 ? 7 : undefined)}
						type="button"
						><div class="flex items-center justify-between text-black">
							<p class="text-lg tracking-tight text-black">
								Il tuo approccio è adatto a persone con limitazioni fisiche o problemi di salute?
							</p>
							<svg
								class="ml-4 inline h-5 w-5 rotate-180 transform transition-transform duration-200 {selected ===
								7
									? 'rotate-180'
									: 'rotate-0'}"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								></path></svg
							>
						</div>
					</button>
					{#if selected === 7}
						<div transition:slide id="container2">
							<div class="p-8 pb-6 pt-0 text-sm text-zinc-500">
								Sì, il mio approccio può essere adattato a varie condizioni fisiche. Prima di
								iniziare, discuteremo dettagliatamente di eventuali limitazioni o problemi di
								salute. In alcuni casi, potrei richiedere l'autorizzazione del tuo medico. La
								sicurezza è sempre la mia priorità principale, e lavoreremo insieme per creare un
								programma che sia sia efficace che sicuro per te.
							</div>
						</div>
					{/if}
				</li>
			</ul>
		</div>
	</div>
</section>
