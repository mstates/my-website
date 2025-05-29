/**
 * Simplified instrumentation file without Sentry dependencies
 * This allows the project to build while Sentry integration is being fixed
 * 
 * NOTE: Sentry has been temporarily removed due to version conflicts with Next.js 15
 * It will be properly integrated in a future update
 */

export async function register() {
  // This is a simplified version without Sentry integration
  console.info('[Instrumentation] Server instrumentation registered');
}

// Simplified request error handler that logs to console
export const onRequestError = (error: Error) => {
  console.error('[Request Error]', error);
};
