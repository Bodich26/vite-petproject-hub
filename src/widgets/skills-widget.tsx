import { mySkills, SkillItem } from "../shared";

export const SkillsWidget = () => {
  return (
    <section className="mb-[100px] space-y-9 w-full">
      <h2 className="text-4xl max-sm:text-3xl font-bold text-purple-400 uppercase tracking-wide text-center relative z-10">
        Навыки
      </h2>
      <div className="max-[450px]:gap-6 grid grid-cols-6 gap-8 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 transition-transform duration-500 ease-in-out">
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
