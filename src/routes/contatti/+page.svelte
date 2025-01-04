<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
	import Map from '$lib/components/contact/Map.svelte';
</script>

<div class="mx-auto max-w-2xl px-4 sm:px-6 md:px-12 lg:px-8" id="contatti">
	<div class="mb-4 mt-20 pt-3 lg:mt-24">
		<h1 class="text-3xl font-normal tracking-tighter text-black sm:text-4xl">Contatti</h1>
		<p class="mt-2 text-sm text-zinc-600">
			Hai domande? Sono qui per aiutarti a iniziare il tuo percorso verso un movimento migliore.
		</p>
	</div>

	<div class="mt-8 grid grid-cols-1 gap-2">
		<div>
			<ContactInfo />
		</div>
		<div id="form" class="pt-6"></div>
		<div>
			<h2 class="mb-4 text-xl font-medium text-black">Scrivimi</h2>
			<ContactForm />
		</div>
	</div>

	<div class="mt-12">
		<div class="mb-6">
			<h3 class="text-xl font-medium text-black">Orari</h3>
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
		<h2 class="text-xl font-medium text-black">Dove trovarmi</h2>
		<div class="my-6">
			<Map />
		</div>
	</div>

	<!-- <div class="mt-16">
			<Newsletter />
		</div> -->
</div>

<svelte:head>
	<title>Contatti | Francesco Bernini - Personal Coach</title>
	<meta
		name="description"
		content="Contatta Francesco Bernini per informazioni su lezioni private, corsi di gruppo o collaborazioni. Personal trainer specializzato in movimento naturale a Parma."
	/>
	<meta
		name="keywords"
		content="contatti personal trainer parma, prenotazione lezioni movimento naturale, francesco bernini contatti"
	/>

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Contatti Francesco Bernini",
			"description": "Pagina contatti di Francesco Bernini, personal trainer a Parma",
			"mainEntity": {
				"@type": "LocalBusiness",
				"name": "Francesco Bernini Personal Training",
				"telephone": "+39 123 456 789",
				"email": "francesco@berninicoach.it",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Parma",
					"addressRegion": "PR",
					"addressCountry": "IT"
				}
				// "openingHoursSpecification": [
				// 	{
				// 		"@type": "OpeningHoursSpecification",
				// 		"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				// 		"opens": "09:00",
				// 		"closes": "20:00"
				// 	},
				// 	{
				// 		"@type": "OpeningHoursSpecification",
				// 		"dayOfWeek": "Saturday",
				// 		"opens": "10:00",
				// 		"closes": "16:00"
				// 	}
				// ]
			}
		}
	</script>
</svelte:head>
