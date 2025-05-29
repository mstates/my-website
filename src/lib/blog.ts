import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

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

/**
 * Gets all blog posts with their metadata
 * Simplified version without custom caching
 */
export async function getAllPostMetadata(): Promise<PostMetadata[]> {

  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    
    // Create the directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }
    
    // Read all files in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Get post data from each file
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        // Remove .mdx extension to get the slug
        const slug = fileName.replace(/\.mdx$/, '');
        
        // Read the markdown file
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse the frontmatter
        const { data, content } = matter(fileContents);
        
        // Calculate reading time
        const readingTimeResult = readingTime(content);
        
        // Ensure required fields are present
        if (!data.title) data.title = 'Untitled';
        if (!data.date) data.date = new Date().toISOString();
        if (!data.excerpt && !data.description) data.excerpt = content.slice(0, 200) + '...';
        
        // Create post metadata
        const postMetadata: PostMetadata = {
          slug,
          title: data.title,
          excerpt: data.excerpt || data.description || '',
          date: data.date,
          author: data.author || { name: 'Anonymous', image: '/images/avatar.png' },
          tags: data.tags || [],
          readingTime: readingTimeResult.text,
        };
        
        return postMetadata;
      });
    
    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return sortedPosts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * Gets a specific blog post by slug
 * Simplified version without custom caching
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    // Read and parse the file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const readingTimeResult = readingTime(content);
    
    // Ensure required fields are present
    if (!data.title) data.title = 'Untitled';
    if (!data.date) data.date = new Date().toISOString();
    if (!data.excerpt && !data.description) data.excerpt = content.slice(0, 200) + '...';
    
    // Create post object
    const post: Post = {
      slug,
      title: data.title,
      excerpt: data.excerpt || data.description || '',
      date: data.date,
      content,
      author: data.author || { name: 'Anonymous', image: '/images/avatar.png' },
      tags: data.tags || [],
      readingTime: readingTimeResult.text,
    };
    
    return post;
  } catch (error) {
    console.error(`Error getting post by slug "${slug}":`, error);
    return null;
  }
}

// Helper for consistent naming across imports
export async function getAllPosts(): Promise<PostMetadata[]> {
  return getAllPostMetadata();
}
