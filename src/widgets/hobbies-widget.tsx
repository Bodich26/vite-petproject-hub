import { educationAndHobbies, HobbiesItem } from "../shared";

export const HobbiesWidget = () => {
  return (
    <section className="mb-[100px] space-y-9">
      <h3 className="text-4xl font-bold text-purple-400 uppercase tracking-wide text-center">
        Образование И Хобби
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {educationAndHobbies.map((item) => (
          <HobbiesItem
            key={item.id}
            id={item.id}
            name={item.name}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};
