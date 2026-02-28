export interface IMyMiniProjects {
  id: number;
  title: string;
  description: string;
  link: string;
}
export interface ISkill {
  id: number;
  name: string;
  icon: string;
}
export interface IEducationAndHobbies {
  id: number;
  name: string;
  text: string;
  image: string;
}

export interface ISocial {
  id: number;
  name: string;
  icon: string;
  href: string;
}

export interface IMyFullProjects {
  id: number;
  title: string;
  subtitle: string;
  idea: string;
  implementation: string;
  frontend: string[];
  backend: string[];
  liveUrl: string;
  githubUrl: string;
  screenshots: string[];
}
