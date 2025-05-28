import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-muted-foreground"
        aria-label="Toggle Menu"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 flex flex-col items-start bg-background p-4 pb-4 shadow-lg">
          <Link
            href="/"
            className="mt-2 block px-2 py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mt-2 block px-2 py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="mt-2 block px-2 py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mt-2 block px-2 py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

