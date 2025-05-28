import Image from 'next/image';
import { format } from 'date-fns';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SocialShare } from './SocialShare';
import { Comments } from './Comments';
import { NewsletterSignup } from './NewsletterSignup';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface Author {
  name: string;
  image: string;
  bio?: string;
}

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  author: Author;
  readingTime: string;
  tags: string[];
  description: string;
  slug: string;
}

export function BlogPostLayout({
  children,
  title,
  date,
  author,
  readingTime,
  tags,
  description,
  slug,
}: BlogPostLayoutProps) {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;

  return (
    <Layout>
      <Container className="py-10 md:py-16">
        <article className="mx-auto max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              {title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={author.image}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{author.name}</p>
                <div className="flex text-sm text-muted-foreground">
                  <time dateTime={date}>{formattedDate}</time>
                  <span className="mx-1">·</span>
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              {description}
            </p>
            
            <SocialShare
              url={url}
              title={title}
              description={description}
              tags={tags}
              className="mb-8"
            />
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </div>
          
          <footer className="mt-16 border-t pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-lg">{author.name}</p>
                  {author.bio && (
                    <p className="text-muted-foreground text-sm">{author.bio}</p>
                  )}
                </div>
              </div>
              
              <SocialShare
                url={url}
                title={title}
                description={description}
                tags={tags}
              />
            </div>
            
            <NewsletterSignup className="mt-12" />
            
            <Comments className="mt-12" />
          </footer>
        </article>
      </Container>
    </Layout>
  );
}

