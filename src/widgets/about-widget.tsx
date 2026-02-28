import { CustomButton } from "../shared";

export const AboutWidget = () => {
  return (
    <section className="mb-[100px] text-center space-y-8">
      <p className="text-xl text-purple-400 font-medium tracking-wide uppercase">
        Front-End ✦ Web Dev
      </p>
      <div className="mx-auto w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-purple-700">
        <img
          src="/me.png"
          alt="Богдан Жуков"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
        Жуков Богдан
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
        Мне 24 года, я Front-End разработчик, специализируюсь на создании
        адаптивных и современных интерфейсов с использованием React. У меня два
        года опыта в вёрстке и разработке интерактивных приложений. Я постоянно
        развиваюсь через самообучение и практику. Ищу команду, в которой смогу
        расти, вносить вклад в развитие продукта и бизнеса.
      </p>
      <CustomButton
        text={"Скачать CV"}
        href="/docs/Zhukov-Bogdan-Resume.pdf"
        download
      />
    </section>
  );
};
