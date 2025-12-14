import { AdminUser } from '$lib/stores/session';
import type { RequestHandler } from './$types';

import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { username, password } = await request.json();

	// In a real application, you would:
	// 1. Query your database for the user by username.
	// 2. Hash the provided password and compare it to the stored hash.
	// 3. If credentials are valid, generate a JWT or session token.

	// For demonstration purposes, we'll use a simple hardcoded check.
	if (username === 'admin' && password === 'password') {
		// Simulate a successful login
		const user = AdminUser
		const token = 'fake-jwt-token-for-admin'; // In production, generate a real JWT

		return json(
			{ user, token },
			{
				status: 200,
				headers: {
					'Set-Cookie': `auth_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=3600; Secure`
				}
			}
		);
	} else {
		// Simulate failed login
		return json({ message: 'Invalid username or password' }, { status: 401 });
	}
};
