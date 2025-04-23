export default function History() {
    return (
        <div>
            <div className='flex flex-col  mx-4 md:mx-18'>

                <h1 className='text-4xl font-bold text-center py-6'>

                

                    {" "}
                    Vår historie
                </h1>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='md:w-4/9 text-base flex flex-col items-left justify-center gap-4 py-4'>
                        <p>
                            {" "}
                            Kodeverket Bergen ble grunnlagt i oktober 2022 med
                            et mål om å skape en trygg arena for utvikling, både
                            faglig og personlig. Oppstarten begynte med fire
                            kandidater fra utviklerkurset Kodehode, som fikk
                            praksisplass og muligheten til å være med på å forme
                            et helt nytt prosjekt. Dette prosjektet utviklet seg
                            til nettsiden for Bergen Armwrestling—et symbol på
                            hva dedikasjon og samarbeid kan utrette. Siden den
                            gang har Kodeverket Bergen fortsatt å vokse, med et
                            sterkt fokus på å gi praksiskandidater sjansen til å
                            oppnå sitt potensial, samtidig som vi leverer
                            skreddersydde digitale løsninger til våre kunder. Vi
                            jobber raskt og effektivt for å møte behovene til
                            bedrifter, og alle nettsider vi utvikler ser like
                            bra ut på både PC og mobil. Hos Kodeverket Bergen
                            handler det om mer enn teknologi—det handler om
                            mennesker. Sammen med våre kunder finner vi alltid
                            frem til den perfekte løsningen, skreddersydd for
                            akkurat deg.
                        </p>{" "}
                    </div>
                    <img
                        src='/historie.png'
                        alt='man in fornt of computer'
                        className='md:w-5/9'
                    />
                </div>
            </div>
        </div>
    );
}
