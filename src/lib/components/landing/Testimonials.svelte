<script lang="ts">
	let testimonialActive: number = 1;
</script>

<div class="z-10 h-full" id="testimonials">
	<div class="mx-auto max-w-xl pb-6">
		<div>
			{#if testimonialActive === 1}
				<p
					class="mx-auto flex items-center gap-2 text-balance text-center text-base font-medium leading-6 text-zinc-500"
				>
					Grazie a Francesco ho riscoperto la gioia di muovermi. Il suo approccio unico ha
					trasformato non solo il mio corpo, ma anche la mia mentalità.
				</p>
			{/if}
		</div>
		<div>
			{#if testimonialActive === 2}
				<p
					class="mx-auto flex items-center gap-2 text-balance text-center text-base font-medium leading-6 text-zinc-500"
				>
					Le sessioni con Francesco sono sempre stimolanti e divertenti. Ho guadagnato forza,
					flessibilità e una nuova confidenza nei miei movimenti.
				</p>
			{/if}
		</div>
	</div>

	<div class="mt-6 flex items-center justify-center lg:my-4">
		<button
			on:click={() => (testimonialActive = 1)}
			class="shadow-xs bg-gradientdown mx-2 inline-block size-12 rounded-full text-center font-bold opacity-50 focus:outline-none focus:ring-2 {testimonialActive ===
			1
				? 'bg-gradientdown text-white opacity-100'
				: 'bg-gradientdown size-12 opacity-50 '}"
			><img
				class="inline-block h-12 w-12 rounded-full border grayscale"
				src="/person.jpg"
				alt="#"
			/></button
		><button
			on:click={() => (testimonialActive = 2)}
			class="shadow-xs bg-gradientdown mx-2 inline-block rounded-full text-center font-bold text-white opacity-100 focus:outline-none focus:ring-2 {testimonialActive ===
			2
				? 'bg-gradientdown text-white opacity-100'
				: 'bg-gradientdown size-12 opacity-50 '}"
			><img
				class="inline-block h-12 w-12 rounded-full border grayscale"
				src="/person.jpg"
				alt="@paco.folli on twitter"
			/></button
		>
	</div>

	<div class="flex justify-center px-4 pt-4">
		<div class="text-center">
			{#if testimonialActive === 1}
				<h2 class="text-sm font-medium text-zinc-500 lg:text-base">Marco Zucchi</h2>
				<a href="#testimonials" class="text-xs text-zinc-500">@marco.z</a>
			{/if}
		</div>
		<div class="text-center">
			{#if testimonialActive === 2}
				<h2 class="text-sm font-medium text-zinc-500 lg:text-base">Giulia Santi</h2>
				<a href="#testimonials" class="text-xs text-zinc-500">@assereje</a>
			{/if}
		</div>
	</div>
</div>
