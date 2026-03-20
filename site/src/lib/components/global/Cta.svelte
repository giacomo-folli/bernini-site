<script>
	import { Pages } from '$lib/enums';
</script>

<section class="py-32">
	<div class="mx-auto max-w-screen-2xl px-8">
		<div
			class="relative overflow-hidden rounded-[40px] bg-on-surface px-12 py-24 text-center text-surface md:px-24"
		>
			<!-- Background aesthetic -->
			<div class="absolute left-0 top-0 h-full w-full opacity-10">
				<div
					class="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-container blur-[100px]"
				></div>
				<div
					class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary blur-[100px]"
				></div>
			</div>

			<div class="relative z-10 mx-auto max-w-2xl">
				<span
					class="mb-6 inline-block font-label text-xs uppercase tracking-[0.4em] text-primary-fixed-dim"
				>
					Inizia oggi
				</span>
				<h2 class="mb-8 font-headline text-4xl md:text-6xl">Pronto a iniziare il tuo viaggio?</h2>
				<p class="mb-12 text-lg text-surface-variant/80">
					Unisciti a una community di persone appassionate che stanno trasformando il loro modo di
					muoversi e vivere.
				</p>

				<div class="flex flex-wrap justify-center gap-6">
					<a
						href={Pages.CLASSES}
						class="rounded-full bg-primary px-10 py-5 font-medium text-on-primary transition-all hover:bg-primary-container"
					>
						Scopri i corsi
					</a>
					<a
						href={Pages.CONTACTS}
						class="rounded-full border border-surface-variant/20 px-10 py-5 font-medium text-surface transition-all hover:bg-surface/10"
					>
						Contattami
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
