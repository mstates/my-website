'use client';

/**
 * Simplified client instrumentation file without Sentry dependencies
 * This allows the project to build while Sentry integration is being fixed
 * 
 * NOTE: Sentry has been temporarily removed due to version conflicts with Next.js 15
 * It will be properly integrated in a future update
 */

// Client-side initialization for instrumentation
export async function register() {
  console.info('[Client Instrumentation] Client instrumentation registered');
}

// Export a no-op function to satisfy any imports
export const onRouterTransitionStart = () => {};

export default register;
