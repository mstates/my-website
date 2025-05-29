# My Website

A modern web application built with Next.js and Tailwind CSS, featuring a blog with MDX support and dark mode.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 MDX for blog posts
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🎭 TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-website.git
   cd my-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local` with your values

### Development

Run the development server:
```bash
npm run dev
```

### Building

Build the project:
```bash
npm run build
```

## Project Structure

```
my-website/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── content/         # MDX blog posts
├── public/              # Static assets
└── styles/             # Global styles
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy with the optimal configuration

## Adding Blog Posts

Add your blog posts as MDX files in `src/content/blog/`. Each post should include frontmatter:

```mdx
---
title: "My Post Title"
date: "2025-05-28"
description: "Brief description of the post"
author:
  name: "Your Name"
  image: "https://github.com/yourusername.png"
tags: ["tag1", "tag2"]
---

Your content here...
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
