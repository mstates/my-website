import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Home() {
  return (
    <Layout>
      <Container className="py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to My Website
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            A modern web application built with Next.js and Tailwind CSS. Get started by editing the source files to customize your site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/getting-started">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Next.js</CardTitle>
              <CardDescription>The React Framework for the Web</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Next.js enables you to create full-stack web applications by extending the latest React features.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                  Learn more about Next.js
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>A utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Tailwind CSS makes it easy to build modern websites without ever leaving your HTML.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                  Learn more about Tailwind
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>JavaScript with syntax for types</CardDescription>
            </CardHeader>
            <CardContent>
              <p>TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
                  Learn more about TypeScript
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Layout>
  );
}
