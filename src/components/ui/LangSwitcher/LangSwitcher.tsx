'use client';

import { useRouter, usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';

import LineIcon from '~/icons/line.svg';

import { LangSwitcherProps } from './types';

export const LangSwitcher: React.FC<LangSwitcherProps> = ({
  lang,
  langCode,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const processPathname = (pathname: string) => {
    if (pathname.startsWith('/uk') || pathname.startsWith('/en')) {
      return pathname.replace(/^\/(uk|en)/, '');
    }

    return pathname;
  };

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${processPathname(pathname)}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        className={cn(
          'rounded-lg p-2.5 text-base/normal font-semibold transition-colors',
          lang === 'uk'
            ? 'bg-lightBg/20'
            : 'hover:text-accentText focus:text-accentText',
        )}
        onClick={() => switchLocale('uk')}
      >
        {langCode.ua}
      </button>

      <div className="flex size-5 items-center justify-center">
        <LineIcon width="2" height="20" className="block h-[20px] w-[2px]" />
      </div>

      <button
        type="button"
        className={cn(
          'rounded-lg p-2.5 text-base/normal font-semibold transition-colors',
          lang === 'en'
            ? 'bg-lightBg/20'
            : 'hover:text-accentText focus:text-accentText',
        )}
        onClick={() => switchLocale('en')}
      >
        {langCode.en}
      </button>
    </div>
  );
};
