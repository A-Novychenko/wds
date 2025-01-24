import Image from 'next/image';

import { Title } from '@/components/ui';

import { cn } from '@/utils';

export const HeroSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, description, img, alt } = dict.mainPage.heroSection;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-6">
          <div>
            <Title
              tag="h1"
              style="main"
              className="mb-2 md:flex md:flex-col 2xl:mb-4"
            >
              <span className="text-accentText">{title.accentText} </span>

              <span style={{ wordBreak: 'break-word' }}> {title.text}</span>
            </Title>

            <p className="mb-4 text-[18px]/normal text-primaryText xl:mb-0 xl:text-[20px]/normal 2xl:text-[28px]/normal">
              {description}
            </p>
          </div>

          <div
            className={cn(
              'size-full max-h-[432px] shrink-0 overflow-hidden rounded-[16px]',
              'md:size-[720px] md:max-h-full',
              'xl:size-[508px]',
              '2xl:h-[686px] 2xl:w-[828px] 2xl:rounded-[24px]',
            )}
          >
            <Image
              src={img}
              width={828}
              height={828}
              alt={alt}
              className="size-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
