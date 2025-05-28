import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    image: string;
    bio?: string;
  };
  tags: string[];
  description: string;
  readingTime: string;
};

export async function getAllPostMetadata(): Promise<PostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx') && fileName !== 'index.ts')
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const readingTimeResult = readingTime(content);
        
        return {
          slug,
          title: data.title,
          date: data.date,
          author: data.author,
          tags: data.tags || [],
          description: data.description || '',
          readingTime: readingTimeResult.text,
        };
      });
    
    // Sort posts by date
    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

