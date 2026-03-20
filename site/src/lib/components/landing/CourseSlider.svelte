<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';
	import { Images, Pages } from '$lib/enums';
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
			image: Images.MOVEMENT_CARD,
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

<section class="bg-surface-container-low py-32">
	<div class="mx-auto max-w-screen-2xl px-8">
		<div use:viewportAnimate={{ animation: 'slide-up' }} class="mb-20 max-w-3xl">
			<h2 class="mb-6 font-headline text-4xl md:text-5xl">Scegli il tuo percorso</h2>
			<p class="text-lg text-secondary">
				Scopri i nostri corsi progettati per aiutarti a sviluppare forza, agilità e consapevolezza
				del movimento.
			</p>
		</div>

		<div
			use:viewportAnimate={{ animation: 'stagger', threshold: 0.1 }}
			class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
		>
			{#each courses as course, i}
				<div
					class="hover:editorial-shadow group flex h-full flex-col rounded-xl border border-transparent bg-surface-container-lowest p-8 transition-all duration-500 hover:border-outline-variant/10"
				>
					<div class="mb-8 flex items-center justify-between">
						<span class="flex items-center gap-1 text-primary">
							<span
								class="material-symbols-outlined text-sm"
								style="font-variation-settings: 'FILL' 1;">star</span
							>
							<span class="font-label text-xs font-semibold">{course.rating}</span>
						</span>
						<span class="font-label text-[10px] uppercase tracking-widest text-secondary/60"
							>{course.duration}</span
						>
					</div>

					<h3 class="mb-4 font-headline text-2xl">{course.title}</h3>
					<p class="mb-8 flex-grow text-sm leading-relaxed text-secondary">
						{course.description}
					</p>

					<div class="flex items-center justify-between border-t border-outline-variant/10 pt-6">
						<span class="text-xs text-secondary/70"
							>{course.students} {course.students !== 'Limitato' ? 'studenti' : ''}</span
						>
						<a
							href="{Pages.COURSES}/{course.slug}"
							class="inline-flex items-center text-primary transition-transform hover:translate-x-1"
						>
							<span class="material-symbols-outlined">arrow_forward</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
