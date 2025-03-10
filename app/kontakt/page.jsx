import Footer from "@/components/Footer";
import KontaktIntro from "@/components/KontaktIntro";
import NavBar from "@/components/NavBar";
import KontaktBar from "@/components/KontaktBar";
import Image from "next/image";

export default function KontaktPage() {
 return (
   <div className="flex flex-col flex-flow ">
     <NavBar />

     <div className="flex flex-col flex-flow flex-grow-1 h-[100vh]">
       <KontaktIntro />
       <KontaktBar />
     </div>

     <Footer />
   </div>
 );
}