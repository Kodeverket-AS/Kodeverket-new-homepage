"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, useGSAP);

const Carousel = () => {
  const carouselRef = useRef(null);
  const draggableInstance = useRef(null); 
  const [activeIndex, setActiveIndex] = useState(0); 

  const normalWidth = 96; 
  const activeWidth = 320; 
  const gap = 16; 

  
  useGSAP(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll(".carousel-slide");

  
    let totalWidth = 0;
    slides.forEach((slide, index) => {
      totalWidth += (index === activeIndex ? activeWidth : normalWidth) + gap;
    });

    draggableInstance.current = Draggable.create(carousel, {
      type: "x", 
      bounds: {
        minX: -(totalWidth - carousel.offsetWidth),
        maxX: 0,
      },
      inertia: true, 
      edgeResistance: 0.5, 
      onDrag: function () {
        
        gsap.set(carousel, { x: this.x });
      },
    });
  }, [activeIndex]);

  const setSlideActive = (index) => {
    if (activeIndex === index) {
    
      setActiveIndex(null);
    } else {
    
      setActiveIndex(index);
    }
  };

  return (
    <div className="main bg-cyan-950 h-120 my-12 p-6">
      <h1 className="text-white text-center text-2xl font-bold py-8">
        Våre prosjekter
      </h1>
      <div className="carousel-container mx-auto overflow-hidden p-2 relative w-full max-w-4xl">
  
        <div id="carousel" ref={carouselRef} className="flex gap-4 cursor-grab mx-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                backgroundColor: index === activeIndex ? "#0369a1" : "#0369a1", // sky-700 i sky-500
                borderRadius: "18px",
                width: `${index === activeIndex ? activeWidth : normalWidth}px`,
                height: "320px",
                flexShrink: 0,
                transition: "width 0.3s ease",
              }}
              onClick={() => setSlideActive(index)}
            >
              {index === activeIndex ? (
                <div className="p-4 text-white">
                  <h2 className="text-xl font-bold">Bedrift {index + 1}</h2>
                  <p className="mt-2">
                    Beskrivelse av samarbeid med bedrift {index + 1}.
                  </p>
                </div>
              ) : (
                <div className="p-4 text-white">
                  <img
                    src={`https://via.placeholder.com/64x64?text=Logo+${
                      index + 1
                    }`}
                    alt={`Logo til bedrift ${index + 1}`}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* arrows*/}
        <button
          onClick={() => setSlideActive((activeIndex - 1 + 9) % 9)} // Przesuń til venstre
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ←
        </button>
        <button
          onClick={() => setSlideActive((activeIndex + 1) % 9)} // Przesuń til høyre
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
