import OurTeam from "/components/OurTeam.jsx";
import Prosjekter from "/components/Prosjekter.jsx";
import History from "/components/History.jsx";
import Footer from "/components/Footer.jsx";
import Services from "/components/Services.jsx";
import OmOss from "/components/OmOss.jsx";
import NavBar from "/components/NavBar.jsx";
import HvemViEr from "/components/HvemErVi";



import Image from "next/image";


export default function Home() {
  return (
    <>
      <NavBar />
      <OmOss />
      <HvemViEr />
      <Services />
      <Prosjekter hasBackground={true} />
      <History />
      <OurTeam />
      <Footer />
    </>
  );
}
