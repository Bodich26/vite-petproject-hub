import { myMiniProjects, ProjectItem } from "../shared";

export const ProjectsWidget = () => {
  return (
    <section className="space-y-9 w-full">
      <h3 className="text-4xl max-sm:text-3xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Проекты
      </h3>
      <div className="max-[450px]:gap-6 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 w-full">
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
