<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	let testimonialActive = 1;

	const testimonials = [
		{
			text: 'Grazie a Francesco ho riscoperto la gioia di muovermi. Il suo approccio unico ha trasformato non solo il mio corpo, ma anche la mia mentalità.',
			author: 'Marco Zucchi',
			role: '@marco.z',
			image: 'https://placehold.co/100/000000/FFF'
		},
		{
			text: 'Le sessioni con Francesco sono sempre stimolanti e divertenti. Ho guadagnato forza, flessibilità e una nuova confidenza nei miei movimenti.',
			author: 'Giulia Santi',
			role: '@assereje',
			image: 'https://placehold.co/100/000000/FFF'
		}
	];
</script>

<section class="relative overflow-hidden py-16">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<span class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Testimonianze</span
			>
			{#each testimonials as testimonial, i}
				{#if testimonialActive === i + 1}
					<div
						in:fly={{ y: 20, duration: 800 }}
						out:fade={{ duration: 300 }}
						class="text-center"
					>
						<figure>
							<blockquote class="text-2xl font-light italic leading-relaxed text-black sm:text-3xl">
								<p>"{testimonial.text}"</p>
							</blockquote>
							<figcaption class="mt-10">
								<img
									class="mx-auto h-16 w-16 rounded-full object-cover"
									src={testimonial.image}
									alt={testimonial.author}
								/>
								<div class="mt-4">
									<div class="text-lg font-semibold text-black">{testimonial.author}</div>
									<div class="text-base text-zinc-600">{testimonial.role}</div>
								</div>
							</figcaption>
						</figure>
					</div>
				{/if}
			{/each}

			<div class="mt-10 flex justify-center gap-4">
				{#each testimonials as _, i}
					<button
						on:click={() => (testimonialActive = i + 1)}
						class="h-3 w-3 rounded-full transition-all {testimonialActive === i + 1
							? 'bg-black'
							: 'bg-zinc-200 hover:bg-zinc-300'}"
					>
						<span class="sr-only">Testimonianza {i + 1}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>