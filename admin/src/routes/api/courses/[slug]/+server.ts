import type { RequestHandler } from '@sveltejs/kit';
import { courses } from '../data.json';

export const GET: RequestHandler = async ({ params }) => {
	const courseName = params.slug;
	
	const found = courses[courseName as string]
	if (!found) {
		return new Response(JSON.stringify({ error: 'Course not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	return new Response(JSON.stringify(found), {
		status: 201,
		headers: { 'Content-Type': 'application/json' }
	});
};
