<script lang="ts">
	import HeaderChip from '../global/HeaderChip.svelte';
</script>

<section class="my-12">
	<div class=" md:py-12">
		<!-- <div in:fade={{ duration: 300, delay: 150 }}> -->
		<div>
			<div class="hidden sm:block">
				<HeaderChip text="Personal Coach & Movement Specialist" />
			</div>
			<h1 class="mt-8 text-4xl font-normal tracking-tighter text-black sm:mt-12 sm:text-5xl">
				La mia storia.
			</h1>
		</div>

		<div class="mt-8 grid h-fit grid-cols-1 gap-4 text-base text-zinc-500 sm:mt-12">
			<!-- in:fade={{ duration: 300, delay: 300 }} -->
			<p class="text-pretty">
				Da sempre appassionato di movimento e sport, ho dedicato la mia vita a esplorare e
				comprendere le infinite possibilità del corpo umano.
			</p>
			<p class="text-pretty">
				La mia missione è condividere questa passione, aiutando le persone a riscoprire la gioia del
				movimento naturale attraverso un approccio olistico e personalizzato.
			</p>
		</div>
	</div>
</section>
