import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col" {...props}>
      <Header />
      <main id="main-content" className={cn('flex-1', className)} tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
