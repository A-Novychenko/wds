import Link from 'next/link';

import { cn } from '@/utils';

import { ContactsProps } from './types';

export const Contacts: React.FC<ContactsProps> = ({
  contacts: { email, phone },
}) => {
  return (
    <ul className="xl:flex xl:gap-x-[48px] 2xl:gap-x-6">
      <li className="flex justify-center">
        <Link
          href={email.href}
          className={cn(
            'rounded-[12px] px-2 py-2.5 text-base/normal font-semibold transition-colors xl:px-0',
            'hover:bg-lightBg/20 focus:bg-lightBg/20',
          )}
        >
          {email.label}
        </Link>
      </li>

      <li className="flex justify-center">
        <Link
          href={phone.href}
          className={cn(
            'rounded-[12px] px-2 py-2.5 text-base/normal font-semibold transition-colors xl:px-0',
            'hover:bg-lightBg/20 focus:bg-lightBg/20',
          )}
        >
          {phone.label}
        </Link>
      </li>
    </ul>
  );
};
