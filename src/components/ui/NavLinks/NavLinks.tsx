import Link from 'next/link';

import { cn } from '@/utils';

import { NavLinksProps } from './types';

export const NavLinks: React.FC<NavLinksProps> = ({
  mainNav,
  className,
  lang,
}) => {
  return (
    <nav>
      <ul className={cn('md:flex 2xl:gap-6', className)}>
        {mainNav &&
          mainNav.map(({ name, href }, idx) => (
            <li key={idx} className="flex justify-center">
              <Link
                // href={href}
                href={`${lang}/${href}`}
                className={cn(
                  'rounded-[12px] p-3 text-base/normal font-semibold transition-colors',
                  'hover:bg-lightBg/20 focus:bg-lightBg/20',
                )}
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
