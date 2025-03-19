
import KontaktIntro from "@/components/KontaktIntro";
import KontaktBar from "@/components/KontaktBar";
import KontaktForm from "@/components/KontaktForm";
import MapComponent from "@/components/MapComponent";

import Layout from "/components/Layout.jsx"

export default function KontaktPage() {
  return (
    <Layout>
      <div className="flex flex-col flex-grow min-h-screen xl:text-xl">
        <KontaktIntro />
        <KontaktBar />
        <div className="flex flex-col lg:flex-row gap-12 mx-4 md:mx-16 my-8">
          <MapComponent className="w-full" />
          <KontaktForm />
        </div>
      </div>
      
    </Layout>
  );
}
