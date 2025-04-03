export default function History() {
  return (
    <div>
      <div className="flex flex-col  mx-4 md:mx-18">
        <h1 className="text-2xl lg:text-4xl font-bold text-center py-6">
          {" "}
          Vår historie
        </h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-4/9 text-base flex flex-col items-left justify-center gap-4 py-4">
            <p>
              {" "}
              Det startet Oktober 2022. Da var det fire kandidater fra
              utviklerkurset, Kodehode som ble tilbudt praksisplass. Fra start,
              skulle det utvikles et helt nytt prosjekt som senere ble til
              Bergen Armwrestling sin nettside. I Kodeverket Bergen er vi
              opptatt av at hver enkelt praksiskandidat får muligheten til å
              utvikle seg faglig og personlig. Vi skal kunne snu oss fort rundt
              og hjelpe våre kunder med det som trengs. Kodeverket Bergen er
              opptatt av å levere nettsider som ser like bra ut både på PC og
              mobil. Sammen med våre kunder setter vi oss alltid ned for å finne
              den løsningen som passer deg best.
            </p>{" "}
          </div>
          <img
            src="/historie.png"
            alt="man in fornt of computer"
            className="md:w-5/9"
          />
        </div>
      </div>
    </div>
  );
}
