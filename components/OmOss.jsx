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
        // console.log("Modal should close now");
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row mx-4 lg:mx-18'>
                <div className='flex flex-col lg:items-start justify-center gap-6 py-6 lg:w-6/12'>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-4 mt-4'>
                        Vi bygger nettsider som styrker din bedrift i dag!{" "}
                        <span className='text-sky-600 font-extrabold text-5xl lg:text-6xl block mt-2 mb-2'>
                            Kodeverket Bergen
                        </span>{" "}
                        – der teknologi møter menneskelig utvikling.
                    </h1>

                    <button
                        className='text-white bg-sky-700 rounded w-full lg:w-34 h-12 shadow-lg hover:bg-sky-800 cursor-pointer'
                        onClick={() => setIsOpen(true)}
                    >
                        Kom i kontakt
                    </button>
                </div>
                <img
                    src='/omoss.png'
                    alt='man in front of computer'
                    className='w-full lg:w-5/12 h-auto mt-4 lg:mt-0 object-cover'
                />
            </div>
            <Modal
                isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={handleCloseModal}
                className='fixed inset-0 flex justify-center items-start md:items-center md:p-4  z-50'
                overlayClassName='fixed inset-0 bg-black/80 z-40'
            >
                <div className='w-full max-w-[90%] md:w-[600px] lg:max-w-[800px] xl:max-w-[1400px] relative mt-16'>
                    <button
                        onClick={handleCloseModal}
                        className='absolute -top-8 -right-2 text-white text-2xl font-bold cursor-pointer hover:text-salomon-300 transition-colors'
                    >
                        ×
                    </button>

                    <KontaktForm />
                </div>
            </Modal>
        </>
    );
}
