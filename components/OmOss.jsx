export default function OmOss() {
  return (
    <div className="flex border-2 border-red-500 mx-18">
      <div className="flex flex-col items-left justify-center gap-4 py-4 w-4/9">
        {" "}
        <h1 className="text-5xl font-bold">
          {" "}
          Smarte løsninger for en digital verden med{" "}
          <span className="text-sky-600">Breiflabb </span>

        </h1>
        <p className="text-base">
          {" "}
          Teknologiske innovasjoner som transformerer din bedrift i den moderne
          digitale verden
        </p>
        <button className="  text-white bg-sky-700 rounded w-34 h-10 cursor-pointer ">
          {" "}
          Bestill nå{" "}
        </button>{" "}
      </div>
      <img src="/omoss.png" alt="man in front of computer" className="w-5/9"/>
    </div>
  );
}
