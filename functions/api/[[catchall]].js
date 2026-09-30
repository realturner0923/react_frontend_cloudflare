export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // When deployed, Cloudflare routes this to your K3s tunnel domain
  const backendTarget = `https://yourdomain.com${url.pathname}${url.search}`;

  const modifiedRequest = new Request(backendTarget, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual'
  });

  return fetch(modifiedRequest);
}
