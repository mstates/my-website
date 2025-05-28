import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website - Modern Web Application",
  description: "A modern web application built with Next.js and Tailwind CSS",
  keywords: ["Next.js", "React", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "My Website - Modern Web Application",
    description: "A modern web application built with Next.js and Tailwind CSS",
    siteName: "My Website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Website - Modern Web Application",
    description: "A modern web application built with Next.js and Tailwind CSS",
    creator: "@yourusername",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
