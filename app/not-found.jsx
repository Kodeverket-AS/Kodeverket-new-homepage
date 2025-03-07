import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div className="fixed w-3/5 h-3/5 md:w-1/2 md:h-2/3">
        <Image src="/404.png" alt="Not Found" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute bottom-10 md:bottom-0 lg:left-[25%] w-[100%] h-[35%] md:w-[100%] md:h-[35%]   lg:w-[50%] lg:h-[35%]  backdrop-blur-md flex flex-col items-center justify-center rounded-t-lg p-4  mb-12 md:mb-20">
        <div className="flex flex-col justify-start m-auto gap-6 mt-4 md:mt-8 text-cyan-950">
          <h1 className=" text-3xl md:text-5xl font-bold mt-2">404</h1>
          <p className=" text-md md:text-md lg:text-lg  md:mb-10 lg:tracking-wide md:mt-6 ">
            Oops! Denne siden eksisterer ikke.
          </p>
        </div>
        <a href="/" className=" px-8 py-2 bg-sky-700 text-white rounded-lg">
          Hjem
        </a>
      </div>
    </div>
  );
}
