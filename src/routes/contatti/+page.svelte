<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
	import Map from '$lib/components/contact/Map.svelte';
	import Page from '$lib/components/Page.svelte';
	import Seo from '$lib/components/global/Seo.svelte';
	import TabellaOrari from '$lib/components/contact/TabellaOrari.svelte';
</script>

<Seo
	title="Contatti | Francesco Bernini - Personal Coach"
	description="Contatta Francesco Bernini per informazioni su lezioni private, corsi di gruppo o collaborazioni. Personal trainer specializzato in movimento naturale a Parma."
/>

<Page id="contatti">
	<div class="mb-4 pt-3">
		<h1 class="text-3xl font-normal tracking-tighter text-black sm:text-4xl">Contatti</h1>
		<p class="mt-2 text-sm text-zinc-600">
			Hai domande? Sono qui per aiutarti a iniziare il tuo percorso verso un movimento migliore.
		</p>
	</div>

	<div class="mt-10">
		<ContactInfo />
	</div>

	<div class="mt-16">
		<TabellaOrari />
	</div>

	<div class="mt-16">
		<Map />
	</div>

	<div id="form" class="mt-16">
		<h2 class="mb-4 text-2xl font-medium text-black">Scrivimi</h2>
		<ContactForm />
	</div>

	<!-- <div class="mt-16">
				<Newsletter />
			</div> -->
</Page>
