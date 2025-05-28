import { useCallback } from 'react';

/**
 * Custom hook for tracking analytics events
 */
export function useAnalytics() {
  /**
   * Track a page view
   */
  const trackPageView = useCallback((url: string) => {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, []);

  /**
   * Track a custom event
   */
  const trackEvent = useCallback((eventName: string, params: Record<string, any> = {}) => {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    window.gtag('event', eventName, params);
  }, []);

  /**
   * Track an error
   */
  const trackError = useCallback((error: Error, context: Record<string, any> = {}) => {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context,
    });
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackError,
  };
}

// Add types for global window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

