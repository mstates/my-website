"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Focus trap inside menu when open
  useEffect(() => {
    if (isOpen) {
      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground flex items-center px-3 py-2"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          ref={menuRef}
          className="bg-background absolute right-0 left-0 mt-2 flex flex-col items-start p-4 pb-4 shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mt-2 block px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground mt-2 block px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground mt-2 block px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground mt-2 block px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
