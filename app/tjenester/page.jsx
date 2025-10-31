import TjenesterIntro from "@/components/TjenesterIntro";
import Services from "@/components/Services";
import TjenesterSwitch from "@/components/TjenesterSwitch";

import Layout from "/components/Layout.jsx";

export const metadata = {
    title: "Tjenester | Kodeverket Bergen",
    description: "Se våre tilbud innen webutvikling, SEO og opplæring.",
    alternates: {
        canonical: "https://www.kodeverketbergen.no/tjenester",
    },
};

export default function TjenesterPage() {
    return (
        <Layout>
            <div className='flex flex-col flex-grow min-h-screen xl:text-xl'>
                <TjenesterIntro />
                <TjenesterSwitch />
            </div>
        </Layout>
    );
}
