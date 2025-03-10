export default function ProsjektertIntro() {
  return (
    <>
      <div
        className="flex flex-col justify-center h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Portfolio.png')",
        }}
      >
        <div className="flex-1"></div>
        <div className=" flex flex-col justify-center items-center gap-4 h-1/3 w-2/3 mb-24 mx-auto align-bottom border-white border-1  backdrop-blur-md   text-cyan-950 ">
          <h1 className=" text-3xl md:text-5xl font-bold mt-2">
            Våre prosjekter
          </h1>
          <p className=" text-md  ">
            Velkommen til våre prosjekter! Her deler vi noen av de spennende
            arbeidene vi har vært engasjert i, og som viser vår lidenskap for
            kreativitet og innovasjon
          </p>
        </div>
      </div>
    </>
  );
}
