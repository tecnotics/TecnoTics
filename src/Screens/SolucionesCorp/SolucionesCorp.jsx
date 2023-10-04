import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function SolucionesCorp() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              <b>Tecnotics Soluciones Corporativas</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              🌐 Bienvenidos a la Era Digital con Tecnotics
            </Typography>
            <Typography variant="body1" paragraph>
              En Tecnotics Soluciones Corporativas, creemos en aprovechar lo
              mejor de la tecnología para ofrecerte soluciones de vanguardia.
              Con nuestra infraestructura en la nube y servidores dedicados,
              aseguramos un desempeño sin precedentes para tu negocio.
            </Typography>
            <Typography variant="body1" paragraph>
              🔗 Servidores Dedicados de Alta Calidad
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestros servidores dedicados son reconocidos por su rendimiento
              insuperable, confiabilidad y seguridad de primer nivel. Equipados
              con hardware de última generación y una conectividad ultrarrápida,
              tu negocio se beneficiará de una infraestructura robusta y de alta
              disponibilidad.
            </Typography>
            <Typography variant="body1" paragraph>
              💼 Configuración Personalizada para tus Necesidades
            </Typography>
            <Typography variant="body1" paragraph>
              Ofrecemos opciones de configuración a medida, adaptadas a las
              especificidades de tu empresa. Desde las capacidades del CPU, RAM,
              almacenamiento y más, trabajamos de cerca contigo para diseñar una
              solución que se alinee perfectamente con tus objetivos.
            </Typography>
            <Typography variant="body1" paragraph>
              🔒 Protección y Seguridad Garantizada
            </Typography>
            <Typography variant="body1" paragraph>
              Con nuestros servidores dedicados, la integridad de tus datos es
              nuestra prioridad. Implementamos medidas avanzadas de seguridad,
              incluida la protección contra DDoS y sistemas de monitoreo las 24
              horas del día, asegurando que tu información esté segura y
              protegida en todo momento.
            </Typography>
            <Typography variant="body1" paragraph>
              🌟 Soporte Técnico Inigualable
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestro equipo técnico está siempre listo para asistirte. Con
              expertos dedicados y un servicio ágil, garantizamos una respuesta
              eficiente ante cualquier desafío o inquietud que puedas enfrentar.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default SolucionesCorp;
