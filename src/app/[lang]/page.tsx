import { ContactSection, HeroSection, ServicesSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

export default async function Home({ params }: { params: Promise<ILang> }) {
  const lang = (await params).lang || 'uk';
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict} lang={lang} />

      <ServicesSection dict={dict} lang={lang} />

      <ContactSection dict={dict} lang={lang} />
      {/* <ContactSection /> */}
    </>
  );
}
