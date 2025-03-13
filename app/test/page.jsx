"use client";

import { useState } from "react";
import Layout from "/components/Layout.jsx";
import ProsjektertIntro from "@/components/ProsjekterIntro";


const customers = [
  {
    id: 0,
    name: "Bergen Armwrestling Club",
    description: "En klubb som trener ukentlig på Laksevåg. Klubben hadde fra før både facebook og instagram, men følte ikke dem nådde ut til alle som var interessert i idretten. Da Kodeverket Bergen fikk oppgaven med å lage en flott nettside til klubben, var starten først og fremst å designe nettsiden. Gjennom flere møter med kunde, plukket kunde ut det som passet best for dem. Nettsiden ble kodet med hjelp av Next.js og designet med Tailwind. Nettsiden scorer høyt på SEO og gjør idretten mer synlig på nett.",
    logoUrl: "https://www.bergenarmwrestling.no/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogov2.8697bda2.png&w=64&q=75",
    website: "https://bergenarmwrestling.no/"
  },
  {
    id: 1,
    name: "Forny Norge AS",
    description: "Forny Norge er en platform for reparasjon av alt mulig. Målet til Forny er tett knyttet opp mot FN sin 12. bærekraftsmål om ansvarlig forbruk og produksjon. Da Forny Norge så at deres hjemmeside kunne få et enda bedre design og brukervennlighet tok dem kontakt med oss. For kunde var det viktig at siden fremdeles fungerte med integrasjoner i WordPress. Da var valget vårt lett, bruk det kunden ønsker og lag siden etter deres behov. Med hånden på hjertet kan det sees at kunden er fornøyd med resultatet Kodeverket Bergen har levert.",
    logoUrl: "https://www.fornynorge.no/wp-content/uploads/2023/02/Norge-9-300x152.png", 
    website: "https://www.fornynorge.no/"
  },
  {
    id: 2,
    name: "Jobbjakt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet...",
    logoUrl: "https://www.jobbjakt.no/_next/static/media/Jobbjakt_logo.e37438ac.svg", 
    website: "https://www.jobbjakt.no/"
  }
];

const CustomerCard = ({ customer, expandedIndex, toggleDescription }) => {
  return (
    <div className="customer-card p-6 rounded-lg shadow-lg" style={{ backgroundColor: "rgb(3, 105, 161)" }}>
      <img
        src={customer.logoUrl} 
        alt={`${customer.name} Logo`}
        className="w-24 h-24 mb-4 mx-auto"
      />
      <a href={customer.website} target="_blank" rel="noopener noreferrer">
        <h3 className="font-bold text-xl text-white">{customer.name}</h3>
      </a>
        
      <div className="text-white">
        <p
          className={`transition-all duration-300 ease-in-out ${expandedIndex === customer.id ? "" : "overflow-hidden max-h-16"}`}
        >
          {customer.description}
        </p>
        <button
          className="text-white-600 expand-description mt-4"
          onClick={() => toggleDescription(customer.id)}
        >
          {expandedIndex === customer.id ? "Les Mindre" : "Les Mer"}
        </button>
      </div>
    </div>
  );
};

export default function KontaktPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Layout>
      <ProsjektertIntro />
      <section className="main bg-cyan-950 my-12 p-6">
        <h1 className="text-white text-center text-2xl font-bold py-8">Våre kunder</h1>
        <div className="customer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              expandedIndex={expandedIndex}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
