import { CustomButton, TechItem, type IMyFullProjects } from "../shared";

export const PageWidget = ({
  title,
  subtitle,
  idea,
  implementation,
  frontend,
  backend,
  githubUrl,
  liveUrl,
  screenshots,
}: IMyFullProjects) => {
  return (
    <section className="mb-[100px] space-y-9 w-full">
      <div className="flex justify-between gap-8 items-center max-md:flex-wrap">
        <div className="space-y-6 min-w-[35%] max-md:min-w-full max-md:text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide text-purple-400 uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-neutral-400">{subtitle}</p>
          )}
          <div className="flex flex-col gap-6 max-md:max-w-[300px] max-md:m-auto">
            <CustomButton
              text={"Перейти на сайт"}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 py-4 border border-purple-700 hover:bg-purple-700/20 rounded-lg transition-colors duration-200"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        {screenshots.length > 0 && (
          <div className="grid lg:grid-cols-2 max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory gap-6 max-lg:scrollbar-hide">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="max-lg:flex-shrink-0 max-lg:snap-center max-lg:w-full border border-purple-700 relative rounded-lg overflow-hidden shadow-md cursor-pointer group transition-all duration-300 hover:scale-[1.08]"
              >
                <img
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-4 pt-8 border-t border-purple-700/50">
        <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
          Идея
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          {idea}
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
          Реализация
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          {implementation}
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
          Инструменты
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-neutral-400 mb-4 uppercase tracking-wider">
              Front-End
            </h3>
            <div className="flex flex-wrap gap-4">
              {frontend.map((tech, index) => (
                <TechItem key={index} tech={tech} />
              ))}
            </div>
          </div>
          {backend && (
            <div>
              <h3 className="text-2xl text-neutral-400 mb-4 uppercase tracking-wider">
                Back-End
              </h3>
              <div className="flex flex-wrap gap-4">
                {backend.map((tech, index) => (
                  <TechItem key={index} tech={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
