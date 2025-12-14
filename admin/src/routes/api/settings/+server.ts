import type { RequestHandler } from './$types';

let settings = [
  { id: 1, key: 'siteTitle', value: 'My Awesome Site' },
  { id: 2, key: 'theme', value: 'dark' }
];

// GET: Fetch all settings
export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify(settings), {
    headers: { 'Content-Type': 'application/json' }
  });
};

// POST: Create a new setting
export const POST: RequestHandler = async ({ request }) => {
  const { key, value } = await request.json();

  if (!key || !value) {
    return new Response(JSON.stringify({ error: 'Key and value are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const newSetting = {
    id: settings.length > 0 ? settings[settings.length - 1].id + 1 : 1,
    key,
    value
  };

  settings.push(newSetting);

  return new Response(JSON.stringify(newSetting), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
};

// PUT: Update an existing setting
export const PUT: RequestHandler = async ({ request }) => {
  const { id, key, value } = await request.json();

  if (!id || !key || !value) {
    return new Response(JSON.stringify({ error: 'ID, key, and value are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const settingIndex = settings.findIndex((setting) => setting.id === id);

  if (settingIndex === -1) {
    return new Response(JSON.stringify({ error: 'Setting not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  settings[settingIndex] = { id, key, value };

  return new Response(JSON.stringify(settings[settingIndex]), {
    headers: { 'Content-Type': 'application/json' }
  });
};

// DELETE: Remove a setting
export const DELETE: RequestHandler = async ({ request }) => {
  const { id } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const settingIndex = settings.findIndex((setting) => setting.id === id);

  if (settingIndex === -1) {
    return new Response(JSON.stringify({ error: 'Setting not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  settings.splice(settingIndex, 1);

  return new Response(JSON.stringify({ message: 'Setting deleted' }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
