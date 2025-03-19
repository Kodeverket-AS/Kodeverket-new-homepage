export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/footerbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center p-4 h-96 md:flex-row md:justify-between"
    >
      

      <div className="flex flex-row justify-center gap-12 mt-4 md:mt-0">
        <div className="flex flex-col text-white">
          <h3 className="text-xl font-bold pb-4">Kontakt</h3>
          <p>info@breipost.no</p>
          <p>9999 99 999</p>
        </div>

        <div className="flex flex-col text-white">
          <h3 className="text-xl font-bold pb-4">Snarvei</h3>
          <a href="">Om oss</a>
          <a href="">Tjenester</a>
        </div>
      </div>
    </footer>
  );
}

