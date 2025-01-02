<script lang="ts">
	let formData = {
		name: '',
		email: '',
		message: '',
		subject: 'general'
	};

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		// Form submission logic would go here
	};
</script>

<form on:submit={handleSubmit} class="space-y-4">
	<div>
		<label for="name" class="block text-sm font-medium text-zinc-700">Nome</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			required
			class="mt-1 block w-full rounded-sm border-zinc-300 p-2 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		/>
	</div>

	<div>
		<label for="email" class="block text-sm font-medium text-zinc-700">Email</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			required
			class="mt-1 block w-full rounded-sm border-zinc-300 p-2 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		/>
	</div>

	<div>
		<label for="subject" class="block text-sm font-medium text-zinc-700">Argomento</label>
		<select
			id="subject"
			bind:value={formData.subject}
			class="p-2 mt-1 block w-full rounded-sm border-zinc-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		>
			<option value="general">Informazioni Generali</option>
			<option value="private">Lezioni Private</option>
			<option value="group">Lezioni di Gruppo</option>
			<option value="collaboration">Collaborazioni</option>
		</select>
	</div>

	<div>
		<label for="message" class="block text-sm font-medium text-zinc-700">Messaggio</label>
		<textarea
			id="message"
			bind:value={formData.message}
			rows="4"
			required
			class="p-2 mt-1 block w-full rounded-sm border-zinc-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
		></textarea>
	</div>

	<button
		type="submit"
		class="inline-flex w-full items-center justify-center rounded-sm bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
	>
		Invia Messaggio
	</button>
</form>
