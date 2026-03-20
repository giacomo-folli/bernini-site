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
	class="relative flex min-h-[100dvh] items-center overflow-hidden pb-12 pt-28 lg:pb-0"
>
	<div
		class="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-12 lg:px-8"
	>
		<div use:viewportAnimate={{ animation: 'slide-up' }} class="z-10 lg:col-span-6">
			<span class="mb-4 inline-block font-label text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs lg:mb-6"
				>Online Movement Training</span
			>
			<h1 class="mb-6 font-headline text-5xl leading-[1.1] text-on-surface sm:text-6xl md:text-7xl lg:mb-8 lg:text-[5.5rem] xl:text-8xl">
				Move Better.<br />Live Better.
			</h1>
			<p class="mb-8 max-w-xl text-base leading-relaxed text-secondary sm:text-lg md:text-xl lg:mb-12">
				Scopri il potenziale del tuo corpo attraverso il movimento naturale. Corsi online
				personalizzati per ogni livello.
			</p>
			<div class="flex flex-wrap gap-3 sm:gap-4">
				<a
					href={Pages.CALENDAR}
					class="editorial-shadow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-4 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 sm:px-8 sm:py-5 sm:text-base lg:px-10"
				>
					Vedi il calendario
				</a>
				<a
					href={Pages.CONTACTS}
					class="inline-flex items-center justify-center rounded-full border border-outline-variant/30 px-6 py-4 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low sm:px-8 sm:py-5 sm:text-base lg:px-10"
				>
					Contattami
				</a>
			</div>
		</div>

		<div class="relative mt-8 h-[50vh] min-h-[400px] lg:col-span-6 lg:mt-0 lg:h-[75vh] lg:min-h-[600px] lg:max-h-[800px]">
			<div
				bind:this={imageWrapper}
				use:viewportAnimate={{ animation: 'scale', delay: 200 }}
				class="absolute inset-0 overflow-hidden rounded-2xl bg-surface-container-low shadow-sm"
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
