import KontaktIntro from "@/components/KontaktIntro";
import KontaktBar from "@/components/KontaktBar";
import KontaktForm from "@/components/KontaktForm";
import MapComponent from "@/components/MapComponent";

import Layout from "/components/Layout.jsx";

//få opp en fungerende mailserver

export default function KontaktPage() {
    return (
        <Layout>
            <div className='flex flex-col flex-grow min-h-screen xl:text-xl'>
                <KontaktIntro />
                <KontaktBar />
                <div className='flex flex-col lg:flex-row gap-12 mx-4 md:mx-16 my-8'>
                    <MapComponent className='w-full' />
                    <div className='md:w-1/2'>
                        <KontaktForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
