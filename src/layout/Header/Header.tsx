import { Contacts, Logo } from '@/components/base';

export const Header: React.FC = () => {
  return (
    <header className=" bg-blue-600 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Contacts />
        </div>
      </div>
    </header>
  );
};
