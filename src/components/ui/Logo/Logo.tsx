import Image from 'next/image';
import Link from 'next/link';

import staticData from '@/data/common.json';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ lang, alt, withText }) => {
  const { logo } = staticData as IStaticData;

  return (
    <Link href={`/${lang}/`} className="flex items-center justify-center gap-3">
      {!withText && (
        <Image src={logo.path} alt={alt} width={54} height={40} priority />
      )}

      {withText === 'row' && (
        <Image
          src={logo.pathWithTextRow}
          alt={alt}
          width={196}
          height={40}
          priority
        />
      )}

      {withText === 'column' && (
        <Image
          src={logo.pathWithTextColumn}
          alt={alt}
          width={151}
          height={80}
          priority
        />
      )}
    </Link>
  );
};
