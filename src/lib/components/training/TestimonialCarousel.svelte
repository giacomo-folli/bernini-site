<script lang="ts">
	let currentTestimonial = 0;
	const testimonials = [
		{
			text: 'Le lezioni con Francesco sono sempre stimolanti. Ho imparato tanto in poco tempo e mi sono divertito molto!',
			author: 'Marco R.',
			role: 'Studente di Break Dance'
		},
		{
			text: 'Un approccio professionale ma allo stesso tempo amichevole. Francesco sa come motivare e spingere oltre i propri limiti.',
			author: 'Laura M.',
			role: 'Atleta'
		}
	];
</script>

<div class="mt-16">
	<h2 class="text-xl font-medium text-black">Cosa dicono gli studenti</h2>
	<div class="relative mt-6 overflow-hidden">
		<div
			class="flex transition-transform duration-300"
			style="transform: translateX(-{currentTestimonial * 100}%)"
		>
			{#each testimonials as testimonial}
				<div class="w-full flex-none px-4">
					<blockquote class="rounded-3xl bg-zinc-50 p-6">
						<p class="text-sm text-zinc-600">"{testimonial.text}"</p>
						<footer class="mt-4">
							<p class="font-medium text-black">{testimonial.author}</p>
							<p class="text-sm text-zinc-500">{testimonial.role}</p>
						</footer>
					</blockquote>
				</div>
			{/each}
		</div>

		<div class="mt-6 flex justify-center gap-2">
			{#each testimonials as _, i}
				<button
					class="h-2 w-2 rounded-full {currentTestimonial === i
						? 'bg-black'
						: 'bg-zinc-200'}"
					on:click={() => (currentTestimonial = i)}
				>
					<span class="sr-only">Testimonianza {i + 1}</span>
				</button>
			{/each}
		</div>
	</div>
</div>