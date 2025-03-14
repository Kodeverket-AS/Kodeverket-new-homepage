export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/footerbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-between items-center p-4 h-96 "
    >
      <div className="flex flex-col  text-white mx-24">
        <h3 className="text-xl font-bold pb-4">Kontakt</h3>
        <p>info@breipost.no</p>
        <p>9999 99 999</p>
      </div>

     <h1 className="text-8xl text-white">Kodeverket</h1>
      <div className="flex flex-col  text-white mx-24 ">
        <h3 className="text-xl font-bold pb-4">Snarvei</h3>
        <a href="">Om oss</a>
        <a href=""> Tjenester</a>
      </div>
    </footer>
  );
}
