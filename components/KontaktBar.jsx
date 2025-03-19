
"use client"
import {motion} from "framer-motion"
import {useState} from "react"


export default function KontaktBar() {

  
const [isOpenAddress, setIsOpenAddress] = useState(false);
const [isOpenEmail, setIsOpenEmail] = useState(false);
const [isOpenPhone, setIsOpenPhone] = useState(false);  

    return (
      <div
        className="
        flex flex-col md:flex-row items-center md:justify-around md:gap-10  md:mx-18"
      >
        <motion.div
          transition={{
            layout: { duration: 1, damping: 30 },
          }}
          layout
          onClick={() => setIsOpenAddress(!isOpenAddress)}
          className=" shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col items-center md:gap-10  py-4 md:w-1/3  max-w-[294px] bg-cyan-950 rounded-2xl text-white my-6 lg:my-12"
        >
          <motion.img
            layout="position"
            src="./icons/location.png"
            className="w-1/4 mt-2 "
            alt="adress pin icon"
          />
          {isOpenAddress && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center "
            >
              <h1 className="text-xl font-semibold ">Adress</h1>
              <p> Vestre Skostredet 2, Bergen</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{
            layout: { duration: 1, damping: 30 },
          }}
          layout
          onClick={() => setIsOpenEmail(!isOpenEmail)}
          className=" shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col items-center gap-10 py-4 md:w-1/3  max-w-[294px] bg-cyan-950 rounded-2xl text-white my-6 lg:my-12"
        >
          <motion.img
            layout="position"
            src="./icons/mail.png"
            className="w-1/4 mt-2"
            alt="mail icon"
          />
          {isOpenEmail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center "
            >
              <h1 className="text-xl font-semibold">Email</h1>
              <p> email@kodeverket.no</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          transition={{
            layout: { duration: 1, damping: 30 },
          }}
          layout
          onClick={() => setIsOpenPhone(!isOpenPhone)}
          className=" shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col items-center gap-10 py-4 md:w-1/3  max-w-[294px] bg-cyan-950 rounded-2xl text-white my-6 lg:my-12"
        >
          <motion.img
            layout="position"
            src="./icons/phone.png"
            className="w-1/4 mt-2"
            alt="adress pin icon"
          />
          {isOpenPhone && (
            <motion.div className="flex flex-col items-center ">
              <h1 className="text-xl font-semibold">Phone</h1>
              <p> 999 99 99</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
    }