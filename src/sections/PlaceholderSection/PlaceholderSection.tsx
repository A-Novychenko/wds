// import { ButtonLink, Title } from '@/components/ui';

import Link from 'next/link';
import { PlaceholderSectionProps } from './types';

export const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  data,
}) => {
  const {
    title,
    description,
    link: { label, settings },
  } = data;
  return (
    <section className="section my-auto">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* <Title
            tag="h1"
            className="mb-1 text-[32px]/[1.25] md:mb-2 md:text-[38px]/[1.26] xl:text-[54px]/[1.19]"
          >
            {title}
          </Title> */}

          <h1>{title}</h1>

          <p className="mb-2 text-base/normal text-primaryText md:mb-4 xl:text-lg/normal">
            {description}
          </p>

          <div className="w-full md:max-w-[288px]">
            <Link href={settings.href}>{label}</Link>
            {/* <ButtonLink type="link" settings={settings}>
              {label}
            </ButtonLink> */}
          </div>
        </div>
      </div>
    </section>
  );
};
