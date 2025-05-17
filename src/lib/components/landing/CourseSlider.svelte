<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import Image from '../global/Image.svelte';

	const courses = [
		{
			title: 'Verticali',
			duration: '3 Mesi',
			rating: '5.0',
			students: '29',
			description:
				"Padroneggia l'arte di stare in verticale con un approccio tecnico e progressivo.",
			image: '/images/images/park-session-3.jpeg',
			slug: 'verticali'
		},
		{
			title: 'Movement',
			duration: '3 Mesi',
			rating: '5.0',
			students: '29',
			description:
				'Esplora il movimento naturale attraverso parkour, break dance e movimento libero.',
			image: '/images/images/park-session-4.jpeg',
			slug: 'movement'
		},
		{
			title: 'Parkour',
			duration: '3 Mesi',
			rating: '5.0',
			students: '29',
			description: 'Impara a muoverti con sicurezza e creatività in qualsiasi ambiente.',
			image: '/images/images/park-session-1.jpeg',
			slug: 'parkour'
		},
		{
			title: 'Custom',
			duration: '3 Mesi',
			rating: '5.0',
			students: '29',
			description: 'Programmi personalizzati basati sui tuoi obiettivi e necessità.',
			image: '/images/images/park-session-2.jpeg',
			slug: 'custom'
		}
	];
</script>

<section class="py-16">
	<div use:viewportAnimate={{ animation: 'slide-up' }} class="px-4 text-center sm:px-6 lg:px-0">
		<span
			class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
			>I nostri corsi</span
		>
		<h2 class="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
			Scegli il tuo <span class="font-medium">percorso</span>
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 lg:mt-6 lg:text-lg">
			Scopri i nostri corsi progettati per aiutarti a sviluppare forza, agilità e consapevolezza del
			movimento.
		</p>
	</div>

	<div class="relative mt-8 lg:mt-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				use:viewportAnimate={{ animation: 'stagger', threshold: 0.1 }}
				class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8"
			>
				{#each courses as course, i}
					<div
						class="course-card group relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-zinc-200 transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-6"
					>
						<div class="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
							<Image
								src={course.image}
								alt={course.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
						</div>

						<div class="mt-4 sm:mt-6">
							<div class="flex items-center justify-between">
								<h3 class="text-lg font-medium text-black sm:text-xl">{course.title}</h3>
								<div class="flex items-center gap-1 text-sm text-zinc-600">
									<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
									{course.rating}
								</div>
							</div>

							<div class="mt-2 flex items-center gap-4 text-sm text-zinc-600">
								<div class="flex items-center gap-1">
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									{course.duration}
								</div>
								<div class="flex items-center gap-1">
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									{course.students} studenti
								</div>
							</div>

							<p class="mt-3 line-clamp-2 text-sm text-zinc-600">{course.description}</p>

							<div class="mt-4 sm:mt-6">
								<a
									href="/corsi/{course.slug}"
									class="inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-zinc-800"
								>
									Scopri il corso
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
