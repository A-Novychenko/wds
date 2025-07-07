import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/components/ui';

export const LatestProjectsSection: React.FC<ISectionProps> = ({ dict }) => {
  const { title, subtitle, linkLabel, projects } =
    dict.mainPage.latestProjectsSection;

  return (
    <section className="section bg-mainBg/90 text-lightText">
      <div className="container">
        <Title tag="h2" style="second" className="mb-4 xl:mb-6 2xl:mb-8">
          {title}
        </Title>

        <p className="mb-12 text-[16px]/normal text-accentText md:text-[18px]/normal xl:text-[20px]/normal 2xl:text-[24px]/normal">
          {subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {projects.map((project: ILatestProject, idx: number) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[20px] bg-white/90 p-4 text-secondaryText shadow-md backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-xl 2xl:rounded-[24px] 2xl:p-6"
            >
              <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-[16px]">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold uppercase sm:text-xl xl:text-2xl 2xl:text-[28px]">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base xl:text-[17px] 2xl:text-[18px]">
                {project.description}
              </p>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-accentText underline-offset-4 hover:underline"
                >
                  {linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
