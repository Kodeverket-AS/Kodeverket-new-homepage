
export default function TjenesterIntro() {
  return (
    <div
      className="flex flex-col justify-end w-full h-[100vh] md:h-[40vh] max-h-[50vh] bg-cover md:bg-contain bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/Service.png')",
      }}
    >
      <div className="flex flex-col p-4 items-center gap-4 max-w-2/3 lg:max-w-4/5 mx-auto bg-white/30 border-white border backdrop-blur-xl text-cyan-950 mb-8">
        <h1 className="text-3xl  font-bold mt-2">Tjenester</h1>
        <p className="text-md text-center 5xl:text-xl">
          Vi tilbyr tjenester som webutvikling, mobilapplikasjonsutvikling og
          tilpassede IT-løsninger. Vi leverer også skreddersydde løsninger for
          bedrifter, inkludert design, testing og vedlikehold av digitale
          plattformer.
        </p>
      </div>
    </div>
  );
}
