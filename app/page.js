import OurTeam from "/components/OurTeam.jsx";
import Prosjekter from "/components/Prosjekter.jsx";
import History from "/components/History.jsx";
import Services from "/components/Services.jsx";
import OmOss from "/components/OmOss.jsx";
import HvemViEr from "/components/HvemErVi";

import Layout from "/components/Layout.jsx"




export default function Home() {
  return (
    <Layout>
      <OmOss />
      <HvemViEr />
      <Services />
      <div>
        <Prosjekter />
      </div>
    
      <History />
      <OurTeam />
    </Layout>
  );
}
