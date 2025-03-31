<script lang="ts">
	let { id }: { id: string } = $props();
</script>

<div {id} class="mt-14 w-full py-8 lg:mt-24">
	<slot />
</div>
