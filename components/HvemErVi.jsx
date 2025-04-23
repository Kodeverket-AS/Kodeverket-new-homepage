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
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='my-6 flex'>
                <div className='flex flex-col mx-4 md:mx-18'>
                    <h1 className='text-2xl md:text-3xl font-bold text-center py-6'>
                        Hvem vi er
                    </h1>

                    <div className='flex flex-col md:flex-row gap-6'>
                        <img
                            src='/WhoWeAre.png'
                            alt='Engasjerte mennesker'
                            className='w-full md:w-6/12 h-auto object-cover'
                        />
                        <div className='md:w-6/12 text-base flex flex-col items-start justify-center gap-4 py-4'>
                            <p>
                                I Kodeverket Bergen står menneskelig utvikling i
                                sentrum. Vi tilbyr en trygg arena for å hjelpe
                                mennesker tilbake til arbeidslivet, samtidig som
                                vi skaper kreative teknologiske løsninger. Med
                                dedikerte utviklere og praksiskandidater
                                designer vi digitale opplevelser som gir
                                mening—fra unike nettsider til skreddersydde
                                CMS-systemer. Sammen med våre kunder finner vi
                                den beste veien mot en moderne, digital fremtid.
                            </p>
                            <button
                                className='text-white bg-sky-700 rounded w-full md:w-34 h-12 shadow-lg hover:bg-sky-800 cursor-pointer'
                                onClick={() => setIsOpen(true)}
                            >
                                Kontakt oss
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={handleCloseModal}
                className='fixed inset-0 flex justify-center items-start md:items-center md:p-4 z-50'
                overlayClassName='fixed inset-0 bg-black/80 z-40'
            >
                <div className='w-full max-w-[90%] md:w-[600px] lg:w-[800px] xl:max-w-[1400px] relative mt-16'>
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
