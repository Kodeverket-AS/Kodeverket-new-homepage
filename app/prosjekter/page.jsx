import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ProsjektertIntro from "@/components/ProsjekterIntro";
import Prosjketer from "@/components/Prosjekter";

export default function KontaktPage() {
 return (
   <div className="flex flex-col flex-flow ">
     <NavBar />

     <div className="flex flex-col flex-flow flex-grow-1 h-[100vh]">
       <ProsjektertIntro />
       <Prosjketer />
    
     </div>

     <Footer />
   </div>
 );
}