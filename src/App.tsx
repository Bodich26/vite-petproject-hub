import {
  AboutWidget,
  HobbiesWidget,
  ProjectsWidget,
  SkillsWidget,
} from "./widgets";

export default function Home() {
  return (
    <>
      <AboutWidget />
      <SkillsWidget />
      <HobbiesWidget />
      <ProjectsWidget />
    </>
  );
}
