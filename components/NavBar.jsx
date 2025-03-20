"use client";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="  pl-4 pr-12 md:px-12 sticky top-0 z-30  bg-white text-cyan-950 lg:flex lg:justify-between 3xl:px-80 mb-8 ">
      <div className="flex items-center justify-between">
        <img
          src="/logoHorizontal.png"
          alt="kodeVerket Bergen Logo"
          className="w-[220px] md:w-[320px]"
        />

        <button
          className="lg:hidden  text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-end space-y-4 pb-5 lg:flex lg:flex-row lg:gap-8  lg:space-y-0 lg:text-xl lg:items-end`}
      >
        <li>
          <a
            href="/"
            className=" hover:underline lg:text-lg"
            onClick={handleLinkClick}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="tjenester"
            className=" hover:underline lg:text-lg"
            onClick={handleLinkClick}
          >
            TJENESTER
          </a>
        </li>
        <li>
          <a
            href="prosjekter"
            className=" hover:underline lg:text-lg"
            onClick={handleLinkClick}
          >
            VÅRE PROSJEKTER
          </a>
        </li>
        <li>
          <a
            href="kontakt"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            KONTAKT
          </a>
        </li>
      </ul>
    </nav>
  );
}
