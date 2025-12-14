import type { RequestHandler } from './$types';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET /api/users - Fetch all users
export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' }
  });
};

// POST /api/users - Create a new user
export const POST: RequestHandler = async ({ request }) => {
  const { name, email } = await request.json();
  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    email
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
};

// PUT /api/users/:id - Update an existing user
export const PUT: RequestHandler = async ({ request, params }) => {
  const id = Number(params.id);
  const { name, email } = await request.json();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  users[userIndex] = { id, name, email };
  return new Response(JSON.stringify(users[userIndex]), {
    headers: { 'Content-Type': 'application/json' }
  });
};

// DELETE /api/users/:id - Delete a user
export const DELETE: RequestHandler = async ({ params }) => {
  const id = Number(params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  users.splice(userIndex, 1);
  return new Response(null, { status: 204 });
};
