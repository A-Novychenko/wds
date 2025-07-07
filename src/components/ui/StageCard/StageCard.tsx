export const StageCard = ({ stage }: { stage: Stage }) => (
  <div className="relative z-10 animate-fadeInUp rounded-[20px] bg-white/90 px-6 py-8 text-secondaryText shadow-md backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-xl 2xl:rounded-[24px] 2xl:p-10">
    <div className="absolute -left-3 -top-3 size-6 rotate-45 rounded-sm bg-yellow-400 shadow-md" />
    <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide sm:text-xl xl:text-2xl 2xl:text-[28px]">
      {stage.number}. {stage.title}
    </h3>
    <p className="text-sm leading-relaxed text-secondaryText sm:text-base xl:text-[17px] 2xl:text-[18px]">
      {stage.description}
    </p>
  </div>
);
