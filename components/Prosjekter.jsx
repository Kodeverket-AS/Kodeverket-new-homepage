"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, useGSAP);

const Carousel = ({ hasBackground = true, children }) => {
  const carouselRef = useRef(null);
  const draggableInstance = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const normalWidth = 96;
  const activeWidth = 320;
  const gap = 16;
  // const margin=20;

  useGSAP(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll(".carousel-slide");

    let totalWidth = 0;
    slides.forEach((slide, index) => {
      totalWidth += (index === activeIndex ? activeWidth : normalWidth) + gap;
    });

    if (draggableInstance.current) {
      draggableInstance.current[0].vars.bounds.minX = -(
        totalWidth - carousel.offsetWidth
      );
      draggableInstance.current[0].vars.bounds.maxX = 0;
      draggableInstance.current[0].update();
    } else {
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
    }
  }, [activeIndex]);

  const setSlideActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`main ${hasBackground ? "bg-cyan-950" : "bg-white"} h-120 my-12 p-6`}
    >
      {children || (
        <>
          <h1 className="text-white text-center text-2xl font-bold py-8">
            Våre prosjekter
          </h1>
          <div className="carousel-container mx-auto overflow-hidden p-2 relative w-full max-w-4xl">
            <div
              id="carousel"
              ref={carouselRef}
              className="flex gap-4 cursor-grab mx-4"
            >
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-end gap-2 carousel-slide ${
                    index === activeIndex ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: "#0369a1",
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
                    <div className="my-auto p-4 text-white">
                      <img
                        src={`/logoTeamWork.png`}
                        alt={`Logo til bedrift ${index + 1}`}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

         
            <button
              onClick={() => setSlideActive((activeIndex - 1 + 8) % 8)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              ←
            </button>
            <button
              onClick={() => setSlideActive((activeIndex + 1) % 8)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
