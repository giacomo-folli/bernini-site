<script lang="ts">
	import { Pages } from '$lib/enums';
</script>

<section class="h-full justify-between rounded-3xl bg-white p-8 lg:col-span-1">
	<div class="flex h-full flex-col justify-between">
		<div>
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
				<p class="text-lg text-black lg:text-xl">Prenota un incontro</p>
			</div>
			<p class="mt-4 text-xs text-zinc-500">
				Se non sei sicuro, ci possiamo sentire come vuoi/dove vuoi per chiarire tutti i tuoi dubbi e
				capire se il mio servizio fa per te.
			</p>
		</div>
		<div class="mt-4 flex flex-col">
			<a
				href={Pages.CALENDAR}
				class="flex h-10 items-center justify-between rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-500 shadow-zinc-500/5 ring-offset-zinc-200 transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
			>
				Prenota
				<span>&rarr;</span>
			</a>
		</div>
		<div class="mt-4 flex flex-col border-t border-zinc-200 pt-4">
			<p class="text-xs text-zinc-400">( Europe/Roma ) Time</p>
		</div>
	</div>
</section>
