<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Image from '../global/Image.svelte';

	type CitPart = { i: number; first: string; last: string };
	type ImageUrl = { i: number; url: string };

	const citParts: CitPart[] = [
		{ i: 1, first: 'thoughts', last: 'words' },
		{ i: 2, first: 'words', last: 'actions' },
		{ i: 3, first: 'actions', last: 'habits' },
		{ i: 4, first: 'habits', last: 'character' },
		{ i: 5, first: 'character', last: 'destiny' }
	];

	const imageUrls: ImageUrl[] = [
		{ i: 1, url: '/images/images/park-session-1.jpeg' },
		{ i: 2, url: '/images/images/park-session-2.jpeg' },
		{ i: 3, url: '/images/images/park-session-3.jpeg' },
		{ i: 4, url: '/images/images/park-session-4.jpeg' },
		{ i: 5, url: '/images/images/park-session.jpeg' }
	];

	let currentCitPart = citParts[0];
	let currentImageUrl = imageUrls[0];
	onMount(() => {
		const interval = setInterval(() => {
			const newCitIndex = (currentCitPart.i + 1) % citParts.length;
			currentCitPart = citParts[newCitIndex];

			const newImageIndex = (currentImageUrl.i + 1) % imageUrls.length;
			currentImageUrl = imageUrls[newImageIndex];
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<section class="relative overflow-hidden">
	<div>
		<div>
			<!-- <SpotsCounter text="1-1 coaching spots available" /> -->
			<h2 class="mt-10 text-5xl font-normal tracking-tighter text-black">
				<!-- Forza &amp; equilibrio <span class="block">per un corpo e una mente sani.</span> -->
				Educazione al movimento per una vita <span class="font-medium underline">sana</span> e
				<span class="font-medium underline">attiva</span>.
			</h2>
		</div>

		<div class="mt-12 grid h-full max-w-xl grid-cols-1 gap-2 text-pretty text-base text-zinc-500">
			<div>
				<p>
					Sviluppa un corpo forte e intelligente, una mente presente e agile, con un approccio che
					tiene in considerazione la <span class="font-semibold">persona</span> nella sua interezza.
				</p>
			</div>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-2 overflow-hidden text-pretty text-base text-zinc-500">
			<div>
				<Image
					width="100%"
					height="415px"
					class="h-[415px] object-cover"
					src={currentImageUrl.url}
					alt="park session"
				/>
			</div>
		</div>

		<em class="mt-2 flex max-w-xl text-pretty text-sm text-zinc-500">
			<div class="flex-1">
				<p>
					“Watch your
					{#key currentCitPart.first}
						<span class="underline decoration-2 underline-offset-2" in:fade={{ duration: 1000 }}
							>{currentCitPart.first}</span
						>
					{/key}, they become your
					{#key currentCitPart.last}
						<span
							class="underline decoration-2 underline-offset-2"
							in:fade={{ delay: 200, duration: 1000 }}>{currentCitPart.last}</span
						>
					{/key}”
				</p>
			</div>
			<div>
				<span class="ml-auto italic opacity-85">- Lao Tzu.</span>
			</div>
		</em>
	</div>
</section>
