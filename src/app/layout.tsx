import type { Metadata } from 'next';
import { Shantell_Sans, Geologica } from 'next/font/google';

import { Footer, Header } from '@/layout';

import meta from '@/data/meta';

import './globals.css';

const shantellSans = Shantell_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-shantellSans',
  display: 'swap',
});

const geologica = Geologica({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-geologica',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={`${shantellSans.variable} ${geologica.variable}`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
