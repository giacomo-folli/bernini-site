import type { RequestHandler } from './$types';

let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.', author: 'Admin' },
  { id: 2, title: 'Second Post', content: 'This is the second post.', author: 'Admin' }
];

// GET: Fetch all posts
export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify(posts), { status: 200 });
};

// POST: Create a new post
export const POST: RequestHandler = async ({ request }) => {
  const { title, content, author } = await request.json();
  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
    author
  };
  posts.push(newPost);
  return new Response(JSON.stringify(newPost), { status: 201 });
};

// PUT: Update an existing post
export const PUT: RequestHandler = async ({ request }) => {
  const { id, title, content, author } = await request.json();
  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
  }

  posts[postIndex] = { id, title, content, author };
  return new Response(JSON.stringify(posts[postIndex]), { status: 200 });
};

// DELETE: Delete a post
export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();
  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
  }

  posts.splice(postIndex, 1);
  return new Response(JSON.stringify({ message: 'Post deleted successfully' }), { status: 200 });
};
