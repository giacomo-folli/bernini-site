<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import { Pages } from '$lib/enums';
	import Image from '../global/Image.svelte';
</script>

<section class="scroll-mt-12 overflow-hidden bg-surface py-32" id="about">
	<div class="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-24 px-8 lg:grid-cols-2">
		<div
			use:viewportAnimate={{ animation: 'fade', delay: 200 }}
			class="relative order-2 lg:order-1"
		>
			<div class="editorial-shadow aspect-[4/5] overflow-hidden rounded-2xl">
				<Image
					src="/images/images/park-session-2.jpeg"
					alt="Portrait of Francesco Bernini"
					class="h-full w-full object-cover"
				/>
			</div>
			<div
				class="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-surface-container-low"
			></div>
		</div>

		<div use:viewportAnimate={{ animation: 'slide-up', delay: 400 }} class="order-1 lg:order-2">
			<h2 class="mb-10 font-headline text-4xl leading-tight md:text-6xl">Movimento è vita.</h2>
			<div class="mb-12 space-y-6 text-lg leading-relaxed text-secondary">
				<p>
					Nell'ultimo decennio mi sono dedicato allo studio del movimento umano, imparando da
					maestri come <span class="italic">Will Brown</span>,
					<span class="italic">Nil Tiesner</span> e
					<span class="italic">Harry Williams</span>.
				</p>
				<p>
					Ho approfondito pratiche fisiche molto differenti come verticalismo, acrobatica, forza e
					flessibilità a corpo libero, parkour, e pratiche più interne come la respirazione e la
					relazione tra emozioni e movimento.
				</p>
			</div>
			<a
				href={Pages.ABOUT}
				class="inline-flex items-center gap-4 border-b-2 border-primary-fixed-dim pb-1 font-medium text-primary transition-all hover:gap-6"
			>
				Scopri di più
				<span class="material-symbols-outlined">east</span>
			</a>
		</div>
	</div>
</section>
