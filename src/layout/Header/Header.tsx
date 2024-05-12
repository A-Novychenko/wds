import { Contacts, Logo } from '@/components/base';

export const Header: React.FC = () => {
  return (
    <header className=" bg-blue-600 py-4 xl:py-6">
      <div className="container flex items-start justify-between md:items-center">
        <Logo />
        <Contacts />
      </div>
    </header>
  );
};
