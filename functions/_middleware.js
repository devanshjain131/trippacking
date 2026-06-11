export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirect trippacking.pages.dev to the custom domain tripspackinglist.com
  if (url.hostname === 'trippacking.pages.dev') {
    url.hostname = 'tripspackinglist.com';
    return Response.redirect(url.toString(), 301);
  }

  // Continue processing standard assets
  return context.next();
}
