import { cn } from '@/utils';

import { ServicesCardProps } from './types';

import styles from './ServicesCard.module.css';

export const ServicesCard: React.FC<ServicesCardProps> = ({
  serviceItem: { label, description, price },
}) => {
  return (
    <li
      className={cn(
        'flex min-h-[120px] flex-col justify-between hyphens-auto break-words rounded-[16px] bg-whiteBg p-4',
        'md:min-h-[140px] md:p-6',
        'xl:p-8',
        '2xl:min-h-[180px] 2xl:p-10',
        'text-base/normal tracking-[0.64px] text-secondaryText',
        styles.card,
      )}
    >
      <div>
        <h3
          className={cn(
            'mb-2 font-bold uppercase',
            'xl:text-xl/normal xl:tracking-[0.56px]',
            '2xl:tracking-[0.96px]',
          )}
        >
          {label}
        </h3>
        <p className="mb-4 font-medium tracking-[0.64px] text-strongDarkText">
          {description}
        </p>
      </div>

      <p className="font-bold uppercase tracking-[0.8px] text-strongDarkText xl:text-xl/normal">
        {price}
      </p>
    </li>
  );
};
