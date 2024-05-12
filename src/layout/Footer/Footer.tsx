import { Contacts, Logo } from '@/components/base';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 py-4 xl:relative xl:py-6">
      <div className="container flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <Logo />
          <Link
            href="mailto:wds.webdevsynergy@gmail.com"
            className="text-[20px] text-white transition-all hover:text-accent xl:absolute xl:left-[50%] xl:translate-x-[-50%]"
          >
            wds.webdevsynergy@gmail.com
          </Link>
        </div>
        <Contacts />
      </div>
    </footer>
  );
};
