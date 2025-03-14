import ProsjektertIntro from "@/components/ProsjekterIntro";
import Prosjketer from "@/components/Prosjekter";

import Layout from "/components/Layout.jsx"

export default function ProsjekterPage() {
 return (
    <Layout>
    <div className="flex flex-col flex-flow flex-grow-1 h-[100vh]">
       <ProsjektertIntro />
       <Prosjketer />
     </div>
    </Layout>
 );
}