import Image from 'next/image';

import HeroImg from '~/images/hero.jpeg';

export const HeroSection: React.FC = () => {
  return (
    <section className="section  bg-blue-600">
      <div className="container">
        <div className="flex items-center gap-24">
          <h1 className="w-[600px] text-[80px] font-semibold uppercase text-white">
            Ефективні веб-рішення для вашого бізнесу
          </h1>
          <div className=" overflow-hidden rounded-full">
            <Image
              src={HeroImg}
              width="600"
              height="600"
              alt="абстракція зображень вебтехнологій"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
