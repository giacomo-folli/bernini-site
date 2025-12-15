<script lang="ts">
	import { Plus, Trash2, Save, ArrowLeft, Loader2 } from 'lucide-svelte';
	import type { Course } from '$lib/types/courses';

	let courseData: Course = $state({
		title: '',
		subtitle: '',
		description: '',
		price: 0,
		duration: '',
		schedule: '',
		image: '',
		features: [],
		requirements: [],
		videos: [],
		images: []
	});

	let isSaving = $state(false);
	let message: { type: 'success' | 'error'; text: string } | null = $state(null);

	async function saveCourse() {
		isSaving = true;
		message = null;
		try {
			const response = await fetch(`/api/courses`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(courseData)
			});
		} catch (e) {
			alert('Error saving data');
		} finally {
			isSaving = false;
		}
	}

	function addItem(field: 'features' | 'requirements' | 'videos' | 'images') {
		courseData[field] = [...(courseData[field] as string[]), ''];
	}

	function removeItem(field: 'features' | 'requirements' | 'videos' | 'images', index: number) {
		courseData[field] = (courseData[field] as string[]).filter((_, i) => i !== index);
	}
</script>

<div class="mx-auto mt-2 max-w-4xl space-y-8 px-4">
	<section class="rounded-xl p-6">
		<div class="mb-4 flex items-center border-b pb-2">
			<a class="text-sm" href="/courses"><ArrowLeft /></a>
			<h2 class="inline text-lg font-semibold text-gray-800">General Information</h2>
		</div>

		<div class="w-fit ml-auto">
			<button
				class="mb-4 rounded bg-amber-500 px-4 py-2 text-white hover:cursor-pointer"
				onclick={saveCourse}
			>
				<Save />
			</button>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div class="col-span-2">
				<label class="mb-1 block text-sm font-medium text-gray-700">Course Title</label>
				<input
					type="text"
					bind:value={courseData.title}
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div class="col-span-2">
				<label class="mb-1 block text-sm font-medium text-gray-700">Subtitle</label>
				<input
					type="text"
					bind:value={courseData.subtitle}
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label class="mb-1 block text-sm font-medium text-gray-700">Price ($)</label>
				<input
					type="number"
					bind:value={courseData.price}
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label class="mb-1 block text-sm font-medium text-gray-700">Duration</label>
				<input
					type="text"
					bind:value={courseData.duration}
					placeholder="e.g. 3 Months"
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div class="col-span-2">
				<label class="mb-1 block text-sm font-medium text-gray-700">Schedule</label>
				<input
					type="text"
					bind:value={courseData.schedule}
					placeholder="e.g. Weekly lessons of 90 mins"
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>

			<div class="col-span-2">
				<label class="mb-1 block text-sm font-medium text-gray-700">Description</label>
				<textarea
					rows="5"
					bind:value={courseData.description}
					class="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				></textarea>
			</div>

			<div class="col-span-2">
				<label class="mb-1 block text-sm font-medium text-gray-700">Main Image URL</label>
				<div class="flex gap-4">
					<input
						type="text"
						bind:value={courseData.image}
						class="flex-1 rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					/>
					{#if courseData.image}
						<img
							src={courseData.image}
							alt="Preview"
							class="h-10 w-10 rounded border object-cover"
						/>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<section class="p-6">
			<div class="mb-4 flex items-center justify-between border-b pb-2">
				<h2 class="text-lg font-semibold text-gray-800">What you'll learn</h2>
				<button
					onclick={() => addItem('features')}
					class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
				>
					<Plus size={16} /> Add
				</button>
			</div>
			<div class="space-y-3">
				{#if courseData.features && courseData.features.length > 0}
					{#each courseData.features as _, i}
						<div class="flex gap-2">
							<input
								type="text"
								bind:value={courseData.features[i]}
								class="flex-1 rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
							<button
								onclick={() => removeItem('features', i)}
								class="p-2 text-gray-400 hover:text-red-500"
							>
								<Trash2 size={16} />
							</button>
						</div>
					{/each}
				{:else}
					<p class="py-4 text-center text-sm text-gray-400 italic">No features added yet.</p>
				{/if}
			</div>
		</section>

		<section class="p-6">
			<div class="mb-4 flex items-center justify-between border-b pb-2">
				<h2 class="text-lg font-semibold text-gray-800">Requirements</h2>
				<button
					onclick={() => addItem('requirements')}
					class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
				>
					<Plus size={16} /> Add
				</button>
			</div>
			<div class="space-y-3">
				{#if courseData?.requirements && courseData.requirements.length > 0}
					{#each courseData.requirements as _, i}
						<div class="flex gap-2">
							<input
								type="text"
								bind:value={courseData.requirements[i]}
								class="flex-1 rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
							<button
								onclick={() => removeItem('requirements', i)}
								class="p-2 text-gray-400 hover:text-red-500"
							>
								<Trash2 size={16} />
							</button>
						</div>
					{/each}
				{:else}
					<p class="py-4 text-center text-sm text-gray-400 italic">No requirements added.</p>
				{/if}
			</div>
		</section>
	</div>

	<section class="p-6">
		<div class="mb-4 flex items-center justify-between border-b pb-2">
			<h2 class="text-lg font-semibold text-gray-800">Video URLs</h2>
			<button
				onclick={() => addItem('videos')}
				class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
			>
				<Plus size={16} /> Add Video
			</button>
		</div>
		<div class="space-y-3">
			{#if courseData.videos}
				{#each courseData.videos as _, i}
					<div class="flex gap-2">
						<input
							type="text"
							bind:value={courseData.videos[i]}
							placeholder="https://..."
							class="flex-1 rounded-md border border-gray-300 p-2 font-mono text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
						/>
						<button
							onclick={() => removeItem('videos', i)}
							class="p-2 text-gray-400 hover:text-red-500"
						>
							<Trash2 size={16} />
						</button>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</div>
