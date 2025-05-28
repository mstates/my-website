'use client';

import { useState } from 'react';
import { BlogCard } from './BlogCard';
import { BlogSearch } from './BlogSearch';
import { BlogTags } from './BlogTags';
import { useAnalytics } from '@/lib/analytics';

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

export function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const analytics = useAnalytics();

  // Get all unique tags from posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search query and selected tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // Handle search input change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      analytics.trackEvent('blog_search', { query });
    }
  };

  // Handle tag selection
  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      analytics.trackEvent('blog_filter_by_tag', { tag });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <BlogSearch value={searchQuery} onChange={handleSearch} />
        <BlogTags 
          tags={allTags} 
          selectedTag={selectedTag} 
          onSelectTag={handleTagSelect} 
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-muted bg-card p-8 text-center">
          <h3 className="text-xl font-medium">No posts found</h3>
          <p className="mt-2 text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

