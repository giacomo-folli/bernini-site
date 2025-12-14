import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
	const authToken = cookies.get('auth_token');

	if (authToken) {
		let loggedInUser: { user: {} | null; token: string | null };

		try {
			const response = await fetch('/api/me');
			loggedInUser = await response.json();

			return {
				user: loggedInUser.user,
				token: loggedInUser.token
			};
		} catch (error) {
			console.error('Error logging in:', error);
		}
	}

	// try {
	// 	let user;

	// 	const response = await fetch('/api/me'); // Adjust this endpoint as per your backend
	// 	if (response.ok) {
	// 		user = await response.json();
	// 	} else if (response.status === 401 || response.status === 403) {
	// 		// User is not authenticated or authorized
	// 		throw redirect(303, '/auth/login');
	// 	}

	// 	return { user };
	// } catch (error) {
	// 	console.error('Error fetching user data:', error);
	// 	return { user: null };
	// }
};
