export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  readingTime: string;
};

export type PostMetadata = Omit<Post, 'content'>;

export async function getAllPosts(): Promise<PostMetadata[]> {
  // This will be implemented to fetch posts from your data source
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // This will be implemented to fetch a specific post
  return null;
}
