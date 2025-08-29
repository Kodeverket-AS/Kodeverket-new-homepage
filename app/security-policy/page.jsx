// src/app/security-policy/page.jsx

export const metadata = {
    title: "Security Policy | Kodeverket",
    description:
        "Hvordan rapportere sårbarheter til Kodeverket. Retningslinjer, responstider, safe harbor og hva som er utenfor scope.",
    openGraph: {
        title: "Security Policy | Kodeverket",
        description:
            "Retningslinjer for ansvarlig varsling av sårbarheter hos Kodeverket.",
        url: "https://www.kodeverketbergen.no/security-policy",
        type: "article",
    },
    alternates: {
        canonical: "https://www.kodeverketbergen.no/security-policy",
    },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Security Policy",
            url: "https://www.kodeverketbergen.no/security-policy",
            description:
                "Hvordan rapportere sårbarheter til Kodeverket. Retningslinjer, responstider, safe harbor og hva som er utenfor scope.",
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Hjem",
                        item: "https://www.kodeverketbergen.no",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Security Policy",
                        item: "https://www.kodeverketbergen.no/security-policy",
                    },
                ],
            },
        }),
    },
};

export default function SecurityPolicyPage() {
    return (
        <main className='mx-auto max-w-3xl px-4 py-12'>
            <header className='mb-8'>
                <h1 className='text-3xl font-bold'>Security Policy</h1>
                <p className='mt-2 text-base opacity-80'>
                    Slik rapporterer du sikkerhetssårbarheter til Kodeverket
                    Bergen på en trygg og ansvarlig måte.
                </p>
            </header>

            <section className='space-y-6 leading-relaxed'>
                <div>
                    <h2 className='text-xl font-semibold'>Formål</h2>
                    <p className='mt-2'>
                        Vi i <strong>Kodeverket Bergen</strong> tar sikkerhet på
                        alvor og ønsker dialog med sikkerhetsforskere og brukere
                        som oppdager mulige sårbarheter. Denne policyen
                        forklarer hvordan du kan varsle oss på en trygg og
                        ansvarlig måte, og hva du kan forvente i retur.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Hvordan varsle</h2>
                    <ul className='mt-2 list-disc pl-6 space-y-1'>
                        <li>
                            <strong>E-post:</strong>{" "}
                            <a
                                className='underline'
                                href='mailto:hello@kodeverketbergen.no'
                            >
                                hello@kodeverketbergen.no
                            </a>
                        </li>
                        <li>
                            <strong>Skjema:</strong>{" "}
                            <a
                                className='underline'
                                href='https://www.kodeverketbergen.no/kontakt'
                            >
                                kodeverketbergen.no/kontakt
                            </a>
                        </li>
                    </ul>

                    <h3 className='mt-4 font-semibold'>Inkluder gjerne</h3>
                    <ul className='mt-2 list-disc pl-6 space-y-1'>
                        <li>
                            Beskrivelse av sårbarheten og berørte
                            URL-er/tjenester
                        </li>
                        <li>Trinn for å reprodusere (så enkelt som mulig)</li>
                        <li>Forventet resultat vs. faktisk resultat</li>
                        <li>
                            Skjermbilder, PoC eller minimal exploit (hvis
                            relevant)
                        </li>
                        <li>Kontaktinfo for oppfølging</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>
                        Hva du kan forvente (SLA)
                    </h2>
                    <ul className='mt-2 list-disc pl-6 space-y-1'>
                        <li>
                            <strong>Bekreftelse:</strong> innen 2 arbeidsdager
                        </li>
                        <li>
                            <strong>Foreløpig vurdering:</strong> innen 5
                            arbeidsdager
                        </li>
                        <li>
                            <strong>Remediering:</strong> prioriteres etter
                            alvorlighetsgrad; kritiske funn håndteres så raskt
                            som mulig.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>
                        Regler for ansvarlig testing
                    </h2>
                    <ul className='mt-2 list-disc pl-6 space-y-1'>
                        <li>
                            Ikke aksesser, endre eller last ned data som ikke
                            tilhører deg.
                        </li>
                        <li>
                            Unngå degraderingstester (DoS/DDoS), spam eller
                            volumangrep.
                        </li>
                        <li>
                            Ingen fysisk eller sosial manipulering av
                            ansatte/kunder.
                        </li>
                        <li>Bruk kun egne kontoer/testdata ved behov.</li>
                        <li>Respekter personvern og gjeldende lovverk.</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Safe Harbor</h2>
                    <p className='mt-2'>
                        Hvis du følger denne policyen, vil vi ikke iverksette
                        juridiske tiltak mot godtroende undersøkelser som har
                        som mål å forbedre sikkerheten vår. Dette gjelder kun
                        for handlinger som er rimelig nødvendige for å
                        demonstrere sårbarheten, og som ikke medfører skade,
                        datatap eller forstyrrelse av tjenester.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>
                        Utenfor scope (eksempler)
                    </h2>
                    <ul className='mt-2 list-disc pl-6 space-y-1'>
                        <li>Clickjacking uten demonstrert påvirkning</li>
                        <li>
                            Brukere som deler passord eller misbruker tilgang på
                            eget initiativ
                        </li>
                        <li>Manglende SPF/DMARC alene uten utnyttbar vektor</li>
                        <li>
                            Rate limiting/bruteforce uten faktisk
                            konto-overtakelse
                        </li>
                        <li>
                            Best-practice anbefalinger uten sårbarhet (send
                            gjerne som tips!)
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Oppdateringer</h2>
                    <p className='mt-2'>
                        Policyen kan oppdateres. Se <code>Expires</code> i{" "}
                        <a
                            className='underline'
                            href='https://www.kodeverketbergen.no/.well-known/security.txt'
                        >
                            security.txt
                        </a>{" "}
                        for gyldighetsperiode.
                    </p>
                </div>
            </section>
        </main>
    );
}
