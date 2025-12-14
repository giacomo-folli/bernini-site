<script lang="ts">
	import { fade } from 'svelte/transition';

	export let videos: string[] = [];
	export let images: string[] = [];

	let selectedTab: 'videos' | 'images' = 'videos';
</script>

<div class="mt-16">
	<h2 class="text-xl font-medium text-black">Media Gallery</h2>

	<div class="mt-6">
		<div class="flex gap-4 border-b border-zinc-200">
			<button
				class="pb-4 text-sm font-medium {selectedTab === 'videos'
					? 'border-b-2 border-black text-black'
					: 'text-zinc-500 hover:text-black'}"
				on:click={() => (selectedTab = 'videos')}
			>
				Video
			</button>
			<button
				class="pb-4 text-sm font-medium {selectedTab === 'images'
					? 'border-b-2 border-black text-black'
					: 'text-zinc-500 hover:text-black'}"
				on:click={() => (selectedTab = 'images')}
			>
				Immagini
			</button>
		</div>

		{#if selectedTab === 'videos'}
			<div class="mt-6 grid gap-6 sm:grid-cols-2" in:fade>
				{#each videos as video}
					<div class="aspect-video overflow-hidden rounded-xl bg-zinc-100">
						<video src={video} controls class="h-full w-full object-cover">
							<track kind="captions" />
						</video>
					</div>
				{/each}
			</div>
		{:else}
			<div class="mt-6 grid gap-6 sm:grid-cols-2" in:fade>
				{#each images as image}
					<div class="aspect-video overflow-hidden rounded-xl bg-zinc-100">
						<img src={image} alt="Course preview" class="h-full w-full object-cover" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
