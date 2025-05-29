'use client';

import { useState, useEffect } from 'react';
import { 
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  RedditShareButton, RedditIcon,
  EmailShareButton, EmailIcon,
} from 'react-share';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  className?: string;
}

export function SocialShare({ 
  url, 
  title, 
  description = '', 
  tags = [], 
  className = '' 
}: SocialShareProps) {
  // Initialize with the provided URL or an empty string for SSR safety
  const [shareUrl, setShareUrl] = useState(url || '');
  const hashtags = tags.map(tag => tag.replace(/\s+/g, ''));
  
  // Update shareUrl on the client side if needed
  useEffect(() => {
    // If no URL was provided, use the current page URL (client-side only)
    if (!url && typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, [url]);
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <FacebookShareButton url={shareUrl} hashtag={hashtags.length > 0 ? `#${hashtags[0]}` : undefined}>
        <FacebookIcon size={32} round />
        <span className="sr-only">Share on Facebook</span>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags}>
        <TwitterIcon size={32} round />
        <span className="sr-only">Share on Twitter</span>
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} title={title} summary={description}>
        <LinkedinIcon size={32} round />
        <span className="sr-only">Share on LinkedIn</span>
      </LinkedinShareButton>

      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={32} round />
        <span className="sr-only">Share on Reddit</span>
      </RedditShareButton>

      <EmailShareButton url={shareUrl} subject={title} body={`Check out this article: ${title}\n\n${shareUrl}`}>
        <EmailIcon size={32} round />
        <span className="sr-only">Share via Email</span>
      </EmailShareButton>
    </div>
  );
}

