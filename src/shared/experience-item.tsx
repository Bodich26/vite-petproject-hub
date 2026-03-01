import type { ExperienceItemProps } from "./types";
export const ExperienceItem = ({
  title,
  company,
  period,
  description,
  image,
}: ExperienceItemProps) => {
  return (
    <div className="cursor-pointer group bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-purple-700 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Левая часть — текст */}
        <div className="flex-1 space-y-4">
          <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h4>
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="font-medium">{company}</span>
            <span className="text-sm">•</span>
            <span>{period}</span>
          </div>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Правая часть — картинка */}
        <div className="md:w-72 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
