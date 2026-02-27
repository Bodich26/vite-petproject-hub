import { Link } from "react-router";
import { myProjects } from "../shared";

export const ProjectsWidget = () => {
  return (
    <section className="space-y-9">
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
    </section>
  );
};
