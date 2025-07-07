export type NavLinksProps = {
  mainNav: Link[];
  className?: string;
  lang: LangType;
};

type Link = {
  name: string;
  href: string;
};
