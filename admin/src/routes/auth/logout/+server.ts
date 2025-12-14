import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	// Clear the authentication cookie
	cookies.delete('auth_token', { path: '/' });

	return new Response(null, {
		status: 302,
		headers: { Location: '/auth/login' }
	});
};
