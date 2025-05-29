'use client';

import { BlogList } from './BlogList';

// Import the Post type and BlogListProps interface from BlogList
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

interface BlogListProps {
  posts: Post[];
}

// This is a client-side wrapper component for BlogList
export function ClientBlogList(props: BlogListProps) {
  return <BlogList {...props} />;
}

