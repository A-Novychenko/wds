import {
  AboutSection,
  BenefitsSection,
  ContactSection,
  DevelopmentStagesSection,
  FaqSection,
  HeroSection,
  LatestProjectsSection,
  ServicesSection,
} from '@/sections';

import commonData from '@/data/common.json';

import { getDictionary } from '@/utils/dictionaries';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default async function Home({ params }: { params: Promise<ILang> }) {
  const lang = (await params).lang || 'uk';
  const dict = await getDictionary(lang);

  const { title, description, namePage } = dict.meta.main;

  const { companyName } = commonData;

  const pageUrl = `${BASE_URL}/${lang}`;
  const orgId = `${BASE_URL}/#organization`;
  const websiteId = `${pageUrl}/#website`;
  const webpageId = `${pageUrl}/#webpage`;
  const breadcrumbId = `${pageUrl}/#breadcrumb`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'WebDevSynergy',
        url: pageUrl,
        logo: `${BASE_URL}/meta/logo.png`,
        sameAs: [
          'https://www.facebook.com/YourPage',
          'https://www.linkedin.com/company/your',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: pageUrl,
        name: companyName,
        inLanguage: lang,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: namePage,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection dict={dict} lang={lang} />

      <ServicesSection dict={dict} lang={lang} />

      <AboutSection dict={dict} lang={lang} />

      <DevelopmentStagesSection dict={dict} lang={lang} />

      <LatestProjectsSection dict={dict} lang={lang} />

      <BenefitsSection dict={dict} lang={lang} />

      <FaqSection dict={dict} lang={lang} />

      <ContactSection dict={dict} lang={lang} />
    </>
  );
}
