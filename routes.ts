/**
 * These routes are accessible to public do not require authentication
 * Types are string[]
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification"
]
/**
 * These routes are used for authentication do not require authentication.
 * These routes will redirect users who logged to settings.
 * types are string[]
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]
/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * Types is string.
 */
export const apiAuthPrefix = "/api/auth";
/**
 * The default redirect path after login.
 * Type is string.
 */
export const defaultRedirectPath = "/settings";