import { Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import fondo from "../../assets/images/AcronisCard6.webp"
import "./Outsourcing.css";

const Outsourcing = () => {
  const pageTitle = "Outsourcing de TI";
  const pageContent = `Nuestra empresa se especializa en ofrecer servicios de Outsourcing de Tecnología de la Información (TI) de alta calidad y personalizados para satisfacer las necesidades específicas de tu negocio. Con un equipo altamente calificado de expertos en TI, estamos aquí para ayudarte a optimizar tus operaciones y mejorar la eficiencia de tu empresa.

  Nuestros servicios de outsourcing de TI incluyen:
  
  - Administración de redes y sistemas.
  - Soporte técnico y mantenimiento de hardware y software.
  - Desarrollo de software a medida.
  - Seguridad informática y gestión de riesgos.
  - Consultoría tecnológica y estrategia de TI.
  
  Ya sea que necesites un soporte técnico confiable, soluciones de seguridad cibernética avanzadas o desarrollo de software personalizado, estamos preparados para ofrecerte las mejores soluciones para tu negocio. Nuestro enfoque es brindarte tranquilidad para que puedas concentrarte en hacer crecer tu empresa mientras nosotros cuidamos de tus necesidades tecnológicas.

  ¡Contáctanos hoy mismo para descubrir cómo podemos ayudarte a llevar tu empresa al siguiente nivel en el mundo digital!`;

  const imageSrc = "/ruta/a/tu/imagen.jpg"; // Ruta de la imagen que deseas mostrar

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className="title" variant="h3">
              <b>{pageTitle}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className="content" variant="body1">
              {pageContent}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              className="image"
              src={fondo}
              alt="Imagen de outsourcing de TI"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Outsourcing;
