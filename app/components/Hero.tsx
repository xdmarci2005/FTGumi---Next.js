import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/siteImages/slide1.jpg",
    "/siteImages/slide2.jpg",
    "/siteImages/slide3.jpg",
  ];

  useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [slides.length]);

  return (
    <div className="">
      <section
        id="kezdolap"
        className="relative flex items-center justify-center text-center min-h-[80vh] py-32 overflow-hidden"
      >
        {/* Slideshow */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {slides.map((bg: any, index: any) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${bg}')` }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/80 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1500px] mx-auto px-4">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl mb-5 leading-tight text-white flex justify-center">
            <Image
              src="/siteImages/ft-full-logo.png"
              alt="FT Gumiszerviz"
              className="w-[300px] md:w-[400px]"
              height={10}
              width={300}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-[600px] mx-auto">
            Minden egy helyen az autójának! Új gumiabroncsok, futóműszerviz,
            olajcsere és vizsgáztatás Budapest 11. kerületében.
          </p>
          <a
            href="#kapcsolat"
            className="inline-block bg-[#f22323] text-white px-8 py-4 rounded-md font-semibold font-[family-name:var(--font-montserrat)] uppercase transition-all duration-300 hover:bg-[#e65c00] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,102,0,0.3)]"
          >
            Időpontot Kérek
          </a>
        </div>
      </section>
    </div>
  );
}
