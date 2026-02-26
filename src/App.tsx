import { ProjectsWidget, SkillsWidget } from "./widgets";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center py-16 space-y-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-950/10" />
      <div className="relative mx-auto w-full space-y-24">
        <section className="space-y-8 text-center">
          <p className="text-lg text-purple-400 font-medium tracking-wide uppercase">
            Front-End ✦ Web Dev
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
            Жуков Богдан
          </h1>
          <div className="mx-auto w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-purple-700">
            <img
              src="path/to/your/photo.jpg"
              alt="Богдан Жуков"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Мне 24 года, я Front-End разработчик, специализируюсь на создании
            адаптивных и современных интерфейсов с использованием React и Next.
            У меня два года опыта в вёрстке и разработке интерактивных
            приложений. Я постоянно развиваюсь через самообучение и практику.
            Ищу команду, в которой смогу расти, вносить вклад в развитие
            продукта и бизнеса.
          </p>
          <a
            href="/path/to/your/cv.pdf"
            download
            className="inline-block px-12 py-5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200"
          >
            Скачать CV
          </a>
          <div className="flex justify-center gap-6 text-purple-400 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </section>
        <SkillsWidget />
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
            Образование && Хобби
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl text-neutral-400 uppercase tracking-wider">
                Образование
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                У меня среднее образование, но основной упор делаю на
                саморазвитие. Благодаря интересу и настойчивости развиваю
                навыки, изучаю новые технологии, практикуюсь и создаю
                собственные pet-проекты. Такой подход помогает мне постоянно
                расти и становиться лучше в своём деле.
              </p>
              <img
                src="path/to/education-image.jpg"
                alt="Образование"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-neutral-400 uppercase tracking-wider">
                Опыт разработки
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                За прошлый год я создал несколько pet-проектов — от простой
                вёрстки до полноценных full-stack приложений. Самостоятельно
                работал над дизайном, улучшал код и производительность,
                исправлял ошибки и внедрял новые функции. Этот опыт научил меня
                находить решения и доводить идеи до результата.
              </p>
              <img
                src="path/to/experience-image.jpg"
                alt="Опыт разработки"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-neutral-400 uppercase tracking-wider">
                Увлечения
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Развиваюсь в веб-разработке и музыке. Творческий человек,
                интересуюсь дизайн-концепциями и интерфейсами, экспериментирую с
                визуальными решениями и прототипами. Также люблю активный отдых.
              </p>
              <img
                src="path/to/hobbies-image.jpg"
                alt="Увлечения"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <ProjectsWidget />
      </div>
    </div>
  );
}
