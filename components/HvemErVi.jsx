export default function HvemViEr() {
  return (
    <div className="my-6 flex  ">
      <div className="flex flex-col mx-4 md:mx-18">
        <h1 className="text-2xl font-bold text-center py-6"> Hvem vi er ? </h1>
        
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
              <button className="  text-white bg-sky-700 rounded md:w-34 h-10 cursor-pointer ">
                {" "}
                Kontakt oss{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    
  );
}
