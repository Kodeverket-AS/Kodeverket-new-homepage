export default function OmOss() {
  return (
    <div className="flex flex-col-reverse md:flex-row  mx-18">
      <div className="flex flex-col md:items-left justify-center gap-4 py-4 md:w-4/9">
        {" "}
        <h1 className="text-5xl font-bold">
          {" "}
          Smarte løsninger for en digital verden med{" "}
          <span className="text-sky-600">Kodeverket </span>

        </h1>
        <p className="text-base">
          {" "}
          Teknologiske innovasjoner som transformerer din bedrift i den moderne
          digitale verden
        </p>
        <button className="  text-white bg-sky-700 rounded md:w-34 h-10 cursor-pointer ">
          {" "}
          Bestill nå{" "}
        </button>{" "}
      </div>
      <img src="/omoss.png" alt="man in front of computer" className="md:w-5/9"/>
    </div>
  );
}
