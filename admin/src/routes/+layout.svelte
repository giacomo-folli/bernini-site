<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { logout, session } from '$lib/stores/session.js';
	import { goto } from '$app/navigation';

	let { children } = $props();
	
	async function handleLogout() {
        logout()
		goto("/auth/logout")
	}
	</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $session.isAuthenticated}
	<div class="flex w-full justify-between border p-2">
		<ul class="flex gap-4 underline">
		    <li><a href="/">Home</a></li>
			<li><a href="/settings">Settings</a></li>
			<li><a href="/users">Users</a></li>
			<li><a href="/posts">Posts</a></li>
		</ul>
		<ul>
			<li><button onclick={handleLogout}>Logout</button></li>
		</ul>
	</div>
{/if}

{@render children()}
