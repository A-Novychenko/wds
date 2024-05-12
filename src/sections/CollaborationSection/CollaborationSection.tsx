import MeetingIcon from '~/icons/meeting.svg';
import ProblemIcon from '~/icons/problem.svg';
import ResultIcon from '~/icons/result.svg';

export const CollaborationSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-7 text-center text-3xl font-semibold uppercase tracking-[2px] md:mb-20 md:text-4xl">
          Декілька кроків для розширення вашого бізнесу
        </h2>

        <ul className="flex flex-col justify-center gap-6 text-[16px] leading-[1.75] tracking-[0.6px] md:text-xl xl:flex-row">
          <li className="list-steps">
            <ProblemIcon
              width="90"
              height="90"
              className="mb-8 size-[60px] text-orange-900 md:size-[90px]"
            />
            <p className="mb-4 text-center text-[20px] font-bold uppercase md:text-[22px]">
              Проблема
            </p>
            <p className="text-center">
              Прагнете створити власний веб-сайт, привернути увагу клієнта та
              підвищити продажі, але не знаєте з чого почати?
            </p>
          </li>

          <li className="list-steps">
            <MeetingIcon
              width="90"
              height="90"
              className="mb-8 size-[60px] text-emerald-900 md:size-[90px]"
            />
            <p className="mb-4 text-center text-[20px] font-bold uppercase md:text-[22px]">
              Рішення
            </p>
            <p className="text-center">
              Пропонуємо ефективне рішення разом з нашою досвідченою командою,
              враховуючи ваші побажання та найкращі практики.
            </p>
          </li>

          <li className="list-steps">
            <ResultIcon
              width="90"
              height="90"
              className="mb-8 size-[60px] text-green-600 md:size-[90px]"
            />
            <p className="mb-4 text-center text-[20px] font-bold uppercase md:text-[22px]">
              Результат
            </p>
            <p className="text-center">
              Ви гарантовано отримаєте високоякісний продукт та підвищення
              ефективності бізнесу
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
