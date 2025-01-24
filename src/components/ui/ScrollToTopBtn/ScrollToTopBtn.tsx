'use client';

import { useEffect, useState } from 'react';

import Arrow from '~/icons/arrowBtnIcon.svg';

import { cn } from '@/utils/cn';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'container fixed bottom-[300px] left-1/2 z-10 -translate-x-1/2 transform xl:bottom-[360px]',
        {
          flex: isVisible,
          'visually-hidden': !isVisible,
        },
      )}
    >
      <button
        className={cn(
          'flex size-[44px] items-center justify-center rounded-full bg-accentBg p-2 text-secondaryText transition-colors',
          'hover:bg-accentBgEffect hover:text-strongDarkText focus:bg-accentBgEffect focus:text-strongDarkText',
          'absolute right-0 top-0 ml-auto md:-right-4',
        )}
        type="button"
        onClick={scrollToTop}
      >
        <Arrow className="-rotate-45" width={24} height={24} />
      </button>
    </div>
  );
};
