export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || 'cryptocurrency';
  const count = url.searchParams.get('count') || '10';

  const accessKey = import.meta.env.UNSPLASH_ACCESS_KEY || process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return new Response(JSON.stringify({ error: 'Unsplash access key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch from Unsplash' }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}