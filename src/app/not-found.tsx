import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Layout>
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold">404 - Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </Container>
    </Layout>
  );
}

