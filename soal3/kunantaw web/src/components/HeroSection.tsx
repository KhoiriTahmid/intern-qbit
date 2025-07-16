import { useState } from "react";

const images = ["hero1.webp", "hero1.webp"];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-svw overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero${index}`}
            className="w-svw flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#376240]" : "bg-[#929e94]"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
