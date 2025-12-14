import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Here you would typically send the email using your preferred service
    // For now, we'll just simulate a successful response
    
    return json({ success: true });
  } catch (error) {
    return json({ error: 'Failed to send message' }, { status: 500 });
  }
};