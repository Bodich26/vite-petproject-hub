import { myProjects, ProjectItem } from "../shared";

export const ProjectsWidget = () => {
  return (
    <section className="space-y-9">
      <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Проекты
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
