import { Contacts, Logo, NavLinks } from '@/components/ui';

import { getDictionary } from '@/utils/dictionaries';

import { FooterProps } from './types';
import { getCurrentYear } from '@/utils';

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const {
    common: { contacts, mainNav, logoAlt },
  } = await getDictionary(lang);

  return (
    <footer className="py-4">
      <div className="container">
        <div className="items-center justify-between xl:flex">
          <div className="xl:hidden">
            <Logo lang={lang} alt={logoAlt} withText="column" />
          </div>

          <div className="hidden xl:block 2xl:mr-[207px]">
            <Logo lang={lang} alt={logoAlt} withText="row" />
          </div>

          <NavLinks mainNav={mainNav} className="flex-col xl:flex-row" />

          <Contacts contacts={contacts} />
        </div>

        <p className="flex h-[40px] items-center justify-center text-base/normal font-light">
          &copy;WDS {getCurrentYear()}
        </p>
      </div>
    </footer>
  );
};
