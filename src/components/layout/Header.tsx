'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Navigation } from './Navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header
      className="bg-background sticky top-0 z-40 w-full border-b"
      role="banner"
    >
      <Container>
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Homepage"
            >
              <span className="inline-block font-bold">My Website</span>
            </Link>
            <nav className="hidden gap-6 md:flex" aria-label="Main Navigation">
              <Link
                href="/"
                className={`flex items-center text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`flex items-center text-sm font-medium transition-colors ${
                  pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={`flex items-center text-sm font-medium transition-colors ${
                  pathname === '/blog' ? 'text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
                aria-current={pathname === '/blog' ? 'page' : undefined}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`flex items-center text-sm font-medium transition-colors ${
                  pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
