import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colour Rays | Professional Painting Services',
  description:
    'Transform your space with Colour Rays. Professional interior, exterior, and commercial painting with 15+ years of experience. Licensed, insured, and satisfaction guaranteed.',
  keywords:
    'painting services, interior painting, exterior painting, commercial painting, cabinet refinishing, professional painters',
  authors: [{ name: 'Colour Rays' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
