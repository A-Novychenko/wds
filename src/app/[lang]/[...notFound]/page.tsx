import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const NotFoundPage = async ({ params }: { params: Promise<ILang> }) => {
  const lang = (await params).lang || 'uk';
  const dict = await getDictionary(lang);

  const { errorPage } = dict.technicalPages;

  return <PlaceholderSection data={errorPage} />;
};

export default NotFoundPage;
