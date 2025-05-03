<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fade, slide } from 'svelte/transition';

	let open = false;

	const hrefs = [
		{ url: '/come-funziona', title: 'Classi' },
		{ url: '/chi-sono', title: 'La mia storia' },
		{ url: '/contatti', title: 'Contatti' }
	];

	$: selected = (url: string) => {
		return $page.url.pathname === url;
	};

	onNavigate(() => {
		open = false;
	});
</script>

<div class="sticky top-0 z-50 bg-zinc-100/80 backdrop-blur-lg">
	<div
		class="relative mx-auto w-full px-8 py-6 sm:px-12 lg:px-16 xl:px-24"
		style="max-width: min(100%, 90rem)"
	>
		<div class="flex items-center justify-between">
			<a
				class="text-xl font-medium tracking-tighter text-black transition-colors hover:text-black/70"
				href="/"
				title="link to main page"
			>
				Francesco Bernini
			</a>

			<div class="flex items-center gap-10">
				<nav class="hidden md:block">
					<ul class="flex items-center gap-10 text-sm">
						{#each hrefs as item}
							<li>
								<a
									href={item.url}
									class="text-zinc-600 transition-colors hover:text-black {selected(item.url)
										? 'font-medium text-black'
										: ''}">{item.title}</a
								>
							</li>
						{/each}
					</ul>
				</nav>

				<div class="flex items-center gap-4">
					<a
						href="/contatti#form"
						class="hidden rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 md:block"
					>
						Scrivimi
					</a>

					<button
						on:click={() => (open = !open)}
						class="inline-flex items-center justify-center rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-black focus:outline-none md:hidden"
						aria-expanded={open}
						aria-label="Toggle menu"
					>
						<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path
								class={open ? 'hidden' : 'inline-flex'}
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
							<path
								class={!open ? 'hidden' : 'inline-flex'}
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if open}
		<div
			class="fixed inset-x-0 top-[73px] z-50 h-[calc(100vh-73px)] bg-zinc-100 md:hidden"
			transition:slide={{ duration: 300 }}
		>
			<nav class="h-full overflow-y-auto px-8 py-8 sm:px-12">
				<ul class="flex flex-col gap-6">
					{#each hrefs as item}
						<li>
							<a
								href={item.url}
								class="block text-lg font-medium text-zinc-600 transition-colors hover:text-black {selected(
									item.url
								)
									? 'text-black'
									: ''}">{item.title}</a
							>
						</li>
					{/each}
					<li class="pt-6">
						<a
							href="/contatti#form"
							class="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800"
						>
							Scrivimi
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</div>

<!-- Add padding to prevent content from hiding under fixed header -->
<div class="h-4" />
