<script lang="ts">
	import { features } from '../../data/features.json';
	// import { devwork } from "../../data/devwork.json";
</script>

<section class="scroll-mt-24" id="services">
	<div class="py-12">
		<div
			class="rounded-4xl col-span-full inline-flex h-full w-full items-center text-black lg:col-span-2"
		>
			<h2 class="text-3xl font-light tracking-tighter">Che cosa offro.</h2>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-px md:grid-cols-1">
			<div class="rounded-3xl bg-white p-8">
				<!-- <div class="inline-flex items-center border-b w-full border-white/10">
           <p class="text-2xl text-black">Design</p> 
        </div> -->
				<div class="divide-y divide-white/10">
					{#each features as feat}
						<div class=" flex flex-col justify-between gap-4 sm:flex-row lg:items-end">
							<p class="flex items-center gap-2 text-sm font-semibold leading-6 text-zinc-600">
								- {feat.title}:
							</p>
						</div>
						<p class="font-base ml-2.5 flex items-center gap-2 text-sm leading-6 text-zinc-600">
							{feat.description}
						</p>
					{/each}
				</div>
			</div>

			<!-- <div class="p-8 bg-white rounded-3xl">
        <div class="inline-flex items-center border-b w-full border-white/10">
          <p class="text-2xl text-black">Development</p>
        </div>
        <div class="divide-y divide-white/10 mt-4">
          {
            devwork.map((template) => (
              <>
                <div class=" flex flex-col sm:flex-row justify-between gap-4 lg:items-end">
                  <p class="font-medium leading-6 text-zinc-500 text-sm flex gap-2 items-center">
                    ⏤
                    {template.title}
                  </p>
                </div>
              </>
            ))
          }
        </div>
      </div> -->
		</div>
	</div>
</section>
