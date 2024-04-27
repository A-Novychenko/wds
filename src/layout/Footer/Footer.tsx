import { Contacts, Logo } from '@/components/base';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="section bg-blue-600">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Link
            href="mailto:wds.webdevsynergy@gmail.com"
            className="text-[20px] text-white transition-all hover:text-accent"
          >
            wds.webdevsynergy@gmail.com
          </Link>
          <Contacts />
        </div>
      </div>
    </footer>
  );
};
