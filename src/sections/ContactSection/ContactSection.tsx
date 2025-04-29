import Image from 'next/image';

import { ContactForm } from '@/components/base';
import { Title } from '@/components/ui';

import { cn } from '@/utils';

export const ContactSection: React.FC<ISectionProps> = ({ dict, lang }) => {
  const { title, img, alt } = dict.mainPage.contactSection;
  const data = dict.mainPage.contactSection.form;

  return (
    <section className="section" id="contacts">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4">
          {title}
        </Title>

        <div className="xl:flex xl:gap-6">
          <div
            className={cn(
              'mb-4 size-full max-h-[432px] shrink-0 overflow-hidden rounded-[16px]',
              'md:size-[720px] md:max-h-full',
              'xl:mb-0 xl:h-[458px] xl:w-[508px]',
              '2xl:h-[522px] 2xl:w-[828px] 2xl:rounded-[24px]',
            )}
          >
            {lang && (
              <Image
                src={img}
                alt={alt}
                width={828}
                height={522}
                className="size-full object-cover"
              />
            )}
          </div>

          <ContactForm data={data} />
        </div>
      </div>
    </section>
  );
};
