import { Accordion, Title } from '@/components/ui';

export const FaqSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, faq } = dict.mainPage.faqSection;

  return (
    <section className="section bg-mainBg text-lightText">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
          {title}
        </Title>

        <ul className="space-y-4">
          {faq.map(({ question, answer }, idx) => {
            return (
              <li
                key={idx}
                className="group rounded-[20px] border border-white/20 bg-white/10 px-6 py-5 shadow-md backdrop-blur-md transition-shadow hover:shadow-lg"
              >
                <Accordion question={question} answer={answer} idx={idx} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
