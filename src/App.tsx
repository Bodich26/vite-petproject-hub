import {
  AboutWidget,
  HobbiesWidget,
  ProjectsWidget,
  SkillsWidget,
  ExperienceWidget,
} from "./widgets";

export default function Home() {
  return (
    <>
      <AboutWidget />
      <SkillsWidget />
      <ProjectsWidget />
      <ExperienceWidget />
      <HobbiesWidget />
    </>
  );
}
