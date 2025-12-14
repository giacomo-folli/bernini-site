# Authentication Implementation

This document outlines the steps taken to implement authentication in the admin site.

## 1. Login Page
- Created a login page at `src/routes/auth/login/+page.svelte`.
- The page includes a form for users to input their username and password.
- On form submission, the credentials are sent to the `/auth/login` endpoint using a `POST` request.
- If the login is successful, the user's session is updated, and they are redirected to the home page.
- If the login fails, an error message is displayed.

### Code Highlights:
- **Form Submission**: The `handleLogin` function sends the credentials to the server and updates the session store on success.
- **Error Handling**: Displays an error message if the login fails.

---

## 2. Logout Endpoint
- Created a logout endpoint at `src/routes/auth/logout/+server.ts`.
- The endpoint clears the authentication cookie (`auth_token`) to log the user out.
- Returns a success message upon completion.

### Code Highlights:
- **Cookie Management**: Deletes the `auth_token` cookie to invalidate the session.

---

## 3. Session Store
- Created a session store at `src/lib/stores/session.ts`.
- The store manages the authentication state of the user.
- Provides `login` and `logout` functions to update the session state.

### Code Highlights:
- **Writable Store**: The `session` store is a Svelte writable store.
- **State Management**: Tracks whether the user is authenticated and stores user details.

---

## 4. Authentication Flow
### Login:
1. User navigates to the login page.
2. Enters credentials and submits the form.
3. The server validates the credentials and returns a token and user details.
4. The session store is updated, and the user is redirected to the home page.

### Logout:
1. User initiates a logout request.
2. The server clears the authentication cookie.
3. The session store is reset, and the user is redirected to the login page.

### Route Protection:
1. A server hook (`src/hooks.server.ts`) checks if the user is authenticated for every request.
2. If the user is not authenticated and tries to access a protected route, they are redirected to the login page.
3. Routes under `/auth` (e.g., `/auth/login`) are excluded from this protection to allow login and logout functionality.

---

## 5. Future Enhancements
- **Token Expiry**: Implement token expiration and automatic logout.
- **Role-Based Access Control**: Restrict access to certain pages based on user roles.
- **Secure Storage**: Store tokens securely using HTTP-only cookies.

---

This implementation provides a basic authentication mechanism for the admin site. Further enhancements can be made to improve security and user experience.