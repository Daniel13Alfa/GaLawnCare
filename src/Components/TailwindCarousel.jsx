import React, { useEffect, useState } from "react";
import image1 from '../assets/Images/image1.jpg';
import image2 from '../assets/Images/image2.jpg';
import image3 from '../assets/Images/image3.jpg';
import image4 from '../assets/Images/image4.jpg';

const images = [
  {
    id: 1,
    src: image1,
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    id: 2,
    src: image2,
    title: "Second slide label",
    description: "Some representative placeholder content for the second slide.",
  },
  {
    id: 3,
    src: image3,
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
  {
    id: 4,
    src: image4,
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
];

export default function TailwindCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change every 5s
    return () => clearInterval(interval); // Clean up
  }, [current]);

  return (
    <div>
      <div className="relative w-10/12 mb:w-3/4 max-w-4xl mx-auto md:mx-0 overflow-hidden rounded-2xl">
        <div className="relative h-96">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-5 inset-x-0 text-center text-white bg-black/50 p-4 hidden md:block">
                <h5 className="text-xl font-semibold">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl font-bold hover:text-gray-400  rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl font-bold hover:text-gray-400 rounded-full"
        >
          ›
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
