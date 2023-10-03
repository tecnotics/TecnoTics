import React from "react";
import {
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../Components/Footer/Footer";

function MigracionNube() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" gutterBottom>
          <b>Migración a la Nube</b>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">
                  Bienvenidos a la Era Digital con Tecnotics
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  En Tecnotics Soluciones Corporativas, creemos en aprovechar lo
                  mejor de la tecnología para ofrecerte soluciones de
                  vanguardia.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">
                  Servidores Dedicados de Alta Calidad
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Nuestros servidores dedicados son reconocidos por su
                  rendimiento insuperable, confiabilidad y seguridad de primer
                  nivel.
                </Typography>
                <Typography variant="body1">
                  Equipados con hardware de última generación y una conectividad
                  ultrarrápida, tu negocio se beneficiará de una infraestructura
                  robusta y de alta disponibilidad.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="h6">
                  Configuración Personalizada para tus Necesidades
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Ofrecemos opciones de configuración a medida, adaptadas a las
                  especificidades de tu empresa.
                </Typography>
                <Typography variant="body1">
                  Desde las capacidades del CPU, RAM, almacenamiento y más,
                  trabajamos de cerca contigo para diseñar una solución que se
                  alinee perfectamente con tus objetivos.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography variant="h6">
                  Protección y Seguridad Garantizada
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Con nuestros servidores dedicados, la integridad de tus datos
                  es nuestra prioridad.
                </Typography>
                <Typography variant="body1">
                  Implementamos medidas avanzadas de seguridad, incluida la
                  protección contra DDoS y sistemas de monitoreo las 24 horas
                  del día, asegurando que tu información esté segura y protegida
                  en todo momento.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography variant="h6">
                  Soporte Técnico Inigualable
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Nuestro equipo técnico está siempre listo para asistirte.
                </Typography>
                <Typography variant="body1">
                  Con expertos dedicados y un servicio ágil, garantizamos una
                  respuesta eficiente ante cualquier desafío o inquietud que
                  puedas enfrentar.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default MigracionNube;
