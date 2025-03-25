export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/footerbg.png')",
      }}
      className=" flex flex-col-reverse items-center md:bg-cover bg-right md:bg-center pb-4 justify-around px-4 h-56 lg:h-96 2xl:h-72 lg:flex-row lg:justify-between  "
    >
      <div className="flex lg:mx-12 2xl:mx-60">
        <div className="flex flex-row lg:flex-col gap-24 lg:gap-8 lg:items-start">
          <a
            href="mailto:hello@kodeverketbergen.no"
            className="flex flex-row justify-center lg:items-center lg:gap-2"
          >
            <img src="/icons/mail.png" className="w-8 lg:w-10" alt="Mail" />
            <p className="hidden text-white  font-semibold lg:flex">
              hello@kodeverketbergen.no
            </p>
          </a>

          <a
            href="tel:+4741627916"
            className="flex flex-row justify-center lg:items-center lg:gap-2 "
          >
            <img src="/icons/phone.png" className="w-8 lg:w-10" alt="Phone" />
            <p className="hidden text-white font-semibold lg:flex">
              {" "}
              tel:+4741627916
            </p>
          </a>

          <div className="flex flex-row justify-center ">
            <img
              src="linkedinWhite.png"
              alt="linkedin logo"
              className=" w-8 lg:w-10 "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <img
          src="/kodeWhite.png"
          alt="kodeverket logo"
          className=" w-[200px] lg:w-[400px]"
        />
      </div>
    </footer>
  );
}

