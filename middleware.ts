import { authRoutes, publicRoutes, apiAuthPrefix, defaultRedirectPath } from "./routes"
import { auth } from "./auth"

export default auth((req) => {
  // req.auth
  const {nextUrl}= req;
  const isLoggedIn = !!req.auth;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = apiAuthPrefix.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute){
    return;
  }
  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(defaultRedirectPath, nextUrl));
    }
    return;
  }
  if(!isLoggedIn && !isPublicRoute){
    let callbackUrl = nextUrl.pathname;
    if(nextUrl.search){
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }
  return;
})
// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }