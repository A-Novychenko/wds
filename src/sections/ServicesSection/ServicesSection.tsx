import { ServicesCard, Title } from '@/components/ui';

import { cn } from '@/utils';

export const ServicesSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, services } = dict.mainPage.servicesSection;

  return (
    <section className="section" id="services">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
          {title}
        </Title>

        <ul
          className={cn(
            'flex flex-col gap-4',
            'md:flex-row md:flex-wrap',
            'xl:gap-6',
          )}
        >
          {services &&
            services.map((serviceItem, idx) => (
              <ServicesCard key={idx} serviceItem={serviceItem} />
            ))}
        </ul>
      </div>
    </section>
  );
};
