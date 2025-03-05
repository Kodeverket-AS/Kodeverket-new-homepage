export default function Footer() {
  return (
    <footer style=
      {{
        backgroundImage: "url('/footerbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="flex justify-between p-4 h-full ">
      
      <div>
        <h3>Kontakt</h3>
        <p>info@breipost.no</p>
        <p>9999 99 999</p>
      </div>
      <div>
        <h3>Snartvei</h3>
        <li>Om oss</li>
        <li>Tjenester</li>
      </div>
    </footer>
  );
}
