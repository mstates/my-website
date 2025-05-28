import Link from 'next/link';
import { Container } from '../ui/Container';

import { ThemeToggle } from '../ui/ThemeToggle';
import { Navigation } from './Navigation';

export function Header() {
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
                className="text-foreground hover:text-primary flex items-center text-sm font-medium transition-colors"
                aria-current={
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/'
                    ? 'page'
                    : undefined
                }
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary flex items-center text-sm font-medium transition-colors"
                aria-current={
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/about'
                    ? 'page'
                    : undefined
                }
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary flex items-center text-sm font-medium transition-colors"
                aria-current={
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/blog'
                    ? 'page'
                    : undefined
                }
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary flex items-center text-sm font-medium transition-colors"
                aria-current={
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/contact'
                    ? 'page'
                    : undefined
                }
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
