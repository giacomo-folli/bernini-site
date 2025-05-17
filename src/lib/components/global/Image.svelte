<script lang="ts">
	import { scrollAnimate } from '$lib/actions/scrollAnimation';
	import { optimize } from '$lib/utils/image';

	let clazz: string = '';

	export { clazz as class };
	export let src: string;
	export let alt: string;
	export let width = '';
	export let height = '';
	export let animate: boolean = false;
</script>

{#if animate}
	<div
		use:scrollAnimate={{
			animation: 'fade',
			immediate: true,
			duration: 5000
		}}
	>
		<img
			{alt}
			{width}
			{height}
			class={clazz}
			srcset={optimize(src)}
			sizes="(max-width: 640px) 640px,(max-width: 960px) 960px,1280px"
			loading="lazy"
		/>
	</div>
{:else}
	<img
		{alt}
		{width}
		{height}
		class={clazz}
		srcset={optimize(src)}
		sizes="(max-width: 640px) 640px,(max-width: 960px) 960px,1280px"
		loading="lazy"
	/>
{/if}
