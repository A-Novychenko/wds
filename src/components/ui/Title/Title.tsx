import { createElement } from 'react';

import { cn } from '@/utils/cn';

import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({
  tag = 'h2',
  style = 'second',
  className,
  children,
  hidden = false,
}) => {
  const { main, second, third } = {
    main:
      style === 'main'
        ? 'text-lightText text-[30px]/normal md:text-[40px]/normal font-bold uppercase xl:text-[44px]/normal 2xl:text-[64px]/normal'
        : '',
    second:
      style === 'second'
        ? 'text-lightText text-[24px]/normal font-semibold tracking-[-0.48px] uppercase md:text-[32px]/normal md:tracking-[-0.64px] 2xl:text-[48px]/normal 2xl:tracking-[-0.96px]'
        : '',
    third: style === 'third' ? '' : '',
  };

  const resultStyles = hidden
    ? 'visually-hidden'
    : cn(main, second, third, className);

  return createElement(
    tag,
    { className: cn(resultStyles, className) },
    children,
  );
};
