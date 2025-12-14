<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { logout, session } from '$lib/stores/session.js';
	import { goto } from '$app/navigation';

	let { children } = $props();

	async function handleLogout() {
		logout();
		goto('/auth/logout');
	}

	const pages: Record<string, string> = {
		'/': 'Home',
		'/settings': 'Settings',
		'/courses': 'Courses',
		'/posts': 'Posts'
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $session.isAuthenticated}
	<div class="flex w-full justify-between border p-2">
		<ul class="flex gap-4 underline">
			{#each Object.keys(pages) as page}
				<li><a href={page}>{pages[page]}</a></li>
			{/each}
		</ul>
		<ul>
			<li><button onclick={handleLogout}>Logout</button></li>
		</ul>
	</div>
{/if}

<div class="mx-auto max-w-[90vw] p-4">
	{@render children()}
</div>
