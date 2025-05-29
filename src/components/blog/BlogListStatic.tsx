/**
 * BlogListStatic - A server component for displaying blog posts
 * Simplified version with no client-side interactivity
 */
import { BlogCard } from './BlogCard';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  readingTime: string;
};

interface BlogListStaticProps {
  posts: Post[];
}

export function BlogListStatic({ posts }: BlogListStaticProps) {
  return (
    <div className="space-y-8">
      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-muted bg-card p-8 text-center">
          <h3 className="text-xl font-medium">No posts found</h3>
          <p className="mt-2 text-muted-foreground">
            There are no blog posts available at this time.
          </p>
        </div>
      )}
    </div>
  );
}

