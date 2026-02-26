import React from "react";
import { Link } from "react-router";

// For images: Added placeholders for photo in "About Me" and optional icons/images in other sections (e.g., for skills or hobbies) - you can replace src with actual paths.
const WelcomeHub = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const visibleSlides = 6; // Adjust based on screen size; can make responsive with useMediaQuery

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(skills.length / visibleSlides),
      );
    }, 2000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);
  // Placeholder projects - replace with real data
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Revolutionary AI tool",
      link: "/project/alpha",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Space exploration sim",
      link: "/project/beta",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Quantum computing demo",
      link: "/project/gamma",
    },
  ];

  // Skills list
  const skills = [
    "Html5",
    "Css3",
    "Scss",
    "Js",
    "Ts",
    "React",
    "Redux",
    "Tanstack",
    "Next",
    "Zustand",
    "Taillwind",
    "Figma",
    "Ui Library",
  ];

  return (
    <div className="relative flex flex-col items-center px-8 py-16 space-y-24">
      {/* Subtle background gradient only */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-950/10" />

      <div className="relative max-w-5xl mx-auto w-full space-y-24">
        {/* About Me Section */}
        <section className="space-y-8 text-center">
          <p className="text-lg text-purple-400 font-medium tracking-wide uppercase">
            Front-End ✦ Web Dev
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
            Жуков Богдан
          </h1>
          {/* Photo placeholder: Circular with border, you can add image */}
          <div className="mx-auto w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-purple-700">
            <img
              src="path/to/your/photo.jpg" // Replace with actual image path
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
            href="/path/to/your/cv.pdf" // Replace with actual CV download link
            download
            className="inline-block px-12 py-5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200"
          >
            Скачать CV
          </a>
          {/* Social icons */}
          <div className="flex justify-center gap-6 text-purple-400 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <i className="fab fa-instagram" />{" "}
              {/* Use Font Awesome or similar for icons */}
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
        <section className="relative space-y-8 py-12 overflow-hidden">
          {/* Subtle section gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-purple-900/30 to-purple-950/20" />

          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center relative z-10">
            Навыки
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Wrapper */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / visibleSlides}%` }}
                  >
                    <div className="group bg-purple-900/30 backdrop-blur-md border border-purple-700/50 rounded-xl p-6 text-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                      {/* Icon */}
                      <img
                        src={`/icons/${skill.toLowerCase()}.svg`} // Replace with actual icon path
                        alt={skill}
                        className="w-16 h-16 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300"
                      />
                      {/* Skill Name */}
                      <span className="text-white font-medium text-lg">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({
                length: Math.ceil(skills.length / visibleSlides),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? "bg-purple-400" : "bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Education & Hobbies Section */}
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
              {/* Optional: Add education-related image */}
              <img
                src="path/to/education-image.jpg" // Replace with actual image if you want to add visual (e.g., books or diploma icon)
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
              {/* Optional: Add experience-related image */}
              <img
                src="path/to/experience-image.jpg" // Replace with actual image (e.g., code screenshot or project icons)
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
              {/* Optional: Add hobbies-related image */}
              <img
                src="path/to/hobbies-image.jpg" // Replace with actual image (e.g., music instruments or outdoor activity)
                alt="Увлечения"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        {/* Projects Teaser Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
            Проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-purple-700 transition-colors duration-200"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                  {project.title}
                </h3>
                <p className="text-lg text-neutral-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
          <a
            href="/projects"
            className="inline-block mx-auto px-12 py-5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200"
          >
            Посмотреть все проекты
          </a>
        </section>
      </div>
    </div>
  );
};

export default WelcomeHub;
