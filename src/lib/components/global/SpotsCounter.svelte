<script lang="ts">
	export let text: string = '1 Spots available';
</script>

<span
	class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-1 text-sm leading-6 text-black ring-1 ring-inset ring-zinc-200"
>
	<p>{text}</p>
	<div class="h-2 w-2 rounded-full border-2 border-black bg-black"></div>

	<div class="h-2 w-2 rounded-full border-2 border-black"></div>
</span>
