import Link from 'next/link';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">My Website</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="flex items-center text-sm font-medium text-foreground"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            {/* You can add more elements here like theme toggle, auth buttons, etc. */}
          </div>
        </div>
      </Container>
    </header>
  );
}

