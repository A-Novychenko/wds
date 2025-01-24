import { cn } from '@/utils';

import { ServicesCardProps } from './types';

import styles from './ServicesCard.module.css';

export const ServicesCard: React.FC<ServicesCardProps> = ({ label }) => {
  return (
    <li
      className={cn(
        'flex min-h-[120px] items-center justify-center rounded-[16px] bg-whiteBg p-4',
        'md:min-h-[140px] md:p-6',
        'xl:p-8',
        '2xl:min-h-[180px] 2xl:p-10',
        styles.card,
      )}
    >
      <p
        className={cn(
          'text-center text-base/normal font-bold uppercase tracking-[0.64px] text-secondaryText',
          'xl:text-sm/normal xl:tracking-[0.56px]',
          '2xl:text-xl/normal 2xl:tracking-[0.8px]',
        )}
      >
        {label}
      </p>
    </li>
  );
};
