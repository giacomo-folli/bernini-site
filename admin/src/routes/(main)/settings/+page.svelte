<script>
	import { onMount } from 'svelte';

	let settings = $state([]);

	async function fetchSettings() {
		const response = await fetch('/api/settings');
		if (response.ok) {
			settings = await response.json();
		} else {
			console.error('Failed to fetch settings');
		}
	}

	// Delete a setting
	async function deleteSetting(id) {
		if (confirm('Are you sure you want to delete this setting?')) {
			const response = await fetch(`/api/settings/${id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				settings = settings.filter((setting) => setting.id !== id);
			} else {
				console.error('Failed to delete setting');
			}
		}
	}

	onMount(fetchSettings);
</script>

<h1 class="mb-4 text-2xl font-bold">Settings</h1>

{#if settings.length === 0}
	<p>No settings available.</p>
{:else}
	<table class="w-full table-auto border-collapse border border-gray-300">
		<thead>
			<tr class="bg-gray-100">
				<th class="border border-gray-300 px-4 py-2">Key</th>
				<th class="border border-gray-300 px-4 py-2">Value</th>
				<th class="border border-gray-300 px-4 py-2">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each settings as setting}
				<tr>
					<td class="border border-gray-300 px-4 py-2">{setting.key}</td>
					<td class="border border-gray-300 px-4 py-2">{setting.value}</td>
					<td class="border border-gray-300 px-4 py-2">
						<button
							class="rounded bg-red-500 px-2 py-1 text-white"
							on:click={() => deleteSetting(setting.id)}
						>
							Delete
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
