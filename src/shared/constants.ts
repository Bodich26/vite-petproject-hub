import type {
  IEducationAndHobbies,
  IMyProjects,
  ISkill,
  ISocial,
} from "./types";

export const mySkills: ISkill[] = [
  { id: 1, name: "Html5", icon: "/skills/html.svg" },
  { id: 2, name: "Css3", icon: "/skills/css.svg" },
  { id: 3, name: "Scss", icon: "/skills/scss.svg" },
  { id: 4, name: "Js", icon: "/skills/js.svg" },
  { id: 5, name: "Ts", icon: "/skills/ts.svg" },
  { id: 6, name: "React", icon: "/skills/react.svg" },
  { id: 7, name: "Redux", icon: "/skills/redux.svg" },
  { id: 8, name: "Zustand", icon: "/skills/zustand.svg" },
  { id: 9, name: "Tanstack", icon: "/skills/tanstack.svg" },
  { id: 10, name: "Next", icon: "/skills/next.svg" },
  { id: 11, name: "Tailwind", icon: "/skills/tailwind.svg" },
  { id: 12, name: "Figma", icon: "/skills/figma.svg" },
];

export const myProjects: IMyProjects[] = [
  {
    id: 1,
    title: "Lunza",
    description: "Типа социальная сеть с фичами",
    link: "/lunza",
  },
  {
    id: 2,
    title: "Nikey",
    description: "Интернет магазин кроссовок",
    link: "/nikey",
  },
  {
    id: 3,
    title: "Drivich",
    description: "Перекупы автомобилей Porsche",
    link: "/drivich",
  },
  {
    id: 4,
    title: "Eternal Abyss",
    description: "Cайт музыкльной метал группы",
    link: "/eternal",
  },
  {
    id: 5,
    title: "Todos",
    description: "Красивая Todo c анимашкой",
    link: "/todos",
  },
  {
    id: 6,
    title: "Car Musc",
    description: "Простая вёрстка сайта из 2021",
    link: "/carmusc",
  },
];

export const educationAndHobbies: IEducationAndHobbies[] = [
  {
    id: 1,
    name: "Образование",
    text: "У меня среднее образование, но основной упор делаю на саморазвитие. Благодаря интересу и настойчивости развиваю навыки, изучаю новые технологии, практикуюсь и создаю собственные pet-проекты. Такой подход помогает мне постоянно расти и становиться лучше в своём деле.",
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "Опыт разработки",
    text: "За прошлый год я создал несколько pet-проектов — от простой вёрстки до полноценных full-stack-приложений. Самостоятельно работал над дизайном, улучшал код и производительность, исправлял ошибки и внедрял новые функции. Этот опыт научил меня находить решения и доводить идеи до результата.",
    image: "/2.jpg",
  },
  {
    id: 3,
    name: "Увлечения",
    text: "Развиваюсь в веб-разработке и музыке. Несколько лет занимался акустической гитарой, сейчас уже полгода играю на электрогитаре: изучаю рифы, создаю что-то своё. Творческий человек, раньше интересовался дизайном и интерфейсами. Люблю активный отдых и рыбалку.",
    image: "/3.jpg",
  },
];

export const mySocial: ISocial[] = [
  {
    id: 1,
    name: "github",
    icon: "/github.svg",
    href: "https://github.com/Bodich26",
  },
  {
    id: 2,
    name: "telegram",
    icon: "/telegram.svg",
    href: "https://t.me/bodich12",
  },
  {
    id: 3,
    name: "Mail",
    icon: "/mail.svg",
    href: "mailto:4634815@gmail.com",
  },
];
