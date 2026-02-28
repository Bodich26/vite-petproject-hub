import type {
  IEducationAndHobbies,
  IMyFullProjects,
  IMyMiniProjects,
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

export const myMiniProjects: IMyMiniProjects[] = [
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

export const myFullProjects: IMyFullProjects[] = [
  {
    id: 1,
    title: "Lunza",
    subtitle: "Типа социальная сеть с фичами",
    idea: "Я хотел создать социальную платформу, вдохновлённую Instagram и Pinterest, но с акцентом на личное пространство и творческое развитие. Пользователь может создавать публикации на своей странице, оставлять комментарии, ставить лайки себе и другим пользователям и общаться через личные сообщения.",
    implementation:
      "Проект был создан как full-stack приложение с использованием современных инструментов разработки. На данный момент реализован следующий функционал: регистрация и авторизация пользователей, страница профиля с возможностью добавления постов с изображениями, система комментариев под публикациями и возможность ставить лайки себе и другим пользователям. Также реализовано переключение темы интерфейса между светлой и тёмной версиями. Дизайн интерфейса был разработан мной самостоятельно — от структуры страниц и пользовательского сценария до визуальной стилистики и адаптивной вёрстки.",
    frontend: [
      "Next",
      "Ts",
      "Tanstack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind",
      "Chakra UI",
      "Lucide Icon",
    ],
    backend: ["Supabase", "Supabase Auth", "Rest Api", "Server Actions"],
    githubUrl: "https://github.com/Bodich26/next-lunza",
    liveUrl: "https://next-lunza.vercel.app/",
    screenshots: [
      "/projects/lunza/1.jpg",
      "/projects/lunza/2.jpg",
      "/projects/lunza/3.jpg",
      "/projects/lunza/4.jpg",
    ],
  },
  {
    id: 2,
    title: "Nikey",
    subtitle: "Интернет магазин кроссовок",
    idea: "fff",
    implementation: "fff",
    frontend: ["fff", "ffff"],
    backend: ["fff", "ffff"],
    githubUrl: "/nikey",
    liveUrl: "/nikey",
    screenshots: [
      "/projects/nikey/1.jpg",
      "/projects/nikey/2.jpg",
      "/projects/nikey/3.jpg",
      "/projects/nikey/4.jpg",
    ],
  },
  {
    id: 3,
    title: "Drivich",
    subtitle: "Перекупы автомобилей Porsche",
    idea: "fff",
    implementation: "fff",
    frontend: ["fff", "ffff"],
    backend: ["fff", "ffff"],
    githubUrl: "/drivich",
    liveUrl: "/drivich",
    screenshots: [
      "/projects/drivich/1.jpg",
      "/projects/drivich/2.jpg",
      "/projects/drivich/3.jpg",
      "/projects/drivich/4.jpg",
    ],
  },
  {
    id: 4,
    title: "Eternal Abyss",
    subtitle: "Cайт музыкльной метал группы",
    idea: "fff",
    implementation: "fff",
    frontend: ["fff", "ffff"],
    backend: ["fff", "ffff"],
    githubUrl: "/eternal",
    liveUrl: "/eternal",
    screenshots: [
      "/projects/eternal/1.jpg",
      "/projects/eternal/2.jpg",
      "/projects/eternal/3.jpg",
      "/projects/eternal/4.jpg",
    ],
  },
  {
    id: 5,
    title: "Todos",
    subtitle: "Красивая Todo c анимашкой",
    idea: "fff",
    implementation: "fff",
    frontend: ["fff", "ffff"],
    backend: ["fff", "ffff"],
    githubUrl: "/todos",
    liveUrl: "/todos",
    screenshots: [
      "/projects/todos/1.jpg",
      "/projects/todos/2.jpg",
      "/projects/todos/3.jpg",
      "/projects/todos/4.jpg",
    ],
  },
  {
    id: 6,
    title: "Car Musc",
    subtitle: "Простая вёрстка сайта из 2021",
    idea: "fff",
    implementation: "fff",
    frontend: ["fff", "ffff"],
    backend: ["fff", "ffff"],
    githubUrl: "/carmusc",
    liveUrl: "/carmusc",
    screenshots: [
      "/projects/carmusc/1.jpg",
      "/projects/carmusc/2.jpg",
      "/projects/carmusc/3.jpg",
      "/projects/carmusc/4.jpg",
    ],
  },
];
