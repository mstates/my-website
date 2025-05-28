import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrism, { ignoreMissing: true }],
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

