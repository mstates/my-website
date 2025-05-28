import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote';
import readingTime from 'reading-time';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/components/blog/MDXComponents';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';

interface Post {
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
  content: string;
  readingTime: string;
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@yourusername',
    },
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostBySlug(slug: string): Promise<Post | null> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  
  // Check if file exists
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
  } catch (error) {
    console.error('Error checking file:', error);
    return null;
  }
  
  // Read file content
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse front matter
  const { data, content } = matter(fileContents);
  
  // Calculate reading time
  const readingTimeResult = readingTime(content);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    tags: data.tags || [],
    description: data.description || '',
    content,
    readingTime: readingTimeResult.text,
  };
}

async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(async fileName => {
          const slug = fileName.replace(/\.mdx$/, '');
          const post = await getPostBySlug(slug);
          return post;
        })
    );
    
    // Sort posts by date in descending order
    return posts.filter(Boolean).sort((a, b) => {
      if (!a || !b) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }) as Post[];
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Compile MDX content
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });
  
  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      author={post.author}
      readingTime={post.readingTime}
      tags={post.tags}
      description={post.description}
      slug={post.slug}
    >
      {content}
    </BlogPostLayout>
  );
}

