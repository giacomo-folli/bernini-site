<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Pages } from '$lib/enums';
	import { slide } from 'svelte/transition';

	let open = false;

	const hrefs = [
		{ url: Pages.CLASSES, title: 'Classi' },
		{ url: Pages.ABOUT, title: 'La mia storia' },
		{ url: Pages.CONTACTS, title: 'Contatti' }
	];

	$: selected = (url: string) => $page.url.pathname === url;

	onNavigate(() => {
		open = false;
	});
</script>

<header class="fixed top-0 z-50 w-full bg-[#fcf9f8]/80 backdrop-blur-xl">
	<nav class="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
		<a class="font-headline text-2xl tracking-tight text-[#1c1b1b]" href={Pages.HOME}
			>Francesco Bernini</a
		>

		<div class="hidden items-center gap-10 md:flex">
			{#each hrefs as item}
				<a
					class="font-body text-sm tracking-wide text-[#4b5f7f] transition-colors hover:text-[#1c1b1b] {selected(
						item.url
					)
						? 'font-medium text-[#1c1b1b]'
						: ''}"
					href={item.url}
				>
					{item.title}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-4">
			<a
				href={Pages.CONTACTS}
				class="hidden rounded-full bg-primary px-8 py-3 text-sm font-medium text-on-primary transition-all duration-300 hover:bg-primary-container active:scale-95 md:block"
			>
				Scrivimi
			</a>

			<button
				on:click={() => (open = !open)}
				class="hover:bg-surface-container inline-flex items-center justify-center rounded-full p-2 text-zinc-400 transition-colors hover:text-on-surface focus:outline-none md:hidden"
				aria-expanded={open}
				aria-label="Toggle menu"
			>
				<span class="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
			</button>
		</div>
	</nav>

	{#if open}
		<div
			class="fixed inset-x-0 top-[80px] z-50 h-[calc(100vh-80px)] bg-surface md:hidden"
			transition:slide={{ duration: 300 }}
		>
			<nav class="h-full overflow-y-auto px-8 py-8">
				<ul class="flex flex-col gap-6">
					{#each hrefs as item}
						<li>
							<a
								href={item.url}
								class="block text-lg font-medium text-secondary transition-colors hover:text-on-surface {selected(
									item.url
								)
									? 'text-on-surface'
									: ''}"
							>
								{item.title}
							</a>
						</li>
					{/each}
					<li class="pt-6">
						<a
							href={Pages.CONTACTS}
							class="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-on-primary transition-all duration-300 hover:bg-primary-container active:scale-95"
						>
							Scrivimi
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>
