import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex w-[192px] items-center justify-between">
      <p className="rounded-lg bg-white p-2 font-semibold leading-[1.5]">WDS</p>
      <p className=" font-semibold text-white">WebDevSynergy</p>
    </Link>
  );
};
