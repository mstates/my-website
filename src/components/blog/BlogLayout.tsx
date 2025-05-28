import { Container } from '@/components/ui/Container';
import { Layout } from '@/components/layout/Layout';

interface BlogLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function BlogLayout({ children, title, description }: BlogLayoutProps) {
  return (
    <Layout>
      <Container className="py-10 md:py-16">
        {title && (
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </Layout>
  );
}

