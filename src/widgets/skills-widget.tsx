import { mySkills, SkillItem } from "../shared";

export const SkillsWidget = () => {
  return (
    <section className="mb-[100px] space-y-9 ">
      <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center relative z-10">
        Навыки
      </h2>
      <div className="grid grid-cols-6 gap-8 max-lg:grid-cols-4 max-sm:grid-cols-2 max-sm:overflow-y-auto max-sm:h-[80vh] transition-transform duration-500 ease-in-out">
        {mySkills.map((skill) => (
          <SkillItem
            key={skill.id}
            id={skill.id}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};
