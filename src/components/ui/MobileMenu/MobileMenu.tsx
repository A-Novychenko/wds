'use client';

import { useEffect, useRef, useState } from 'react';

import MobMenuIcon from '~/icons/mob-menu-burger.svg';
import CloseMenuIcon from '~/icons/close.svg';

import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="bg-transparent p-2"
        type="button"
        onClick={handleToggleMenu}
      >
        <MobMenuIcon className="h-[22px] w-[32px] transition-transform hover:scale-110 focus:scale-110" />
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-white/20 p-2">
          <div
            ref={menuRef}
            onClick={e => {
              const target = e.target as HTMLElement;

              if (target.tagName === 'A' || target.tagName === 'IMG') {
                setIsOpen(false);
              }
            }}
            className="relative min-h-[320px] rounded-2xl bg-mainBg p-4"
          >
            <button
              className="absolute right-4 top-5 ml-auto block bg-transparent transition-transform hover:scale-110 focus:scale-110"
              type="button"
              onClick={handleToggleMenu}
            >
              <CloseMenuIcon className="size-[32px]" />
            </button>

            <div className="pt-10">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};
