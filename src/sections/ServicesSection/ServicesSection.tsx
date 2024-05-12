import Image from 'next/image';

import ServicesImg from '~/images/services.jpeg';

export const ServicesSection: React.FC = () => {
  return (
    <section className="section bg-bgSecondary">
      <div className="container xl:flex xl:items-center xl:justify-between">
        <Image
          src={ServicesImg}
          width="500"
          height="500"
          alt="вебсайти на різних пристроях"
          className="mdOnly:mx-auto"
        />
        <div>
          <h2 className="mb-5 text-3xl font-semibold uppercase tracking-[2px] md:text-4xl">
            Що ми пропонуємо
          </h2>
          <ul className="list-marker pl-4 text-[16px] font-medium leading-[2] md:text-xl">
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
    </section>
  );
};
