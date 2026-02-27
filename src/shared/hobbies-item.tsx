import type { IEducationAndHobbies } from "./types";

export const HobbiesItem = (hobbies: IEducationAndHobbies) => {
  return (
    <div className="flex flex-col gap-4 ">
      <h3 className="text-2xl text-neutral-400 uppercase tracking-wider">
        {hobbies.name}
      </h3>
      <p className="flex-1 text-lg text-neutral-300 leading-relaxed">
        {hobbies.text}
      </p>

      <div className="relative mt-3">
        <img
          src={hobbies.image}
          alt={hobbies.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/30 rounded-lg" />
      </div>
    </div>
  );
};
