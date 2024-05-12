import { ContactForm } from '@/components/base';
import Image from 'next/image';

import ContactImg from '~/images/studio.jpeg';

export const ContactSection: React.FC = () => {
  return (
    <section className="section bg-blue-600">
      <div className="container">
        <h2 className="mb-7 text-3xl font-semibold uppercase tracking-[2px] md:text-center md:text-4xl">
          Є запитання чи бажаєте консультацію? <br /> Напишіть нам!
        </h2>

        <div className="items-center md:flex md:gap-6 xl:justify-between">
          <div className="overflow-hidden rounded-br-[38px] rounded-tl-[38px]">
            <Image
              src={ContactImg}
              width="550"
              height="550"
              alt="вебсайти на різних пристроях"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
