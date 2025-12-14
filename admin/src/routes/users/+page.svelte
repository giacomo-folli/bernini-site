<script>
	import { onMount } from 'svelte';

	let users = [];

	// Fetch users from the API
	async function fetchUsers() {
		const response = await fetch('/api/users');
		if (response.ok) {
			users = await response.json();
		} else {
			console.error('Failed to fetch users');
		}
	}

	onMount(fetchUsers);

	// Delete a user
	async function deleteUser(id) {
		if (confirm('Are you sure you want to delete this user?')) {
			const response = await fetch(`/api/users/${id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				users = users.filter((user) => user.id !== id);
			} else {
				console.error('Failed to delete user');
			}
		}
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">User Management</h1>
	<table class="w-full table-auto border-collapse border border-gray-300">
		<thead>
			<tr>
				<th class="border border-gray-300 px-4 py-2">ID</th>
				<th class="border border-gray-300 px-4 py-2">Name</th>
				<th class="border border-gray-300 px-4 py-2">Email</th>
				<th class="border border-gray-300 px-4 py-2">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr>
					<td class="border border-gray-300 px-4 py-2">{user.id}</td>
					<td class="border border-gray-300 px-4 py-2">{user.name}</td>
					<td class="border border-gray-300 px-4 py-2">{user.email}</td>
					<td class="border border-gray-300 px-4 py-2">
						<button
							class="rounded bg-red-500 px-2 py-1 text-white"
							on:click={() => deleteUser(user.id)}
						>
							Delete
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.container {
		max-width: 800px;
	}
</style>
