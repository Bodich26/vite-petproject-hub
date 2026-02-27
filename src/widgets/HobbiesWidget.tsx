import { educationAndHobbies } from "../shared";

export const HobbiesWidget = () => {
  return (
    <section className="mb-[100px] space-y-9">
      <h2 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Образование И Хобби
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {educationAndHobbies.map((item) => (
          <div className="flex flex-col gap-4 " key={item.id}>
            <h3 className="text-2xl text-neutral-400 uppercase tracking-wider">
              {item.name}
            </h3>
            <p className="flex-1 text-lg text-neutral-300 leading-relaxed">
              {item.text}
            </p>

            <div className="relative mt-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
