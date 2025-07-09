import { Metadata } from 'next';

import { getDictionary } from '@/utils/dictionaries';

import commonData from '@/data/common.json';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const makeMetaData = async (lang: LangType, page: MetaPage) => {
  const dictionary: IDictionary = await getDictionary(lang);

  const { title, description, keywords, images }: IMetaDataPage =
    dictionary.meta[page as keyof typeof dictionary.meta];

  const locale = lang === 'uk' ? 'uk_UA' : 'en_US';

  const BASE_URL = NEXT_PUBLIC_BASE_URL as string;

  const meta: Metadata = {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    authors: [{ name: commonData.companyName }],
    applicationName: commonData.companyName,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        uk: `${BASE_URL}/uk`,
        en: `${BASE_URL}/en`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}`,
      siteName: commonData.companyName,
      locale,
      type: 'website',
      images,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images,
    },
    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
          type: 'image/x-icon',
          sizes: 'any',
        },
        {
          url: '/meta/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
        {
          url: '/meta/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          type: 'image/png',
          sizes: '512x512',
        },
        {
          url: '/meta/maskable.png',
          type: 'image/png',
          sizes: '512x512',
        },
      ],
      shortcut: [
        {
          url: '/meta/favicon.ico',
          type: 'image/x-icon',
        },
      ],
      apple: [
        {
          url: '/meta/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180',
        },
      ],
      other: [
        {
          rel: 'apple-touch-icon',
          url: '/meta/apple-touch-icon.png',
        },
      ],
    },
  };

  return meta;
};

export default makeMetaData;
