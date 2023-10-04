import { Container, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Grid } from "@mui/material";
import Footer from "../../Components/Footer/Footer";

function ServiciosDNS() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" gutterBottom>
          <b>Servicios DNS </b>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src="https://cloud.flashstart.com/customerarea/ca-uploads/logo/logo64207.png"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Cada vez más, los hackers atacan a las organizaciones colándose en
              las conexiones remotas, pero, por suerte, existe una{" "}
              <strong>
                tecnología avanzada para proteger la navegación de los
                trabajadores y estudiantes remotos
              </strong>
              , como si estuvieran en la oficina o en la escuela.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Se trata de ClientShield, la aplicación de FlashStart que amplía
              la protección a los puntos finales fuera de las instalaciones,
              permitiendo:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>» Bloquear automáticamente el malware</strong>, el robo de
              datos, el fraude de credenciales y la extorsión relacionada.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>» Filtrar el acceso a contenidos ilegales</strong>{" "}
              (drogas, armas, etc.) e inapropiados (pornografía, juegos de azar,
              etc.) en los dispositivos dados.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>» Impedir las distracciones en línea</strong> (redes
              sociales, juegos, streaming, etc.) en determinados momentos,
              protegiendo al mismo tiempo la eficacia a distancia.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              La <strong>protección ClientShield</strong> está integrada en el
              filtro en la nube FlashStart utilizado en las instalaciones, se
              instala en pocos minutos y protege a los usuarios en más de ciento
              cincuenta países de todo el mundo.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Nuestros socios estàn encantados de ofrecerle una demostración
              gratuita, junto con un soporte altamente cualificado.
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Link href="https://cloud.flashstart.com/customerarea/activate?fo_codcli=64207&lang=ES">
              <img
                src="https://flashstart.com/dem/wp-content/uploads/2019/10/cc_dem_btn_richiestainfo-03-300x43.png"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Con nuestros mejores deseos, <br /> Tecnotics - Soluciones
              Corporativas 
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ServiciosDNS;
