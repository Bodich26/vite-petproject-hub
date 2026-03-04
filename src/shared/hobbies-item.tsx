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

      {hobbies.certificates && (
        <div className="">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Cертификаты:
          </p>
          <ul className="flex gap-4 text-md text-purple-400">
            {hobbies.certificates.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

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
