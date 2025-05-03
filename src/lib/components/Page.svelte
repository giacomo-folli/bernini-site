<script lang="ts">
	let { id }: { id: string } = $props();
</script>

<div {id} class="w-full py-4">
	<slot />
</div>