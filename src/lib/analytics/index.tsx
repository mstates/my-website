'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics as SegmentAnalytics } from '@segment/analytics-next';
import { useEffect } from 'react';

// Initialize Segment analytics
const analytics = new SegmentAnalytics({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY || '',
});

export function Analytics() {
  useEffect(() => {
    // Initialize analytics on mount
    analytics.load();
    return () => {
      // Cleanup on unmount
      analytics.destroy();
    };
  }, []);

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}

// Utility function for tracking events
export function trackEvent(name: string, properties?: Record<string, any>) {
  analytics.track(name, properties);
}

// Utility function for identifying users
export function identifyUser(userId: string, traits?: Record<string, any>) {
  analytics.identify(userId, traits);
}
