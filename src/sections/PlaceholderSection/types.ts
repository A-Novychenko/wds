export type PlaceholderSectionProps = {
  data: IPlaceholder;
};

interface IPlaceholder {
  title: string;
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
}
