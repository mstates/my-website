import { BlogLayout } from '@/components/blog/BlogLayout';
import { BlogList } from '@/components/blog/BlogList';
import { getAllPostMetadata } from '@/content/blog';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest articles about leadership, management, and personal growth.',
};

export default async function BlogPage() {
  const posts = await getAllPostMetadata();

  // Map the post metadata to match the BlogList component's expected format
  const formattedPosts = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    date: post.date,
    author: post.author,
    tags: post.tags,
    readingTime: post.readingTime,
  }));

  return (
    <BlogLayout 
      title="Blog"
      description="Read the latest articles about leadership, management, and personal growth."
    >
      <BlogList posts={formattedPosts} />
      <div className="mt-16">
        <NewsletterSignup 
          title="Stay updated"
          description="Subscribe to receive the latest articles and updates directly in your inbox."
        />
      </div>
    </BlogLayout>
  );
}
