'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { reportError } from '@/lib/error-tracking';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    
    // Report error to tracking service (e.g., Sentry)
    reportError(error, {
      context: {
        component: 'ErrorBoundary',
        digest: error.digest,
      },
    });
  }, [error]);

  return (
    <Layout>
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold">Something went wrong!</h2>
        <p className="mb-8 text-muted-foreground">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </Container>
    </Layout>
  );
}

