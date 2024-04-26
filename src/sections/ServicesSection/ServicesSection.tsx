import Image from 'next/image';

import ServicesImg from '~/images/services.jpeg';

export const ServicesSection: React.FC = () => {
  return (
    <section className="section bg-bgSecondary">
      <div className="container">
        <div className="flex gap-24">
          <Image
            src={ServicesImg}
            width="600"
            height="600"
            alt="вебсайти на різних пристроях"
          />
          <div className="w-full">
            <h2 className="mb-12 text-center text-[32px] font-semibold">
              Наші послуги
            </h2>
            <ul className="list-marker text-[24px] font-medium leading-[2]">
              <li>
                <p>Розробка дизайну</p>
              </li>
              <li>
                <p>Розробка лендінгів (сайт-візитка)</p>
              </li>
              <li>
                <p>Розробка листівок</p>
              </li>
              <li>
                <p>Розробка багатосторінкових сайтів</p>
              </li>
              <li>
                <p>Розробка веб-застосунків</p>
              </li>
              <li>
                <p>Розробка застосунків для мобільних пристроїв</p>
              </li>
              <li>
                <p>Редизайн та рефакторінг</p>
              </li>
              <li>
                <p>Інші види робіт за домовленістю</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
