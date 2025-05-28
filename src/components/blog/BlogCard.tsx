import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: {
      name: string;
      image: string;
    };
    tags: string[];
    readingTime: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col space-y-4 bg-background p-6 rounded-lg border transition-colors hover:border-foreground"
      >
        <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center space-x-4">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">{post.author.name}</p>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-1">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
