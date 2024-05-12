import Image from 'next/image';

import HeroImg from '~/images/hero.jpeg';

export const HeroSection: React.FC = () => {
  return (
    <section className="section  bg-blue-600">
      <div className="container items-center justify-between md:flex">
        <h1 className="text-4xl font-semibold uppercase text-white md:text-5xl xl:w-[50%] xl:text-6xl">
          Ефективні веб-рішення для вашого бізнесу
        </h1>

        <div className="overflow-hidden rounded-full smOnly:hidden">
          <Image
            src={HeroImg}
            width="500"
            height="500"
            priority
            alt="абстракція зображень вебтехнологій"
          />
        </div>
      </div>
    </section>
  );
};
