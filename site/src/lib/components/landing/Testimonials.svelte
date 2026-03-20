<script lang="ts">
	import { viewportAnimate } from '$lib/actions/viewportAnimation';

	let testimonialActive = 1;
	let testimonialSection: HTMLElement;

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

<section bind:this={testimonialSection} class="bg-surface-container-low py-32">
	<div class="mx-auto max-w-screen-xl px-8">
		<div
			class="editorial-shadow relative overflow-hidden rounded-3xl bg-surface-container-lowest p-12 md:p-20"
		>
			{#each testimonials as testimonial, i}
				{#if testimonialActive === i + 1}
					<div
						use:viewportAnimate={{ animation: 'slide-up' }}
						class="relative z-10 flex flex-col items-center gap-12 md:flex-row"
					>
						<div class="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-surface">
							<img
								class="h-full w-full object-cover"
								src={testimonial.image}
								alt={testimonial.author}
							/>
						</div>
						<div>
							<p class="mb-8 font-headline text-2xl italic leading-relaxed md:text-3xl">
								"{testimonial.text}"
							</p>
							<div>
								<h4 class="font-bold text-on-surface">{testimonial.author}</h4>
								<p class="text-sm text-primary">{testimonial.role}</p>
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<div
				use:viewportAnimate={{ animation: 'fade', delay: 300 }}
				class="relative z-20 mt-10 flex justify-center gap-4"
			>
				{#each testimonials as _, i}
					<button
						on:click={() => (testimonialActive = i + 1)}
						class="h-3 w-3 rounded-full transition-all {testimonialActive === i + 1
							? 'bg-primary'
							: 'hover:bg-outline bg-outline-variant'}"
					>
						<span class="sr-only">Testimonianza {i + 1}</span>
					</button>
				{/each}
			</div>

			<span
				class="material-symbols-outlined text-surface-container pointer-events-none absolute -bottom-10 -right-10 text-[200px] opacity-20"
				style="font-variation-settings: 'FILL' 1;"
			>
				format_quote
			</span>
		</div>
	</div>
</section>
