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

import { getDictionary } from '@/utils/dictionaries';

export default async function Home({ params }: { params: Promise<ILang> }) {
  const lang = (await params).lang || 'uk';
  const dict = await getDictionary(lang);

  return (
    <>
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
