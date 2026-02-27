import { Link } from "react-router";
import type { IMyProjects } from "./types";

export const ProjectItem = (project: IMyProjects) => {
  return (
    <Link
      to={project.link}
      className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-purple-700 transition-colors duration-200"
    >
      <h3 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
        {project.title}
      </h3>
      <p className="text-lg text-neutral-400">{project.description}</p>
    </Link>
  );
};
