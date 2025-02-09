<script lang="ts">
	import { optimize } from '$lib/utils/image';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	type CitPart = { i: number; first: string; last: string };

	const citParts: CitPart[] = [
		{ i: 1, first: 'thoughts', last: 'words' },
		{ i: 2, first: 'words', last: 'actions' },
		{ i: 3, first: 'actions', last: 'habits' },
		{ i: 4, first: 'habits', last: 'character' },
		{ i: 5, first: 'character', last: 'destiny' }
	];

	let currentCitPart = citParts[0];
	onMount(() => {
		const interval = setInterval(() => {
			const newIndex = (currentCitPart.i + 1) % citParts.length;
			currentCitPart = citParts[newIndex];
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<section class="relative overflow-hidden">
	<!-- BACKGROUND -->
	<!-- <svg
		class="absolute lg:-mx-4"
		viewBox="0 0 1340 241"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.297923 241V0.17719H76.3291L141.007 190.427L205.341 0.17719H281.373V241H228.392V179.074C228.392 124.717 242.153 76.5524 260.387 37.3327V33.8924H243.185L168.53 241H113.141L38.4855 33.8924H21.2839V37.3327C39.5176 76.5524 53.2789 124.717 53.2789 179.074V241H0.297923ZM292.922 0.17719H347.967V241H292.922V0.17719ZM359.678 241V0.17719H433.989L534.446 203.156H551.648V199.716C531.35 161.528 521.029 130.91 521.029 98.2265V0.17719H574.01V241H500.731L397.865 33.8924H380.664V37.3327C398.897 65.5434 412.659 100.291 412.659 139.51V241H359.678ZM585.78 0.17719H640.825V241H585.78V0.17719ZM652.535 241V0.17719H728.566L793.245 190.427L857.579 0.17719H933.61V241H880.629V179.074C880.629 124.717 894.39 76.5524 912.624 37.3327V33.8924H895.422L820.767 241H765.378L690.723 33.8924H673.521V37.3327C691.755 76.5524 705.516 124.717 705.516 179.074V241H652.535ZM926.237 241L1009.49 0.17719H1087.93L1173.25 241H1116.83L1099.29 183.547H998.14L980.595 241H926.237ZM1012.93 140.198H1084.15L1058.69 68.6397C1055.25 59.0068 1054.56 47.3097 1056.63 35.2685H1039.42C1041.49 47.3097 1041.14 59.0068 1037.7 68.6397L1012.93 140.198ZM1166.12 241V0.17719H1220.83V196.276H1339.86V241H1166.12Z"
			fill="#eee"
		></path>
	</svg> -->
	<!-- FINE BACKGROUND -->

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

		<div class="mt-12 grid h-full grid-cols-1 gap-2 text-pretty text-base text-zinc-500">
			<div>
				<!-- <img
					height="auto"
					width="100%"
					src="https://bernini.vercel.app/images/images/park-session-1.jpeg"
					alt="placeholder"
					class="object-cover"
				/> -->

				{optimize('/images/images/park-session-1.jpeg')}
				<img
					class="object-cover"
					height="auto"
					width="100%"
					srcset={optimize('/images/images/park-session-1.jpeg')}
					sizes="(max-width: 640px) 640px,(max-width: 960px) 960px,1280px"
					alt="park-session"
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
