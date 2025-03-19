import ProsjektertIntro from "@/components/ProsjekterIntro";
import Prosjketer from "@/components/Prosjekter";

import Layout from "/components/Layout.jsx"

export default function ProsjekterPage() {
 return (
   <Layout>
     <div className=" flex flex-col flex-grow min-h-screen xl:text-xl">
       <ProsjektertIntro />
       <Prosjketer className="bg-white" />
     </div>
   </Layout>
 );
}