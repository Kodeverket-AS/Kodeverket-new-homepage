"use client";
import KontaktForm from "@/components/KontaktForm";
import { useState } from "react";
import Modal from "react-modal";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

export default function OmOss() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    console.log("Modal should close now");
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mx-4 md:mx-18">
        <div className="flex flex-col md:items-left justify-center gap-4 py-4 md:w-4/9">
          <h1 className="text-5xl font-bold">
            Smarte løsninger for en digital verden med{" "}
            <span className="text-sky-600">Kodeverket</span>
          </h1>
          <p className="text-base">
            Teknologiske innovasjoner som transformerer din bedrift i den
            moderne digitale verden
          </p>
          <button
            className="text-white bg-sky-700 rounded md:w-34 h-10 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Bestill nå
          </button>
        </div>
        <img
          src="/omoss.png"
          alt="man in front of computer"
          className="md:w-5/9"
        />
      </div>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={handleCloseModal}
        className="fixed inset-0 flex justify-center items-start md:items-center md:p-4  z-50"
        overlayClassName="fixed inset-0 bg-black/80 z-40"
      >
        <div className="w-full max-w-[90%] md:w-[600px] lg:max-w-[800px] xl:max-w-[1400px] relative mt-16">
          <button
            onClick={handleCloseModal}
            className="absolute -top-8 -right-2 text-white text-2xl font-bold cursor-pointer hover:text-salomon-300 transition-colors"
          >
            ×
          </button>

          <KontaktForm />
        </div>
      </Modal>
    </>
  );
}
