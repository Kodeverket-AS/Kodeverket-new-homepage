import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="relative">
        <div className="w-[600px] md:w-[1000px] lg:w-[1200px] pointer-events-none select-none ">
          <Image
            src="/404.png"
            alt="Not Found"
            width={800}
            height={600}
            className="w-full h-auto"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-4 md:-bottom-6 lg:-bottom-4 left-[25%] right-[25%] h-[35%]  bg-white/30 backdrop-blur-md rounded-lg p-4 mb-12 md:mb-20 border-white border-1">
          <div className=" text-cyan-950">
            <h1 className="text-2xl mt-1 md:text-5xl md:mt-6 font-bold ">
              404
            </h1>
            <p className="text-sm  md:text-base lg:text-lg mt-2 md:mt-8 lg:mt-11 lg:tracking-wide ">
              Oops! Denne siden eksisterer ikke.
            </p>
          </div>
          <div className="flex justify-center items-end h-16 md:h-20 lg:h-26">
            <Link
              href="/"
              className=" px-10 md:px-14 lg:px-18 py-2 bg-sky-700 hover:bg-sky-500 transition-colors duration-200 text-white rounded-sm font-medium text-sm md:text-base lg:text-lg"
            >
              Hjem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
