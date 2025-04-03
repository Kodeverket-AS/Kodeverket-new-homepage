"use client";
import KontaktForm from "@/components/KontaktForm";
import { useState } from "react";
import Modal from "react-modal";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}


export default function HvemViEr() {
   const [isOpen, setIsOpen] = useState(false);
  
    const handleCloseModal = () => {
      // console.log("Modal should close now");
      setIsOpen(!isOpen);
    };
  return (
    <>
      <div className="my-6 flex  ">
        <div className="flex flex-col mx-4 md:mx-18">
          <h1 className="text-2xl lg:text-4xl font-bold text-center py-6">
            {" "}
            Hvem vi er ?{" "}
          </h1>

          <div className="flex flex-col md:flex-row">
            <img src="/WhoWeAre.png" alt="happy people" className="md:w-5/9" />
            <div className="md:w-4/9 font-normal text-base flex flex-col items-left justify-center gap-4 py-4">
              <p>
                {" "}
                La oss designe, produsere og hoste websider for deg! Realiser
                din drøm om en fantastisk nettside, med personalisert CMS
                løsning og hosting. I Kodeverket Bergen er målet å levere
                nettsider som ser like bra ut både på PC og mobil. Sammen med
                våre kunder, lages den beste løsningen som passer for dere.
              </p>
              <button
                className="  text-white bg-sky-700 rounded md:w-34 h-10 cursor-pointer "
                onClick={() => setIsOpen(true)}
              >
                {" "}
                Kontakt oss{" "}
              </button>{" "}
            </div>
          </div>
        </div>
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
