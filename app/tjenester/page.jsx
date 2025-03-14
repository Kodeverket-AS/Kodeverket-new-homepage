import TjenesterIntro from "@/components/TjenesterIntro";
import Services from "@/components/Services";
import TjenesterSwitch from "@/components/TjenesterSwitch";


import Layout from "/components/Layout.jsx";


export default function TjenesterPage() {
  return (
    <Layout>
      <div className="flex flex-col flex-flow flex-grow-1 h-[100vh]">
        <TjenesterIntro />
        <TjenesterSwitch/> 
        <Services />
      </div>
    </Layout>
  );
}
