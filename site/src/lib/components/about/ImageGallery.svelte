<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { GalleryImage } from '$lib/types/about';

	const images: GalleryImage[] = [
		{
			src: '/profile.jpg',
			alt: 'Francesco durante una sessione di allenamento',
			caption: 'In movimento'
		},
		{
			src: '/parkour.jpg',
			alt: 'Dimostrazione di parkour',
			caption: 'Esplorando lo spazio'
		},
		{
			src: '/capacity.jpg',
			alt: 'Allenamento di forza',
			caption: 'Costruendo forza'
		}
	];
</script>

<section class="mt-12 rounded-3xl bg-white">
	<div class="p-0 sm:p-4">
		<div class="grid gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
			{#each images as image, i}
				<div
					class="group relative aspect-square overflow-hidden rounded-2xl bg-black/5 sm:rounded-2xl"
					in:fade={{ delay: i * 150, duration: 300 }}
				>
					<img
						src={image.src}
						alt={image.alt}
						class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100 sm:p-6"
					>
						<p class="text-sm font-medium text-white">{image.caption}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
