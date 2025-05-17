<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
	import Map from '$lib/components/contact/Map.svelte';
	import Newsletter from '$lib/components/contact/Newsletter.svelte';
	import Seo from '$lib/components/global/Seo.svelte';
	import { scrollAnimate } from '$lib/actions/scrollAnimation';
</script>

<Seo
	title="Contatti | Francesco Bernini - Personal Coach"
	description="Contatta Francesco Bernini per informazioni su lezioni private, corsi di gruppo o collaborazioni."
/>

<div class="py-16">
	<!-- Hero Section -->
	<section class="relative">
		<div
			class="text-center"
			style="opacity: 1; transform: none;"
			use:scrollAnimate={{ animation: 'slide-up', delay: 0, threshold: 0, immediate: true }}
		>
			<span
				class="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800"
				>Parliamo</span
			>
			<h1 class="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
				Iniziamo il tuo <span class="font-medium">viaggio</span>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 lg:text-lg">
				Hai domande? Sono qui per aiutarti a iniziare il tuo percorso verso un movimento migliore.
				Contattami per una consulenza gratuita.
			</p>
		</div>
	</section>

	<!-- Contact Info Section -->
	<section class="mt-16">
		<div class="grid gap-8 lg:grid-cols-2">
			<div
				class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-200 sm:p-12"
				use:scrollAnimate={{ animation: 'scale', delay: 0.1, duration: 1600 }}
			>
				<h2 class="text-2xl font-light tracking-tight text-black">
					Dove mi puoi <span class="font-medium">trovare</span>
				</h2>
				<div class="mt-8">
					<ContactInfo />
				</div>

				<div
					class="mt-12 space-y-8"
					use:scrollAnimate={{
						animation: 'stagger',
						duration: 1600,
						delay: 0.3
					}}
				>
					<div class="info-item">
						<h3 class="text-lg font-medium text-black">Orari</h3>
						<dl class="mt-4 space-y-2">
							<div class="flex justify-between text-sm">
								<dt class="text-zinc-600">Lunedì - Venerdì</dt>
								<dd class="text-black">9:00 - 20:00</dd>
							</div>
							<div class="flex justify-between text-sm">
								<dt class="text-zinc-600">Sabato</dt>
								<dd class="text-black">10:00 - 16:00</dd>
							</div>
							<div class="flex justify-between text-sm">
								<dt class="text-zinc-600">Domenica</dt>
								<dd class="text-black">Chiuso</dd>
							</div>
						</dl>
					</div>

					<div class="info-item">
						<h3 class="text-lg font-medium text-black">Social</h3>
						<div class="mt-4">
							<a
								href="https://instagram.com/francescobernini7"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
								@francesco.bernini
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-200 sm:p-12"
				use:scrollAnimate={{ animation: 'scale', delay: 0.2, duration: 1800 }}
			>
				<Map />
			</div>
		</div>
	</section>

	<!-- Contact Form Section -->
	<section id="form" class="mt-16">
		<div
			class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-200 sm:p-12"
			use:scrollAnimate={{ animation: 'slide-up', delay: 0.1, threshold: 0.1, duration: 1600 }}
		>
			<div class="mx-auto">
				<h2 class="text-2xl font-light tracking-tight text-black">
					Mandami un <span class="font-medium">messaggio</span>
				</h2>
				<p class="mt-2 text-base text-zinc-600">
					Compila il form sottostante e ti risponderò il prima possibile.
				</p>

				<div class="mt-8 w-full">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>

	<!-- Newsletter Section -->
	<section class="mt-16">
		<div use:scrollAnimate={{ animation: 'slide-up', threshold: 0.1, duration: 1600 }}>
			<Newsletter />
		</div>
	</section>
</div>
