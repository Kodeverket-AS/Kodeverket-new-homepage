export default function ProsjektertIntro() {

  return (
    <div
      className="flex flex-col justify-end w-full h-[50vh] md:h-[40vh] max-h-[50vh] bg-cover md:bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Portfolio1.png')",
      }}
    >
      <div className="flex flex-col p-4 items-center gap-4 max-w-2/3 lg:max-w-4/5 mx-auto border-white border  bg-white/30 backdrop-blur-md text-cyan-950 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Velkommen til våre prosjekter!{" "}
        </h1>
        <p className="text-md text-center">
          Her deler vi noen av de spennende arbeidene vi har vært engasjert i,
          og som viser vår lidenskap for kreativitet og innovasjon.
        </p>
      </div>
    </div>
  );
}
