export default function KontaktIntro() {
  return (
    <div
      className="flex flex-col justify-end w-full h-[50vh] max-h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ContactUs.png')",
      }}
    >
      <div className="flex flex-col p-4 items-center gap-4 max-w-2/3 lg:max-w-1/3 mx-auto  bg-white/30 border-white border backdrop-blur-md text-cyan-950 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Kontakt oss</h1>
        <p className="text-md text-center">
          Har du spørsmål eller trenger mer informasjon? Ikke nøl med å ta
          kontakt med oss – vi er her for å hjelpe deg!
        </p>
      </div>
    </div>
  );
}
