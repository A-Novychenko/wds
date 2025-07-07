import Image from 'next/image';
// import Link from 'next/link';

import { Title } from '@/components/ui';

export const AboutSection: React.FC<ISectionProps> = ({ dict }) => {
  // const { title, paragraphs, cta, image } = dict.mainPage.aboutSection;
  const { title, paragraphs, image } = dict.mainPage.aboutSection;

  // const { label, link } = cta;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-6">
          <div className="mb-6 xl:w-1/2">
            <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
              {title}
            </Title>

            <ul className="mb-6">
              {paragraphs.map((text: string, idx: number) => (
                <li key={idx}>
                  <p className="mb-4 text-[16px]/normal text-primaryText last:mb-0 sm:text-[17px]/normal md:text-[18px]/normal xl:text-[20px]/normal 2xl:text-[24px]/normal">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            {/* <Link
              href={link}
              className="block max-w-[440px] rounded-2xl bg-lightBg px-6 py-3.5 text-center font-semibold text-secondaryText transition-colors hover:bg-accentBg focus:bg-accentBgEffect md:mx-auto xl:ml-0 xl:text-xl/normal"
            >
              {label}
            </Link> */}
          </div>

          <div className="size-full max-h-[432px] shrink-0 overflow-hidden rounded-[16px] md:size-[720px] md:max-h-full xl:size-[508px] 2xl:h-[686px] 2xl:w-[828px] 2xl:rounded-[24px]">
            <Image
              alt={image.alt}
              width="828"
              height="828"
              className="size-full object-cover"
              src={image.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
