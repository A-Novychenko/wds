import { StageCard, Title } from '@/components/ui';

export const DevelopmentStagesSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, subtitle, stages } = dict.mainPage.developmentStagesSection;

  return (
    <section className="section bg-mainBg text-lightText">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
          {title}
        </Title>

        {subtitle && (
          <p className="mb-12 text-[16px]/normal text-accentText md:text-[18px]/normal xl:text-[20px]/normal 2xl:text-[24px]/normal">
            {subtitle}
          </p>
        )}

        {/* Перший ряд: 4 картки */}
        <div className="grid gap-6 xl:grid-cols-4 2xl:grid-cols-4">
          {stages.slice(0, 4).map(stage => (
            <StageCard key={stage.number} stage={stage} />
          ))}
        </div>

        {/* Другий ряд: 3 картки на всю ширину */}
        <div className="mt-8 grid gap-6 xl:grid-cols-3 2xl:grid-cols-3">
          {stages.slice(4).map(stage => (
            <StageCard key={stage.number} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
};
