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
    aboutSection: IAboutSection;
    developmentStagesSection: IDevelopmentStagesSection;
    latestProjectsSection: ILatestProjectsSection;
    benefitsSection: IBenefitsSection;
    faqSection: IFaqSection;
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
  btnLabel: string;
}

interface IServicesSection {
  title: string;
  services: IServiceItem[];
}

interface IServiceItem {
  label: string;
  description: string;
  price: string;
}

interface IAboutSection {
  title: string;
  paragraphs: string[];
  cta: {
    label: string;
    link: string;
  };
  image: {
    alt: string;
    src: string;
  };
}

interface Stage {
  number: number;
  title: string;
  description: string;
}

interface IDevelopmentStagesSection {
  title: string;
  subtitle?: string;
  stages: Stage[];
}

interface ILatestProject {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link?: string;
}

interface ILatestProjectsSection {
  title: string;
  subtitle: string;
  linkLabel: string;
  projects: ILatestProject[];
}

interface IBenefit {
  text: string;
  title: string;
}
interface IBenefitsSection {
  title: string;
  benefits: IBenefit[];
}

interface IFaqSection {
  title: string;
  faq: {
    question: string;
    answer: string;
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
