import Footer from "@/components/Footer";
import KontaktIntro from "@/components/KontaktIntro";
import NavBar from "@/components/NavBar";
import KontaktBar from "@/components/KontaktBar";
import KontaktForm from "@/components/KontaktForm";
import MapComponent from "@/components/MapComponent";

export default function KontaktPage() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="flex flex-col flex-grow min-h-screen">
        <KontaktIntro />
        <KontaktBar />
        <div className="flex flex-row gap-12 mx-16 my-8">
          <MapComponent />
          <KontaktForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
