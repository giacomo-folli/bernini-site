<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let posts = $state([]);

	// Fetch posts from the API
	async function fetchPosts() {
		const response = await fetch('/api/posts');
		if (response.ok) {
			posts = await response.json();
		} else {
			console.error('Failed to fetch posts');
		}
	}

	// Delete a post
	async function deletePost(id) {
		if (confirm('Are you sure you want to delete this post?')) {
			const response = await fetch(`/api/posts/${id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				posts = posts.filter((post) => post.id !== id);
			} else {
				console.error('Failed to delete post');
			}
		}
	}

	onMount(fetchPosts);
</script>

<h1 class="mb-4 text-2xl font-bold">Posts</h1>

<div class="ml-auto w-fit">
	<button class="mb-4 rounded bg-blue-500 px-4 py-2 text-white" onclick={() => goto('/posts/new')}>
		Create New Post
	</button>
</div>

{#if posts.length > 0}
	<table class="w-full table-auto border-collapse border border-gray-300">
		<thead>
			<tr>
				<th class="border border-gray-300 px-4 py-2">Title</th>
				<th class="border border-gray-300 px-4 py-2">Author</th>
				<th class="border border-gray-300 px-4 py-2">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each posts as post}
				<tr>
					<td class="border border-gray-300 px-4 py-2">{post.title}</td>
					<td class="border border-gray-300 px-4 py-2">{post.author}</td>
					<td class="border border-gray-300 px-4 py-2">
						<button
							class="mr-2 rounded bg-yellow-500 px-2 py-1 text-white"
							onclick={() => goto(`/posts/${post.id}`)}
						>
							Edit
						</button>
						<button
							class="rounded bg-red-500 px-2 py-1 text-white"
							onclick={() => deletePost(post.id)}
						>
							Delete
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No posts found.</p>
{/if}
