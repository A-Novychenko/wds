import { Nunito_Sans } from 'next/font/google';

import { Footer, Header } from '@/layout';
import { ScrollToTopButton } from '@/components/ui';

import makeMetaData from '@/data/meta';

import '../globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunito_sans',
  display: 'swap',
  adjustFontFallback: false,
});

export async function generateMetadata({ params }: { params: Promise<ILang> }) {
  const lang = (await params).lang || 'uk';

  const meta = await makeMetaData(lang, 'main');

  return meta;
}

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<ILang>;
}>) {
  const lang: LangType = (await params).lang || 'uk';

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${nunitoSans.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header lang={lang} />

          <main className="grow">{children}</main>

          <Footer lang={lang} />

          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
