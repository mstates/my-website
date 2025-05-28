import { MetadataRoute } from 'next';

interface Post {
  slug: string;
  title: string;
  date: string;
}

async function getAllPosts(): Promise<Post[]> {
  // This will be implemented to fetch posts from your chosen source
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://my-website.vercel.app';
  
  // Get all blog posts
  const posts = await getAllPosts();
  
  const blogUrls = posts.map((post) => ({
    url: ,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: ,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
