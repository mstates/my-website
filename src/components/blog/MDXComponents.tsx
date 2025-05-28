import Image from 'next/image';
import Link from 'next/link';
import { MDXRemoteProps } from 'next-mdx-remote';

// Custom components for MDX
export const mdxComponents: MDXRemoteProps['components'] = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h4: (props) => <h4 className="text-lg font-bold mt-4 mb-2" {...props} />,
  p: (props) => <p className="my-4 leading-7" {...props} />,
  a: ({ href, ...props }) => (
    <Link 
      href={href as string} 
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      {...props} 
    />
  ),
  ul: (props) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
  ),
  hr: () => <hr className="my-8 border-muted" />,
  img: ({ src, alt, ...props }) => (
    <div className="my-6">
      <Image
        src={src as string}
        alt={alt as string}
        width={800}
        height={450}
        className="rounded-lg"
        {...props}
      />
      {alt && <p className="text-sm text-muted-foreground mt-2 text-center">{alt}</p>}
    </div>
  ),
  code: (props) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border px-4 py-2 text-left font-bold bg-muted" {...props} />
  ),
  td: (props) => <td className="border px-4 py-2" {...props} />,
};

