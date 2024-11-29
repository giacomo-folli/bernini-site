<script lang="ts">
	let open = false;
</script>

<div class="fixed inset-x-0 top-4 z-50">
	<div class="mx-auto max-w-2xl px-8">
		<div class="mx-auto w-full">
			<div
				class="relative mx-auto flex w-full flex-col rounded-xl bg-white p-3 uppercase ring-1 ring-zinc-200 backdrop-blur-xl backdrop-filter md:flex-row md:items-center md:justify-between md:rounded-full"
			>
				<div class="flex flex-row items-center justify-between md:justify-start">
					<a
						class="ml-2 inline-flex items-center gap-4 text-xl font-bold tracking-tighter text-black hover:text-black/50"
						href="/"
						title="link to main page"
					>
						Bernini
					</a>
					<button
						on:click={() => (open = !open)}
						aria-label="menu-button"
						class="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-cyan-300 focus:text-black focus:outline-none md:hidden"
					>
						<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path
								class={open ? 'hidden' : 'inline-flex'}
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							>
							</path>
							<path
								class={!open ? 'hidden' : 'inline-flex'}
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							>
							</path>
						</svg>
					</button>
				</div>

				<nav
					class="flex-grow flex-col justify-center py-8 md:flex md:flex-row md:items-end md:py-0 {open
						? 'flex'
						: 'hidden'}"
				>
					<ul
						class="list-none items-center justify-center gap-4 space-y-2 text-center text-xs text-zinc-500 md:ml-auto md:inline-flex md:space-y-0 md:text-left"
					>
						<li>
							<a href="#work" class="shrink-0 hover:text-black"> Foto</a>
						</li>
						<li>
							<a href="#how" class="shrink-0 hover:text-black"> Come funziona</a>
						</li>
						<li>
							<a href="#pricing" class="shrink-0 hover:text-black"> Servizi</a>
						</li>
						<li>
							<a href="#faq" class="shrink-0 hover:text-black"> Faq</a>
						</li>
						<li class="shrink-0">
							<a
								href="https://github.com/giacomo-folli"
								class="inline-flex h-8 w-auto items-center justify-center rounded-full border-2 border-black bg-black px-4 py-2 text-white ring-2 ring-transparent duration-200 hover:bg-transparent hover:text-black focus:ring-2 focus:ring-black focus:ring-offset-2"
							>
								Scrivimi</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
