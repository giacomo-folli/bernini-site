import { writable } from 'svelte/store';

export const AdminUser = {
	username: 'admin',
	password: 'password',
	name: 'admin123'
};

export const session = writable<{
	isAuthenticated: boolean;
	token: string | null;
	user: {} | null;
}>({ isAuthenticated: false, token: null, user: null });

export function login(user: {} | null, token: string) {
	session.set({ isAuthenticated: true, token, user });
}

export function logout() {
	session.set({ isAuthenticated: false, token: null, user: null });
}
