import { myMiniProjects, ProjectItem } from "../shared";

export const ProjectsWidget = () => {
  return (
    <section className="space-y-9">
      <h3 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Проекты
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {myMiniProjects.map((project) => (
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
