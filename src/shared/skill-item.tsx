import type { ISkill } from "./types";

export const SkillItem = (skill: ISkill) => {
  return (
    <div
      className="group relative overflow-hidden
      transition-all duration-300
      hover:scale-[1.10]"
    >
      <div className="group bg-purple-900/30 backdrop-blur-md border border-purple-700/50 rounded-xl p-6 text-center shadow-lg hover:shadow-purple-500/20 cursor-pointer">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-17 h-14 mx-auto mb-4"
        />
        <span className="text-white font-medium text-2xl">{skill.name}</span>
      </div>
    </div>
  );
};
