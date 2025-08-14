import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Muzammil Tahir - Full-Stack Developer & CS Student',
  description: 'Final-year Computer Science student with expertise in React, Python, AI, and modern web technologies. CGPA 3.94. Available for full-time opportunities.',
  keywords: 'Muhammad Muzammil Tahir, Full-Stack Developer, Computer Science, React, Python, Next.js, Portfolio, CV',
  authors: [{ name: 'Muhammad Muzammil Tahir' }],
  creator: 'Muhammad Muzammil Tahir',
  openGraph: {
    title: 'Muhammad Muzammil Tahir - Full-Stack Developer & CS Student',
    description: 'Final-year Computer Science student with expertise in React, Python, AI, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Muzammil Tahir - Full-Stack Developer & CS Student',
    description: 'Final-year Computer Science student with expertise in React, Python, AI, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}