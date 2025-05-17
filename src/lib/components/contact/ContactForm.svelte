<script lang="ts">
	import { fade } from 'svelte/transition';

	let formData = {
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
		privacy: false
	};

	let isSubmitting = false;
	let submitStatus: 'success' | 'error' | null = null;

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		if (!formData.privacy) return;

		isSubmitting = true;
		submitStatus = null;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) throw new Error('Invio fallito');

			submitStatus = 'success';
			formData = {
				name: '',
				email: '',
				phone: '',
				company: '',
				message: '',
				privacy: false
			};
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<!-- <div class="grid gap-8 lg:grid-cols-2"> -->
<div class="flex w-full flex-col gap-8 md:flex-row">
	<div class="basis-1/3">
		<div class="rounded-3xl bg-zinc-900 p-8 text-white sm:p-12">
			<h2 class="text-3xl font-light tracking-tight">
				Hey! 👋 <span class="font-medium">Parliamo</span>
			</h2>
			<div class="mt-6 space-y-6 text-zinc-300">
				<p>
					Sono sempre entusiasta di conoscere nuove persone e aiutarle a raggiungere i loro
					obiettivi di movimento e benessere.
				</p>
				<p>
					Non importa se sei un principiante assoluto o un atleta esperto - insieme possiamo creare
					un percorso personalizzato che si adatti perfettamente alle tue esigenze.
				</p>
				<p>
					Scrivimi un messaggio e sarò felice di rispondere a tutte le tue domande e discutere come
					posso aiutarti nel tuo viaggio verso un movimento migliore.
				</p>
				<p class="font-medium italic">Non vedo l'ora di sentirti!</p>
			</div>
		</div>
	</div>

	<div class="basis-2/3">
		<div class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-200 sm:p-12">
			<h2 class="text-3xl font-light tracking-tight text-black">
				Iniziamo a <span class="font-medium">collaborare</span>
			</h2>
			<p class="mt-2 text-base text-zinc-600">
				Compila il form e ti risponderò il prima possibile.
			</p>

			<form on:submit={handleSubmit} class="mt-8 space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium text-zinc-900">Nome completo *</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						placeholder="Il tuo nome"
						class="mt-2 block w-full rounded-lg border-zinc-300 px-4 py-3 text-black shadow-sm placeholder:text-zinc-400 focus:border-black focus:ring-black sm:text-sm"
					/>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-zinc-900">Email *</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						placeholder="La tua email"
						class="mt-2 block w-full rounded-lg border-zinc-300 px-4 py-3 text-black shadow-sm placeholder:text-zinc-400 focus:border-black focus:ring-black sm:text-sm"
					/>
				</div>

				<div>
					<label for="phone" class="block text-sm font-medium text-zinc-900">Telefono *</label>
					<input
						type="tel"
						id="phone"
						bind:value={formData.phone}
						required
						placeholder="Il tuo numero"
						class="mt-2 block w-full rounded-lg border-zinc-300 px-4 py-3 text-black shadow-sm placeholder:text-zinc-400 focus:border-black focus:ring-black sm:text-sm"
					/>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-zinc-900">Messaggio</label>
					<textarea
						id="message"
						bind:value={formData.message}
						rows="4"
						placeholder="Come posso aiutarti?"
						class="mt-2 block w-full rounded-lg border-zinc-300 px-4 py-3 text-black shadow-sm placeholder:text-zinc-400 focus:border-black focus:ring-black sm:text-sm"
					></textarea>
				</div>

				<div class="flex items-start">
					<div class="flex h-6 items-center">
						<input
							id="privacy"
							type="checkbox"
							bind:checked={formData.privacy}
							required
							class="h-4 w-4 rounded border-zinc-300 text-black focus:ring-black"
						/>
					</div>
					<div class="ml-3">
						<label for="privacy" class="text-sm text-zinc-600">
							Accetto che i miei dati vengano utilizzati in accordo con la privacy policy
						</label>
					</div>
				</div>

				<div>
					<button
						type="submit"
						disabled={isSubmitting || !formData.privacy}
						class="inline-flex w-full items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:hover:bg-black"
					>
						{isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
					</button>
				</div>

				{#if submitStatus === 'success'}
					<div
						class="rounded-lg bg-green-50 p-4 text-sm text-green-600"
						transition:fade={{ duration: 200 }}
					>
						<p>Messaggio inviato con successo! Ti risponderò il prima possibile.</p>
					</div>
				{/if}

				{#if submitStatus === 'error'}
					<div
						class="rounded-lg bg-red-50 p-4 text-sm text-red-600"
						transition:fade={{ duration: 200 }}
					>
						<p>Si è verificato un errore. Riprova più tardi o contattami direttamente via email.</p>
					</div>
				{/if}
			</form>
		</div>
	</div>
</div>
