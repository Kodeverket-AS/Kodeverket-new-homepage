
import KontaktIntro from "@/components/KontaktIntro";
import KontaktBar from "@/components/KontaktBar";
import KontaktForm from "@/components/KontaktForm";
import MapComponent from "@/components/MapComponent";

import Layout from "/components/Layout.jsx"

export default function KontaktPage() {
  return (
    <Layout>
      <div className="flex flex-col flex-grow min-h-screen">
        <KontaktIntro />
        <KontaktBar />
        <div className="flex flex-col lg:flex-row gap-12 mx-16 my-8">
          <MapComponent />
          <KontaktForm />
        </div>
      </div>
      
    </Layout>
  );
}
