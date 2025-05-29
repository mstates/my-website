/**
 * Simplified error tracking module that works without Sentry dependencies
 * This allows the project to build while Sentry integration is being fixed
 */

// Define the severity level type that mimics Sentry's
export type SeverityLevel = 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug';

/**
 * Initialize error tracking (no-op in this simplified version)
 */
export function initErrorTracking() {
  console.info('Error tracking initialized (simplified version)');
}

/**
 * Report an error to the console
 * This replaces the Sentry captureException functionality
 */
export function reportError(error: Error, context?: Record<string, unknown>) {
  console.error('[Error Tracking]', error, context);
}

/**
 * Track an error (alias for reportError to maintain API compatibility)
 */
export function trackError(error: Error, context?: Record<string, unknown>) {
  reportError(error, context);
}

/**
 * Set context for future errors (no-op in this simplified version)
 */
export function setErrorContext(name: string, context: Record<string, unknown>) {
  console.info(`[Error Context] ${name}:`, context);
}

/**
 * Log a message at a specific severity level
 */
export function logMessage(message: string, level: SeverityLevel = 'info') {
  const logMethod = level === 'error' || level === 'fatal' 
    ? console.error 
    : level === 'warning' 
      ? console.warn 
      : console.info;
  
  logMethod(`[${level.toUpperCase()}] ${message}`);
}
