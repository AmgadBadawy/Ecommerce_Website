import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes (accessible without authentication)
const isPublicRoute = createRouteMatcher([
  '/', 
  '/product-details/(.*)',  // Pattern for public access to product details
  '/sign-in(.*)', 
  '/sign-up(.*)'
]);

// Middleware function to protect routes
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();  // If the route is not public, protect it
  }
});

// Matcher configuration for which routes the middleware applies to
export const config = {
  matcher: [
    // Skip static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Apply middleware to API routes
    '/(api|trpc)(.*)',
  ],
};
