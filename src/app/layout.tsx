import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ClientThemeProvider } from '@/components/ClientThemeProvider';
import { SkipToContent } from '@/components/ui/SkipToContent';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

// Get environment variables with fallbacks
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My Website';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://my-website.vercel.app';
const siteDescription =
  'A modern web application built with Next.js and Tailwind CSS';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  // Add metadataBase to fix metadata warnings
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Modern Web Application`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
  ],
  openGraph: {
    type: 'website',
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ClientThemeProvider>
          <SkipToContent />
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
