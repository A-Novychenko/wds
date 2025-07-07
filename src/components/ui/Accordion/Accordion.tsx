'use client';

import { useState } from 'react';

import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  idx,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const isOpen = openIdx === idx;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-base font-semibold transition-colors sm:text-lg xl:text-xl 2xl:text-[22px]"
        onClick={() => toggle(idx)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? 'mt-3 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-primaryText/90 sm:text-base xl:text-[17px] 2xl:text-[18px]">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};
