interface IDictionary {
  meta: IMeta;
  common: {
    contacts: IContact;
    logoAlt: string;
    mainNav: IMainNav[];
  };
  mainPage: {
    heroSection: IHeroSection;
    servicesSection: IServicesSection;
    contactSection: IContactSection;
  };
  technicalPages: ITechnicalPages;
}

interface IMeta {
  main: IMetaDataPage;
}

interface IMetaDataPage {
  title: string;
  description: string;
  keywords: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

interface IContact {
  email: {
    href: string;
    label: string;
  };
  phone: {
    href: string;
    label: string;
  };
}

interface IMainNav {
  name: string;
  href: string;
  embedded?: IMainNavEmbedded[];
}

interface IMainNavEmbedded {
  name: string;
  href: string;
}

interface IHeroSection {
  title: {
    accentText: string;
    text: string;
  };
  description: string;
  img: string;
  alt: string;
}

interface IServicesSection {
  title: string;
  services: {
    label: string;
  }[];
}

interface IContactSection {
  title: string;
  img: string;
  alt: string;
  form: IContactFormData;
}

interface ITechnicalPages {
  errorPage: {
    title: string;
    description: string;
    link: {
      label: string;
      settings: {
        href: string;
        externalLink: boolean;
      };
    };
  };
}
