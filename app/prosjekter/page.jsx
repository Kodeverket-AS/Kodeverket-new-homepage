import ProsjektertIntro from "@/components/ProsjekterIntro";
import Prosjketer from "@/components/Prosjekter";
import Layout from "/components/Layout.jsx";

export const metadata = {
    title: "Prosjekter | Kodeverket Bergen",
    description:
        "Se hva vi har utviklet sammen med deltakere, samarbeidspartnere og bedrifter i Bergen og resten av Norge.",
    alternates: {
        canonical: "https://www.kodeverketbergen.no/prosjekter",
    },
};

export default function ProsjekterPage() {
    return (
        <Layout>
            <div className=' flex flex-col flex-grow min-h-screen xl:text-xl'>
                <ProsjektertIntro />
                <Prosjketer className='bg-white' />
            </div>
        </Layout>
    );
}
