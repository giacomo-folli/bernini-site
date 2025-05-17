<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import Seo from '$lib/components/global/Seo.svelte';
	import MediaGallery from '$lib/components/training/MediaGallery.svelte';
	import { courses } from '$lib/data/courses.json';
	import { Pages } from '$lib/enums';

	// @ts-ignore
	$: course = courses[$page.params.slug];
</script>

<Seo title="{course.title} | Francesco Bernini" description={course.description} />

<div class="py-16">
	<!-- Hero Section -->
	<section class="relative">
		<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
			<div class="order-2 lg:order-1" in:fly={{ y: 20, duration: 800 }}>
				<span
					class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
					>Corso</span
				>
				<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl">
					{course.title}
					<span class="block font-medium">{course.subtitle}</span>
				</h1>
				<p class="mt-6 text-base leading-relaxed text-zinc-600 lg:text-lg">
					{course.description}
				</p>

				<div class="mt-6 flex flex-wrap gap-6 text-sm text-zinc-600">
					<div class="flex items-center gap-2">
						<span class="font-medium text-black">Durata:</span>
						{course.duration}
					</div>
					<div class="flex items-center gap-2">
						<span class="font-medium text-black">Prezzo:</span>
						€{course.price} / lezione
					</div>
					<div class="flex items-center gap-2">
						<span class="font-medium text-black">Frequenza:</span>
						{course.schedule}
					</div>
				</div>

				<div class="mt-6">
					<span class="font-medium text-black">Requisiti:</span>
					<ul class="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600">
						{#each course.requirements as requirement}
							<li>{requirement}</li>
						{/each}
					</ul>
				</div>

				<div class="mt-8 flex flex-col gap-4 sm:flex-row">
					<a
						href={Pages.CALENDAR}
						class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-zinc-800"
					>
						Vedi il calendario
					</a>
					<a
						href={Pages.CONTACTS}
						class="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:translate-y-[-2px] hover:bg-black hover:text-white"
					>
						Contattami
					</a>
				</div>
			</div>

			<div class="order-1 lg:order-2" in:fade={{ duration: 800, delay: 200 }}>
				<div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-100">
					<img src={course.image} alt={course.title} class="h-full w-full object-cover" />
					<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section class="mt-24">
		<div in:fly={{ y: 20, duration: 800 }}>
			<h2 class="text-2xl font-light tracking-tight text-black sm:text-3xl">
				Cosa <span class="font-medium">imparerai</span>
			</h2>
			<div class="mt-8 grid gap-4 sm:grid-cols-2">
				{#each course.features as feature}
					<div class="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
						<p class="text-zinc-600">{feature}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Media Gallery -->
	<section class="mt-24">
		<div in:fly={{ y: 20, duration: 800 }}>
			<MediaGallery videos={course.videos} images={course.images} />
		</div>
	</section>

	<!-- CTA -->
	<section class="mt-24">
		<div class="rounded-3xl bg-black px-8 py-12 text-center sm:py-16" in:fade={{ duration: 800 }}>
			<h2 class="text-3xl font-light tracking-tight text-white sm:text-4xl">
				Pronto a iniziare il tuo <span class="font-medium">percorso</span>?
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
				Unisciti a noi e scopri il tuo potenziale attraverso il movimento.
			</p>
			<div class="mt-10 flex justify-center gap-6">
				<a
					href={Pages.CALENDAR}
					class="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-zinc-100"
				>
					Vedi il calendario
				</a>
				<a
					href={Pages.CONTACTS}
					class="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-white/10"
				>
					Contattaci
				</a>
			</div>
		</div>
	</section>
</div>
