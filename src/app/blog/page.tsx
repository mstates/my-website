import { BlogLayout } from '@/components/blog/BlogLayout';
import { getAllPostMetadata } from '@/lib/blog';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';
import { BlogListStatic } from '@/components/blog/BlogListStatic';

// Force dynamic rendering to avoid SSR issues with client components
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest articles about leadership, management, and personal growth.',
};

export default async function BlogPage() {
  // Fetch posts with error handling
  const posts = await getAllPostMetadata().catch(error => {
    console.error('Error fetching blog posts:', error);
    return [];
  });

  // Map the post metadata to match the BlogList component's expected format
  const formattedPosts = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt, // Use the correct property name
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
      <BlogListStatic posts={formattedPosts} />
      <div className="mt-16">
        <NewsletterSignup 
          title="Stay updated"
          description="Subscribe to receive the latest articles and updates directly in your inbox."
        />
      </div>
    </BlogLayout>
  );
}
