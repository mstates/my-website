/**
 * Error tracking utility
 * 
 * This is a placeholder implementation. In production, you would 
 * integrate with a real error tracking service like Sentry, LogRocket, etc.
 */

type ErrorContext = {
  context?: Record<string, any>;
  tags?: Record<string, string>;
  user?: {
    id?: string;
    email?: string;
    username?: string;
  };
};

/**
 * Reports an error to the error tracking service
 */
export function reportError(error: Error, options: ErrorContext = {}) {
  // In development, just log to console
  if (process.env.NODE_ENV === 'development') {
    console.group('Error Reported');
    console.error(error);
    console.info('Context:', options.context);
    console.info('Tags:', options.tags);
    console.info('User:', options.user);
    console.groupEnd();
    return;
  }

  // In production, you would send to your error tracking service
  // For example with Sentry:
  // Sentry.captureException(error, {
  //   extra: options.context,
  //   tags: options.tags,
  //   user: options.user,
  // });

  // For now, we'll just log to console in production too
  console.error('[Error Tracking]', error, options);
  
  // You could also send to your own API endpoint
  // fetch('/api/error-logging', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     message: error.message,
  //     stack: error.stack,
  //     ...options,
  //   }),
  // }).catch(console.error);
}

/**
 * Initialize error tracking
 */
export function initErrorTracking() {
  // Setup global error handlers
  if (typeof window !== 'undefined') {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      reportError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)), {
        context: { source: 'unhandledrejection' },
      });
    });

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      reportError(event.error || new Error(event.message), {
        context: { 
          source: 'window.onerror',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });
  }
}

