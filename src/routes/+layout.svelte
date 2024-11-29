<script lang="ts">
	import Footer from '$lib/components/global/Footer.svelte';
	import Navigation from '$lib/components/global/Navigation.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navigation />
<main class="flex-grow">
	{@render children()}
</main>
<Footer />
