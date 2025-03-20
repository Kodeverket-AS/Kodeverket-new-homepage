"use client"
import React, { createContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
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
      "Selskapet er Nordens ledende fagmiljø innen Medarbeiderskap og den skandinaviske ledelsesmodellen. De jobber med å styrke samarbeidet mellom medarbeidere og ledere for å skape et godt arbeidsmiljø og bedre resultater. Med over 40 års erfaring utvikler de skreddersydde HR-løsninger i tett samarbeid med kundene sine.",
    cta: "Learn More",
    logo:"/TWlogoWhite.png"
  },
  {
    src: "/omoss.png",
    title: "Project two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem.",
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
     <div className="bg-cyan-950 h- md:h-[70lvh] my-12 p-6 flex items-center justify-center ">
       <div className="w-full max-w-5xl relative mb-12 ">
         <h1 className="text-center my-10 font-semibold text-2xl md:text-4xl text-white">
           Our projects
         </h1>
         <Swiper
           modules={[Navigation, Pagination, EffectCoverflow]}
           effect={"coverflow"}
           grabCursor={true}
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
                 depth: 50,
                 modifier: 3,
               },
             },
           }}
           className="relative "
         >
           {slides.map((slide, index) => (
             <SwiperSlide
               key={index}
               className="relative overflow-hidden group"
             >
               <div className="relative w-full h-[440px] flex items-center justify-center bg-transparent">
                
                 <div
                   style={{ backgroundImage: `url(${slide.src})` }}
                   aria-label={slide.title}
                   className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
                 />

                 
                 <div className="absolute inset-0 bg-cyan-950/80" />

                 
                 <img
                   src={slide.logo}
                   alt="Logo"
                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-auto z-10"
                 />
               </div>

               <div className="absolute inset-0  bg-sky-700  flex  justify-center flex-col text-white p-4 transition-opacity opacity-100 duration-700 sm:opacity-0 sm:group-[.swiper-slide-active]:opacity-90">
                 <div className="w-9/10">
                   <h1 className="text-2xl mb-16 font-bold">{slide.title}</h1>
                   <p className="text-sm mb-4">{slide.description}</p>
                 </div>
                 <button className="bg-cyan-950 self-center text-base w-1/2 border-1 border-white text-white px-6 py-2 mt-4 rounded hover:bg-cyan-800 transition ">
                   {slide.cta}
                 </button>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
         {/* Custom Navigation Buttons */}
         <div className="swiper-button-prev absolute -left-10 top-1/2 transform  z-10 text-white text-3xl cursor-pointer hidden sm:block"></div>
         <div className="swiper-button-next absolute right-0 top-1/2 transform  z-10 text-white text-3xl cursor-pointer hidden sm:block"></div>
       </div>
     </div>
   );
  }