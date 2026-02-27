type Props = {
  title: string;
  subtitle?: string;
  description: string;
  idea: string;
  implementation: string;
  frontend: string[];
  backend?: string[];
  githubUrl?: string;
  liveUrl: string;
};

export const PageWidget = ({
  title,
  subtitle,
  description,
  idea,
  implementation,
  frontend,
  backend,
  githubUrl,
  liveUrl,
}: Props) => {
  return (
    <div className="bg-black text-white font-sans py-16">
      <section className="space-y-16">
        {/* Hero: Compact, centered */}
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-purple-400 uppercase">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-neutral-400">{subtitle}</p>
          )}

          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide transition-colors duration-200"
            >
              View Project
            </a>

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

        {/* Idea: Integrated seamlessly */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
            Idea
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {idea}
          </p>
        </div>

        {/* Implementation */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
            Implementation
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {implementation}
          </p>
        </div>

        {/* Tech Stack: Grid for clean layout */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide">
            Technologies
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
    </div>
  );
};
