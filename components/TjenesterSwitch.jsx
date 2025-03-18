"use client";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ServicesUIUX from "./ServicesUIUX";
import Services from "@/components/Services"
import Technologies from "@/components/Technologies"
import { useState } from "react";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="flex justify-center items-center my-8 mx-auto"
        >
          <ToggleButton value="web">WEB</ToggleButton>
          <ToggleButton value="design">UI/UX Design</ToggleButton>
        </ToggleButtonGroup>

        {alignment === "design" && (
          <div>
            <div className="flex flex-col  mx-18">
              <h1 className="text-2xl font-bold text-center py-6">
                {" "}
                UI/UX Design
              </h1>
              <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-4/9 text-base flex flex-col items-left justify-center gap-4 py-4">
                  <p>
                    {" "}
                    Vår ekspertise innen UI/UX-design sikrer at vi skaper
                    brukervennlige og estetisk tiltalende løsninger. Vi starter
                    alltid med å lage skisser og wireframes for å visualisere
                    ideer og strukturere innholdet. Deretter utvikler vi
                    detaljerte design som ikke bare ser bra ut, men også
                    fungerer effektivt og intuitivt. Vårt mål er å levere
                    produkter som gir enestående brukeropplevelser.
                  </p>{" "}
                </div>
                <img
                  src="/Design.png"
                  alt="man in fornt of computer"
                  className="md:w-5/9"
                />
              </div>
            </div>
            <ServicesUIUX />
          </div>
        )}

        {alignment === "web" && (
          <div>
            <div className="flex flex-col  mx-18">
              <h1 className="text-2xl font-bold text-center py-6"> WEB</h1>
              <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-4/9 text-base flex flex-col items-left justify-center gap-4 py-4">
                  <p>
                    {" "}
                    Vi er et selskap som spesialiserer oss på å lage moderne og
                    funksjonelle nettsider og mobilapplikasjoner. Vår ekspertise
                    innen webutvikling og apputvikling sikrer at vi leverer
                    løsninger som er både responsive og skreddersydde for våre
                    kunders behov. Vi bruker de nyeste teknologiene for å skape
                    nettsider og mobilapplikasjoner som ikke bare imponerer
                    visuelt, men også gir en sømløs og engasjerende
                    brukeropplevelse. Fra enkle presentasjonssider til avanserte
                    webapplikasjoner og mobilapper – vi har det som trengs for å
                    realisere dine ideer på nett.
                  </p>{" "}
                </div>
                <img
                  src="/WEB.png"
                  alt="man in fornt of computer"
                  className="md:w-5/9"
                />
              </div>
            </div>
            <Services />
            <Technologies/>
          </div>
        )}
      </div>
    </div>
  );
}
