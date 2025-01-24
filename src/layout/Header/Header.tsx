import {
  Contacts,
  LangSwitcher,
  Logo,
  MobileMenu,
  NavLinks,
} from '@/components/ui';

import { getDictionary } from '@/utils/dictionaries';

import staticData from '@/data/common.json';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = async ({ lang }) => {
  const {
    common: { contacts, mainNav, logoAlt },
  } = await getDictionary(lang);

  const { langCode } = staticData;

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div className="xl:hidden">
            <Logo lang={lang} alt={logoAlt} />
          </div>

          <div className="hidden xl:block">
            <Logo lang={lang} alt={logoAlt} withText="row" />
          </div>

          <div className="smOnly:hidden">
            <NavLinks mainNav={mainNav} />
          </div>

          <div className="xl:ml-[80px] 2xl:ml-[92px]">
            <LangSwitcher langCode={langCode} lang={lang} />
          </div>

          <MobileMenu>
            <Logo lang={lang} alt={logoAlt} withText="column" />

            <NavLinks mainNav={mainNav} />

            <Contacts contacts={contacts} />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
};
