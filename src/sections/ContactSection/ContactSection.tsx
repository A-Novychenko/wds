import { ContactForm } from '@/components/base';
import Image from 'next/image';

import ContactImg from '~/images/studio.jpeg';

export const ContactSection: React.FC = () => {
  return (
    <section className="section bg-blue-600">
      <div className="container">
        <h2 className="mb-20 text-center text-[40px] font-semibold uppercase tracking-[2px]">
          Є запитання, бажаєте консультацію? <br /> Напишіть нам!
        </h2>

        <div className="flex items-center gap-20">
          <div>
            <Image
              src={ContactImg}
              width="600"
              height="600"
              alt="вебсайти на різних пристроях"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
