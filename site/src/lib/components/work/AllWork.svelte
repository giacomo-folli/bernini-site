<script lang="ts">
	import { work } from '../../data/work.json';
</script>

<section class="relative border-zinc-700 sm:px-8 md:px-12 2xl:border-x">
	<div class="h-12 border-x border-zinc-700"></div>
</section>
<section class="relative border-y border-zinc-700 sm:px-8 md:px-12 2xl:border-x" style="">
	<div class="border-x border-zinc-700">
		<div class="bg-gradientTopRight overflow-hidden p-px ring-1 ring-zinc-700 lg:rounded-[3rem]">
			<div class="bg-black/50 p-8 backdrop-blur-3xl lg:bg-transparent lg:p-20">
				<h2 class="text-5xl font-normal tracking-tighter text-white md:text-6xl">Selected work</h2>
				<div class="mt-12 divide-y divide-white/10 border-y border-white/10">
					{#each work as template}
						<div class="flex flex-col justify-between gap-4 py-4 sm:flex-row lg:items-end">
							<div>
								<p class="font-medium leading-6 text-white">{template.title}</p>
								<p class="mt-2 text-xs text-zinc-400">{template.description}</p>
								<div class="mt-4 flex items-center gap-2">
									<p class="text-xs text-white">{template.type}</p>
								</div>
							</div>
							<div class="lg:ml-auto">
								<a
									aria-label="link"
									href={template.url}
									class="bg-black/8 inline-flex h-12 w-12 items-center rounded-full p-4 text-center text-white ring-1 ring-white/10 duration-300 hover:bg-black/90 focus:bg-transparent"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-arrow-narrow-right h-4 w-4"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 12l14 0" />
										<path d="M15 16l4 -4" />
										<path d="M15 8l4 4" />
									</svg>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
