<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import { Images, Pages } from '$lib/enums';
	import Image from '../global/Image.svelte';

	let heroSection: HTMLElement;
	let imageWrapper: HTMLElement;

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section
	bind:this={heroSection}
	class="relative flex min-h-screen items-center overflow-hidden pt-24"
>
	<div
		class="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-12"
	>
		<div use:viewportAnimate={{ animation: 'slide-up' }} class="z-10 lg:col-span-6">
			<span class="mb-6 inline-block font-label text-xs uppercase tracking-[0.2em] text-primary"
				>Online Movement Training</span
			>
			<h1 class="mb-8 font-headline text-5xl leading-[1.1] text-on-surface md:text-7xl lg:text-8xl">
				Move Better.<br />Live Better.
			</h1>
			<p class="mb-12 max-w-xl text-lg leading-relaxed text-secondary md:text-xl">
				Scopri il potenziale del tuo corpo attraverso il movimento naturale. Corsi online
				personalizzati per ogni livello.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href={Pages.CALENDAR}
					class="editorial-shadow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container px-10 py-5 font-medium text-on-primary transition-opacity hover:opacity-90"
				>
					Vedi il calendario
				</a>
				<a
					href={Pages.CONTACTS}
					class="inline-flex items-center justify-center rounded-full border border-outline-variant/30 px-10 py-5 font-medium text-on-surface transition-colors hover:bg-surface-container-low"
				>
					Contattami
				</a>
			</div>
		</div>

		<div class="relative mt-12 h-[600px] lg:col-span-6 lg:mt-0 lg:h-[800px]">
			<div
				bind:this={imageWrapper}
				use:viewportAnimate={{ animation: 'scale', delay: 200 }}
				class="absolute inset-0 overflow-hidden rounded-2xl bg-surface-container-low"
			>
				<Image
					src={Images.HERO_HOME}
					alt="Movement training"
					class="h-full w-full object-cover object-bottom"
				/>
			</div>
			<!-- Decorative element -->
			<div
				class="absolute -bottom-6 -left-6 h-48 w-48 rounded-full bg-primary-fixed/20 blur-3xl"
			></div>
		</div>
	</div>
</section>
