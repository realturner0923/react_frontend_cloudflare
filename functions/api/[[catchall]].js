export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Forward frontend /api traffic directly to your root domain backend tunnel
  const backendTarget = `https://netrag.store${url.pathname}${url.search}`;

  const modifiedRequest = new Request(backendTarget, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual'
  });

  return fetch(modifiedRequest);
}
