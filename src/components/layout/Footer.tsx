import Link from 'next/link';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-background border-t" role="contentinfo">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-muted-foreground text-sm font-medium underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground text-sm font-medium underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
