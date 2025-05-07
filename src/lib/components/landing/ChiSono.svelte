<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Image from '../global/Image.svelte';
	import { inView, type InViewEventDetail } from '$lib/actions/intersectionObserver';
	
	let visible = false;

	function handleEnter(e: CustomEvent<InViewEventDetail>) {
		visible = true;
	}
</script>

<section 
  class="scroll-mt-12 py-16" 
  id="about"
  use:inView={{ threshold: 0.1 }}
  on:enter={handleEnter}
>
	{#if visible}
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
			<div class="px-4 sm:px-6 lg:px-0" in:fly={{ y: 20, duration: 800, delay: 200 }}>
				<span class="mb-4 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 lg:mb-6"
					>La mia storia</span
				>
				<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
					Movimento è <span class="font-medium">vita.</span>
				</h2>
				<div class="mt-4 flex flex-col gap-4 text-pretty text-base text-zinc-600 lg:mt-6">
					<p>
						Nell'ultimo decennio mi sono dedicato allo studio del movimento umano, imparando da maestri
						come <span class="font-medium italic"> Will Brown</span>,
						<span class="font-medium italic"> Nil Tiesner </span> e
						<span class="font-medium italic">Harry Williams</span>.
					</p>
					<p>
						Ho approfondito pratiche fisiche molto differenti come verticalismo, acrobatica, forza e
						flessibilità a corpo libero, parkour, e pratiche più interne come la respirazione e la
						relazione tra emozioni e movimento.
					</p>
				</div>
				<div class="mt-6 lg:mt-8">
					<a
						href="/chi-sono"
						class="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:border-black hover:shadow-lg"
					>
						Scopri di più
					</a>
				</div>
			</div>

			<div
				in:fade={{ duration: 800, delay: 400 }}
				class="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-zinc-100 sm:aspect-[2/1] sm:rounded-3xl lg:aspect-auto lg:h-[600px]"
			>
				<Image
					src="/images/images/park-session-2.jpeg"
					alt="Movement training"
					class="h-full w-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
			</div>
		</div>
	{/if}
</section>