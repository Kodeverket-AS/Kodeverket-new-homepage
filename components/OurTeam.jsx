"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const teamMembers = [
    {
        name: "Andreas",
        role: "Prosjektleder",
        img: "/team/andreas.jpeg",
        email: "andreas@kodeverketbergen.no",
        linkedin: "https://www.linkedin.com/in/andreas-takvam-623068a4/",
        mailto: true,
    },
    {
        name: "Kristoffer",
        role: "Teknisk ansvarlig",
        img: "/team/boy.png",
        email: "kristoffer@jobloop.no",
        linkedin: "https://www.linkedin.com/in/kristoffer-117091321/",
        mailto: true,
    },
    {
        name: "Monika",
        role: "Utvikler",
        img: "/team/monika.JPG",
        linkedin: "#",
    },
    {
        name: "Ros",
        role: "UX Designer",
        img: "/team/ros.jpeg",
        linkedin: "https://www.linkedin.com/in/rostyslav-zhuvak-582777163/",
    },
    {
        name: "Christian",
        role: "Utvikler",
        img: "/team/christian.jpg",
        linkedin: "#",
    },
    {
        name: "Marius",
        role: "Utvikler",
        img: "/team/boy.png",
        linkedin:
            "https://www.linkedin.com/in/per-marius-f%C3%B8yner-00bb02a1/",
    },
    {
        name: "Ole",
        role: "Utvikler",
        img: "/team/boy.png",
        linkedin: "#",
    },
    {
        name: "Stein",
        role: "Utvikler",
        img: "/team/boy.png",
        linkedin: "#",
    },
];

export default function OurTeam() {
    return (
        <section className='ezy__team9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white'>
            <div className='container px-4 mx-auto'>
                <div className='flex justify-left mb-6 md:mb-12'>
                    <h2 className='text-2xl lg:text-4xl text-left font-bold md:text-[45px] mb-4'>
                        Møt teamet vårt
                    </h2>
                </div>

                {/* Swiper for mobile */}
                <div className='block md:hidden'>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className='pb-8'
                    >
                        {teamMembers.map((member, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='bg-white dark:bg-slate-800 shadow-xl rounded-xl duration-500 h-full p-6 flex flex-col items-center'>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className='max-w-full h-auto rounded-full border-4 p-1 border-sky-600 mx-auto'
                                        width='140'
                                        height='140'
                                    />
                                    <div className='mt-6 flex flex-col flex-grow items-center'>
                                        <h4 className='text-2xl font-medium mb-1'>
                                            {member.name}
                                        </h4>
                                        <p className='mb-4 text-xl'>
                                            {member.role}
                                        </p>
                                        {member.email && member.mailto && (
                                            <a
                                                className='text-sm mx-auto mb-4'
                                                href={`mailto:${member.email}`}
                                            >
                                                {member.email}
                                            </a>
                                        )}
                                        <div className='mt-auto'>
                                            <a
                                                href={member.linkedin}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4'
                                            >
                                                <img
                                                    src='/linkedin.png'
                                                    alt='linkedin icon'
                                                    className='w-12'
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Grid for md+ */}
                <div className='hidden md:grid grid-cols-4 gap-6 text-center pt-6'>
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className='col-span-4 md:col-span-2 lg:col-span-1'
                        >
                            <div className='bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8 flex flex-col'>
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className='max-w-full h-auto rounded-full border-4 p-1 border-sky-600 mx-auto'
                                    width='140'
                                    height='140'
                                />
                                <div className='mt-6 flex flex-col flex-grow'>
                                    <h4 className='text-2xl font-medium mb-1'>
                                        {member.name}
                                    </h4>
                                    <p className='mb-4 text-xl'>
                                        {member.role}
                                    </p>
                                    {member.email && member.mailto && (
                                        <a
                                            className='text-sm mx-auto mb-4'
                                            href={`mailto:${member.email}`}
                                        >
                                            {member.email}
                                        </a>
                                    )}
                                    <div className='mt-auto'>
                                        <a
                                            href={member.linkedin}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4'
                                        >
                                            <img
                                                src='/linkedin.png'
                                                alt='linkedin icon'
                                                className='w-12'
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
