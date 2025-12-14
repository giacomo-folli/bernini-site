import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const authToken = event.cookies.get('auth_token');

	if (!authToken && !event.url.pathname.startsWith('/auth')) {
		return redirect(302, '/auth/login');
	}

	return resolve(event);
};
