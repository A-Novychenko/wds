import Link from 'next/link';

import InstagramIcon from '~/icons/instagram.svg';
import TelegramIcon from '~/icons/telegram.svg';

export const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
      <ul className="flex justify-end gap-4">
        <li>
          <Link
            className="text-white transition-all hover:text-accent"
            href="https://www.instagram.com/webdevsynergy/"
            target="_blank"
          >
            <InstagramIcon width={32} height={32} />
          </Link>
        </li>
        <li>
          <Link
            className="text-white transition-all hover:text-accent"
            href="https://t.me/WebDevSynergy_Info"
            target="_blank"
          >
            <TelegramIcon width={32} height={32} />
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-2 text-white">
        <li>
          <Link
            className="transition-all hover:text-accent"
            href="tel:+380665762413"
          >
            +38 066 576 24 13
          </Link>
        </li>
        <li>
          <Link
            className="transition-all hover:text-accent"
            href="tel:+380675959745"
          >
            +38 067 59 59 745
          </Link>
        </li>
      </ul>
    </div>
  );
};
