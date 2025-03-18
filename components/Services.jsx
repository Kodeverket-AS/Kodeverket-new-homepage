import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


 
export default function BasicCard() {
   
  return (
    <>
      <div className="text-center text-2xl font-bold py-12 my-12  xl:text-xl">
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
          <CardContent  >
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              01
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              UI/UX Design
            </Typography>
            <Typography variant="body2" >
              Vi skaper moderne, estetisk tiltalende og funksjonelle
              designløsninger som gir en unik brukeropplevelse.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent >
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              02
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Front-end
            </Typography>
            <Typography variant="body2">
              Vårt team utvikler intuitive og raske grensesnitt for
              nettapplikasjoner som oppfyller de høyeste ytelsesstandardene.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
          <CardContent >
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, marginBottom: 7.5 }}
            >
              03
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Back-end
            </Typography>
            <Typography variant="body2">
              Vi bygger pålitelige og skalerbare backend-systemer som sikrer
              stabil drift og sikkerhet for nettapplikasjoner.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}