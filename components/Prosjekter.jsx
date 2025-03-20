"use client";
import "../app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const slides = [
  {
    src: "/img.jpg",
    title: "Team Work",
    description:
      "Selskapet er Nordens ledende fagmilj\u00f8 innen Medarbeiderskap og den skandinaviske ledelsesmodellen. De jobber med \u00e5 styrke samarbeidet mellom medarbeidere og ledere for \u00e5 skape et godt arbeidsmilj\u00f8 og bedre resultater. Med over 40 \u00e5rs erfaring utvikler de skreddersydde HR-l\u00f8sninger i tett samarbeid med kundene sine.",
    cta: "Learn More",
    logo:"/TWlogoWhite.png"
  },
  {
    src: "/omoss.png",
    title: "Project two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.",

    cta: "Learn more",
  },
  {
    src: "/omoss.png",
    title: "Project three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.",
    cta: "Learn more",
  },
  {
    src: "/omoss.png",
    title: "Project four",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.",
    cta: "Learn more",
  },
  {
    src: "/omoss.png",
    title: "Project five",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.",
    cta: "Learn more",
  },
];

export default function Carousel() {
  return (
    <div className="bg-cyan-950 h-full my-8 p-6 my:mt-6 md:pb-10   flex items-center justify-center">
      <div className="w-full max-w-5xl relative ">
        <h1 className="text-center my-6   md:my-10 font-semibold text-2xl md:text-4xl text-white">
          V\u00e5re prosjekter
        </h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Keyboard]}
          effect={"coverflow"}
          grabCursor={true}
          keyboard={{ enabled: true, onlyInViewport: false }}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: -10,
                stretch: -20,
                depth: 100,
                modifier: 3,
              },
            },
          }}
          className="relative max-w-lg  md:min-w-full select-none"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden group">
              <div className="w-full h-72 md:h-85 flex items-center justify-center sm:bg-transparent">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover duration-700  sm:group-[.swiper-slide-active]:scale-120 select-none"
                />
              </div>
              <div className="absolute inset-0  bg-sky-700  flex items-center justify-center flex-col text-white p-4 transition-opacity opacity-100 duration-700 sm:opacity-0 sm:group-[.swiper-slide-active]:opacity-90">
                <div className="w-2/3">
                  <h1 className="text-2xl mb-6 font-bold">{slide.title}</h1>
                  <p className="text-sm mb-4">{slide.description}</p>
                </div>
                <button className="text-sm md:text-base bg-cyan-950 border-1 border-white text-white px-6 py-2 mt-10 rounded hover:bg-cyan-800 transition ">
                  {slide.cta}
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev  cursor-pointer "></div>
          <div className="swiper-button-next cursor-pointer "></div>
        </Swiper>
      </div>
    </div>
  );
}
