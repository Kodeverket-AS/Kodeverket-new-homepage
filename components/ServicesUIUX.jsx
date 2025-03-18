import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ServicesUIUX() {
  return (
    <>
      <div className="text-center text-2xl font-bold py-12 mt-4 ">
        <h2> Hva gjør vi ? </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Card
          className="flex justify-center items-center"
          sx={{ minWidth: 275, maxWidth: 300 }}
        >
          <CardContent className="flex justify-center items-center ">
            <img src="/logoVertical.png" alt="KodeVerket Bergen logo" />
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              01
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              UX Research
            </Typography>
            <Typography variant="body2">
              Vi gjennomfører grundig UX-research for å forstå brukernes behov
              og skape løsninger som gir enestående opplevelser.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              02
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              UX Design
            </Typography>
            <Typography variant="body2">
              Vår UX-designprosess fokuserer på å skape intuitive og
              meningsfulle brukeropplevelser som engasjerer og tilfredsstiller
              brukerne.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              03
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              UI Design
            </Typography>
            <Typography variant="body2">
              Vi designer estetisk tiltalende og funksjonelle grensesnitt som
              kombinerer kreativitet med brukervennlighet.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              04
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Prototyping
            </Typography>
            <Typography variant="body2">
              Vi bruker prototyping for å teste og forbedre ideer tidlig i
              prosessen, slik at vi kan levere løsninger som fungerer fra dag
              én.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
