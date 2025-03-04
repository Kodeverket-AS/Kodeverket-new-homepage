"use client"
import React, { useState } from "react";



export default function NavBar() {
     const [isOpen, setIsOpen] = useState(false);

     const handleLinkClick = () => {
       setIsOpen(false);
     };
  return (
    <>
      <div className="flex justify-between align-center m-4">
        <img
          src="logo.jpeg"
          alt="kodeverket logo"
          className="w-48 my-12 mx-12"
        />
        <div className="flex items-center space-x-4 mx-8">
          <button className=" text-white bg-sky-700 rounded w-34 h-10 cursor-pointer">
            {" "}
            Kontakt oss{" "}
          </button>
          <button
            className=" text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col text-white bg-cyan-950 items-center space-y-4 py-20 `}
      >
        <li>
          <a href="#hjem" className="text-lg" onClick={handleLinkClick}>
            HOME
          </a>
        </li>
        <li>
          <a href="#tjenester" className="text-lg" onClick={handleLinkClick}>
            TJENESTER
          </a>
        </li>
        <li>
          <a href="#prosjekter" className="text-lg" onClick={handleLinkClick}>
            VÅRE PROSJEKTER
          </a>
        </li>
        <li>
          <a href="#kontakt" className="text-lg" onClick={handleLinkClick}>
            KONTAKT
          </a>
        </li>
      </ul>
    </>
  );
}
