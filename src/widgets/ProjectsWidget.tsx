import { Link } from "react-router";
import { myProjects } from "../shared";

export const ProjectsWidget = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Проекты
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-purple-700 transition-colors duration-200"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
              {project.title}
            </h3>
            <p className="text-lg text-neutral-400">{project.description}</p>
          </Link>
        ))}
      </div>
      <a
        href="/projects"
        className="inline-block mx-auto px-12 py-5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200"
      >
        Посмотреть все проекты
      </a>
    </section>
  );
};
