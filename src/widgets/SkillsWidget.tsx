import { mySkills } from "../shared";

export const SkillsWidget = () => {
  return (
    <section className="relative space-y-8 py-12 overflow-hidden">
      <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center relative z-10">
        Навыки
      </h2>
      <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh] transition-transform duration-500 ease-in-out">
        {mySkills.map((skill, index) => (
          <div key={index}>
            <div className="group bg-purple-900/30 backdrop-blur-md border border-purple-700/50 rounded-xl p-6 text-center shadow-lg hover:shadow-purple-500/20 cursor-pointer">
              <img
                src={`/icons/${skill.toLowerCase()}.svg`}
                alt={skill}
                className="w-10 h-10 mx-auto mb-4"
              />
              <span className="text-white font-medium text-lg">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
