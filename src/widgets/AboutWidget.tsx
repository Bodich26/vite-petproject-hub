export const AboutWidget = () => {
  return (
    <section className="mb-[100px] text-center space-y-9">
      <p className="text-xl text-purple-400 font-medium tracking-wide uppercase">
        Front-End ✦ Web Dev
      </p>
      <div className="mx-auto w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-purple-700">
        <img
          src="path/to/your/photo.jpg"
          alt="Богдан Жуков"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
        Жуков Богдан
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
        Мне 24 года, я Front-End разработчик, специализируюсь на создании
        адаптивных и современных интерфейсов с использованием React. У меня два
        года опыта в вёрстке и разработке интерактивных приложений. Я постоянно
        развиваюсь через самообучение и практику. Ищу команду, в которой смогу
        расти, вносить вклад в развитие продукта и бизнеса.
      </p>
      <a
        href="/path/to/your/cv.pdf"
        download
        className="inline-block px-12 py-3.5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200"
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
  );
};
