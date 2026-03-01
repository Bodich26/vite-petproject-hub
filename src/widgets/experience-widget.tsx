import { ExperienceItem } from "../shared";
export const ExperienceWidget = () => {
  return (
    <section className="mb-[100px] space-y-9">
      <h3 className="text-4xl max-sm:text-3xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Коммерческий опыт
      </h3>
      <div className="mx-auto">
        <ExperienceItem
          title="Разработка игрового сервера Rust"
          company="Rust100Rentgen"
          period="2021 — 2024"
          description="3 года коммерческого опыта разработки плагинов для серверов Rust: создание игровой механики, написание технических заданий, разработка концепций UI/UX и участие в тестировании. Я также сам писал небольшие плагины, чтобы лучше понимать технические аспекты. Сервера: Rust100Rentgen, LiveRust."
          image="logo-r100r.png"
        />
      </div>
    </section>
  );
};
