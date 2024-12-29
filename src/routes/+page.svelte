<script lang="ts">
	import Cta from '$lib/components/global/Cta.svelte';
	import AllScope from '$lib/components/landing/AllScope.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import ChiSono from '$lib/components/landing/ChiSono.svelte';
	import LogoCloud from '$lib/components/landing/LogoCloud.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
</script>

<div class="mx-auto max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8">
	<div class="mb-14 mt-14 lg:mt-24">
		<Hero />
	</div>
	<!-- <Work /> -->
	<ChiSono />
	<div class="my-8 lg:my-12">
		<LogoCloud />
	</div>

	<div class="my-4">
		<Testimonials />
	</div>

	<div class="my-12">
		<Cta />
	</div>

	<div class="w-full">
		<div class="mx-auto mt-4 flex w-fit flex-col gap-2 text-pretty text-sm text-zinc-500">
			<a class="text-sm font-semibold text-zinc-500" href="/come-funziona/#">
				<span class="underline underline-offset-2"> Vai ai corsi </span>
				<span>&rarr;</span></a
			>
		</div>
	</div>
</div>
