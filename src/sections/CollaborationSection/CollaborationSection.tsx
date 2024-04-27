import ProblemIcon from '~/icons/problem.svg';
import MeetingIcon from '~/icons/meeting.svg';
import ResultIcon from '~/icons/result.svg';

export const CollaborationSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-20 text-center text-[40px] font-semibold uppercase tracking-[2px]">
          Декілька кроків для розширення вашого бізнесу
        </h2>

        <ul className="flex justify-center gap-20 text-[20px] leading-[1.75] tracking-[0.6px]">
          <li className="list-steps">
            <ProblemIcon
              width="100"
              height="100"
              className="mb-8 text-orange-900"
            />
            <p className="mb-4 text-center text-[22px] font-bold uppercase">
              Проблема
            </p>
            <p className="text-center">
              Прагнете створити власний веб-сайт, привернути увагу клієнта та
              підвищити продажі, але не знаєте з чого почати?
            </p>
          </li>

          <li className="list-steps">
            <MeetingIcon
              width="100"
              height="100"
              className="mb-8 text-emerald-900"
            />
            <p className="mb-4 text-center text-[22px] font-bold uppercase">
              Рішення
            </p>
            <p className="text-center">
              Пропонуємо ефективне рішення разом з нашою командою досвідченою
              командою враховуючи ваші побажання та найкращі практики.
            </p>
          </li>

          <li className="list-steps">
            <ResultIcon
              width="100"
              height="100"
              className="mb-8 text-green-600"
            />
            <p className="mb-4 text-center text-[22px] font-bold uppercase">
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
