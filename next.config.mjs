/** @type {import('next').NextConfig} */

import { withMDX, mdxConfig } from './mdx.config.mjs';

// Simplify Next.js configuration for a more stable build
const nextConfig = {
  // Include MDX configuration
  ...mdxConfig,
  
  // Use standalone output for better production deployment
  output: 'standalone',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure image domains
  images: {
    domains: [
      'ui-avatars.com',
      'github.com',
      'avatars.githubusercontent.com',
    ],
  },
};

// Apply MDX configuration
export default withMDX(nextConfig);
