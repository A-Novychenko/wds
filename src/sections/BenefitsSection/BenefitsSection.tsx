import { Title } from '@/components/ui';

export const BenefitsSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, benefits } = dict.mainPage.benefitsSection;

  return (
    <section className="section bg-mainBg text-lightText">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
          {title}
        </Title>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {benefits.map(({ title, text }, idx) => (
            <li
              key={idx}
              className="group relative z-10 flex flex-col gap-4 rounded-[20px] border border-white/20 bg-white px-6 py-8 text-secondaryText shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.3)] 2xl:rounded-[24px] 2xl:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black shadow-md sm:size-12 xl:size-14 2xl:size-16">
                  <span className="text-sm font-bold sm:text-base xl:text-lg 2xl:text-xl">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold sm:text-lg xl:text-xl 2xl:text-[22px]">
                  {title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-secondaryText sm:text-base xl:text-[17px] 2xl:text-[18px]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
