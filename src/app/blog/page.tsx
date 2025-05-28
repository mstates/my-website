import { BlogLayout } from '@/components/blog/BlogLayout';
import { BlogList } from '@/components/blog/BlogList';

// Mock data for demonstration
const DEMO_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js and React.',
    date: '2025-05-20',
    author: {
      name: 'John Doe',
      image: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
    },
    tags: ['Next.js', 'React', 'Tutorial'],
    readingTime: '5 min read',
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips and Tricks',
    excerpt: 'Discover advanced techniques for using Tailwind CSS in your projects.',
    date: '2025-05-15',
    author: {
      name: 'Jane Smith',
      image: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
    },
    tags: ['CSS', 'Tailwind', 'Frontend'],
    readingTime: '4 min read',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    excerpt: 'Learn the best practices for writing clean and maintainable TypeScript code.',
    date: '2025-05-10',
    author: {
      name: 'Michael Brown',
      image: 'https://ui-avatars.com/api/?name=Michael+Brown&background=random',
    },
    tags: ['TypeScript', 'JavaScript', 'Development'],
    readingTime: '7 min read',
  },
];

export const metadata = {
  title: 'Blog',
  description: 'Read the latest articles about web development, design, and technology.',
};

export default function BlogPage() {
  return (
    <BlogLayout 
      title="Blog"
      description="Read the latest articles about web development, design, and technology."
    >
      <BlogList posts={DEMO_POSTS} />
    </BlogLayout>
  );
}
