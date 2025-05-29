'use client';

import dynamic from 'next/dynamic';

// Define the Post type to match the BlogList component
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

// Define props interface for this wrapper
interface ClientBlogWrapperProps {
  posts: Post[];
}

// Dynamically import the BlogList component
const DynamicBlogList = dynamic<ClientBlogWrapperProps>(
  () => import('./BlogList').then((mod) => mod.BlogList),
  { 
    // No need for ssr: false since we're already in a client component
    loading: () => (
      <div className="space-y-8">
        <div className="h-12 bg-gray-200 animate-pulse rounded-md w-full"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <div className="h-40 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
);

// Client component wrapper that handles the dynamic import
export function ClientBlogWrapper({ posts }: ClientBlogWrapperProps) {
  // Add error handling for the dynamic component
  try {
    return <DynamicBlogList posts={posts} />;
  } catch (error) {
    console.error('Error loading blog list:', error);
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded-md text-red-800">
        <h3 className="text-lg font-medium">Error loading blog posts</h3>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }
}

