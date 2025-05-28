'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Giscus from '@giscus/react';

interface CommentsProps {
  className?: string;
}

export function Comments({ className = '' }: CommentsProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to be mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`mt-10 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <Giscus
        id="comments"
        repo="mstates/my-website"
        repoId="R_kgDOLi0EEA" // Replace with your repo ID
        category="Announcements"
        categoryId="DIC_kwDOLi0EEM4CdP3U" // Replace with your category ID
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

