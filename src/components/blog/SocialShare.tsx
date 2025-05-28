'use client';

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
  // Set a default URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const hashtags = tags.map(tag => tag.replace(/\s+/g, ''));
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <FacebookShareButton url={shareUrl} quote={title}>
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

