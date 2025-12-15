<script lang="ts">
	import { Edit } from 'lucide-svelte';
	import type { Course } from '$lib/types/courses';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let courses: Course[] = $state([]);

	async function fetchCourses() {
		const response = await fetch('/api/courses');
		if (response.ok) {
			let coursesJson: Record<string, Course> = await response.json();
			courses = Object.values(coursesJson);
		} else {
			console.error('Failed to fetch courses');
		}
	}

	async function deleteCourse(title?: string) {
		if (confirm('Are you sure you want to delete this course?')) {
			courses = courses.filter((course) => course.title !== title);
		}
	}

	onMount(fetchCourses);
</script>

<h1 class="mb-4 text-2xl font-bold">Course Management</h1>

<div class="ml-auto w-fit">
	<button class="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:cursor-pointer" onclick={() => goto('/courses/new')}>
		Create New Course
	</button>
</div>

<table class="w-full table-auto border-collapse border border-gray-300">
	<thead>
		<tr>
			<th class="border border-gray-300 px-4 py-2">-</th>
			<th class="border border-gray-300 px-4 py-2">Title</th>
			<th class="border border-gray-300 px-4 py-2">Description</th>
			<th class="border border-gray-300 px-4 py-2">Price</th>
		</tr>
	</thead>
	<tbody>
		{#each courses as course, i}
			<tr>
				<td class="border border-gray-300 px-4 py-2"> {i}</td>
				<td class="border border-gray-300 px-4 py-2">{course.title}</td>
				<td class="border border-gray-300 px-4 py-2">{course.description}</td>
				<td class="border border-gray-300 px-4 py-2">{course.price}</td>
				<td class="border border-gray-300 px-4 py-2">
					<button
						class="rounded bg-blue-500 px-1 py-1 text-white hover:cursor-pointer"
						onclick={() => goto(`/courses/${course.title?.toLowerCase()}`)}
					>
						<Edit />
					</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
