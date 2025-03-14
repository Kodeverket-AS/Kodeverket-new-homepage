export default function TjenesterIntro() {
  return (
    <div
      className="flex flex-col justify-center md:min-h-[50vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Service.png')",
      }}
    >
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center gap-4 h-1/3 w-2/3 mb-24 mx-auto border-white border backdrop-blur-md text-cyan-950">
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Tjenester</h1>
        <p className="text-md">
          Teknologiske innovasjoner som transformerer din bedrift i den moderne
          digitale verden
        </p>
      </div>
    </div>
  );
}
