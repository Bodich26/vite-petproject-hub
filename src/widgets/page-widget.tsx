import { CustomButton, type IMyFullProjects } from "../shared";

export const PageWidget = ({
  title,
  subtitle,
  idea,
  implementation,
  frontend,
  backend,
  githubUrl,
  liveUrl,
  screenshots = ["ff", "dddd", "ffffff"],
}: IMyFullProjects) => {
  return (
    <section className="mb-[100px] space-y-9">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-purple-400 uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-neutral-400">{subtitle}</p>
          )}
          <div className="flex gap-6">
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
                className="px-8 py-4 border border-purple-700 hover:bg-purple-700/20 rounded-lg transition-colors duration-200"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        {screenshots.length > 0 && (
          <div className="space-y-4">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/10" />
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
              {frontend.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 border border-purple-700 rounded-lg hover:bg-purple-700/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {backend && (
            <div>
              <h3 className="text-2xl text-neutral-400 mb-4 uppercase tracking-wider">
                Back-End
              </h3>
              <div className="flex flex-wrap gap-4">
                {backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 border border-purple-700 rounded-lg hover:bg-purple-700/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
