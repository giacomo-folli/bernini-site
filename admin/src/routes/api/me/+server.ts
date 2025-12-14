import { AdminUser } from '$lib/stores/session.js';
import { json } from '@sveltejs/kit';

export const GET = async ({ cookies }) => {
	const requestToken = cookies.get('auth_token');

	const sessionToken = 'fake-jwt-token-for-admin';
	if (requestToken != sessionToken) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	return json({ user: AdminUser, token: sessionToken });
};
