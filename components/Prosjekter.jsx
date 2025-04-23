"use client";
import React, { useState, useEffect } from "react";
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
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import "../app/globals.css";

export default function Carousel() {
  const [projects, setProjects] = useState([]);

  console.log(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project"]{
          companyName,
          url,
          description,
          logo {
            asset -> { url }
          },
          background {
            asset -> { url }
          }
        }`;

        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Data feil: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full my-8 p-6 my:mt-6 md:pb-10 flex items-center justify-center">
      <div className="w-full md:max-w-5xl lg:max-w-6xl relative">
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
              slidesPerView: 2,
              coverflowEffect: {
                rotate: -10,
                stretch: -10,
                depth: 100,
                modifier: 4,
              },
            },
            992: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: -10,
                stretch: -10,
                depth: 90,
                modifier: 3,
              },
            },
            1400: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: -10,
                stretch: -10,
                depth: 80,
                modifier: 2,
              },
            },
          }}
          className="relative max-w-lg md:min-w-full select-none"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project._id}
              className="relative overflow-hidden group rounded-sm"
            >
              <div className="relative w-full h-[440px] flex items-center justify-center bg-transparent">
                <div
                  style={{
                    backgroundImage: `url(${urlFor(project.background).url()})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-sky-700/80" />
                <div className="absolute w-full h-full flex items-center justify-center">
                  <Image
                    src={urlFor(project.logo).url()}
                    alt={project.companyName}
                    className="lg:w-3/5 md:w-2/3 h-auto z-10 opacity-100 transition-opacity duration-500"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-cyan-950 flex justify-center flex-col text-white p-4 transition-opacity opacity-100 duration-700 sm:opacity-0 sm:group-[.swiper-slide-active]:opacity-90">
                <div className="w-9/10">
                  <h1 className="text-2xl mb-16 font-bold">
                    {project.companyName}
                  </h1>
                  <p className="text-base mb-4">{project.description}</p>
                </div>
                <a
                  className="bg-cyan-950 self-center text-center text-base w-full lg:w-1/3 border-1 border-white text-white px-6 py-2 mt-4 rounded hover:bg-cyan-800 transition cursor-pointer"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vis projekt
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer hidden sm:block"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer hidden sm:block"></div>
        </Swiper>
      </div>
    </div>
  );
}