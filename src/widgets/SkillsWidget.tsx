import React from "react";
import { mySkills } from "../shared";

export const SkillsWidget = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const visibleSlides = 6;
  const totalSlides = mySkills.length - visibleSlides + 1;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="relative space-y-8 py-12 overflow-hidden">
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
            {mySkills.map((skill, index) => (
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
            length: totalSlides,
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
  );
};
