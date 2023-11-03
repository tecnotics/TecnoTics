import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SecurityIcon from "@mui/icons-material/Security";
import MemoryIcon from "@mui/icons-material/Memory";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import Soluciones from "../../assets/images/SLNCR.png";

function SolucionesCorp() {
  return (
    <div>
      <Navbar />

      <Container sx={{ marginTop: 8 }}>
        <img src={Soluciones} alt="Banner" style={{ width: "100%" }} />
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Aquí inicia la primera fila de Cards */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <CloudQueueIcon color="primary" /> Bienvenidos a la Era Digital con Tecnotics
                </Typography>
                <Typography variant="body1" paragraph>
                  En Tecnotics Soluciones Corporativas, creemos en aprovechar lo mejor de la
                  tecnología para ofrecerte soluciones de vanguardia...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <SecurityIcon color="primary" /> Protección y Seguridad Garantizada
                </Typography>
                <Typography variant="body1" paragraph>
                  Con nuestros servidores dedicados, la integridad de tus datos es nuestra
                  prioridad...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Aquí inicia la segunda fila de Cards */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <MemoryIcon color="primary" /> Configuración Personalizada para tus Necesidades
                </Typography>
                <Typography variant="body1" paragraph>
                  Ofrecemos opciones de configuración a medida, adaptadas a las especificidades de
                  tu empresa...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <SupportAgentIcon color="primary" /> Soporte Técnico Inigualable
                </Typography>
                <Typography variant="body1" paragraph>
                  Nuestro equipo técnico está siempre listo para asistirte...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <MoreInfoButton />
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
}

export default SolucionesCorp;
