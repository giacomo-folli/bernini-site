import type { LayoutData } from './$types';
import { login, session } from '$lib/stores/session.js';
import { get } from 'svelte/store';

export const load: LayoutData = async ({ data }) => {
	const { token, user } = data || {};

	const authenticatedSession = get(session).isAuthenticated;
	if (!authenticatedSession && !!token && !!user) {
		login(user, token);
	}
};
