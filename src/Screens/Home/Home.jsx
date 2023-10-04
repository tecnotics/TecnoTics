import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Acronis from "../../../src/assets/images/Acronis.png";
import FlashStart from "../../../src/assets/images/FlashStart.png";
import Office from "../../../src/assets/images/OFFICE365.png";
import Outsourcing from "../../../src/assets/images/Outsourcing Banner.png";
import Karspersky from "../../../src/assets/images/Karspersky.png";
import { Typography, Tab, Tabs, Box, Button } from "@mui/material";
import Carrousel from "../../Components/Carrousels/Carrousel";
import { Link } from "react-router-dom";
import "./Home.css";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTab, setCurrentTab] = useState(0); 

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const carouselImages = [Acronis, FlashStart, Office, Outsourcing, Karspersky];


  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

 
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="landing-page">
        <section className="carousel-section">
          <motion.div
            className="carousel-wrapper"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Carrousel
              selectedItem={currentSlide}
              onChange={handleSlideChange}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              images={carouselImages}
            />
          </motion.div>
        </section>
        <section className="quienes-somos-section">
          <div className="quienes-somos-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants}
            >
              <Typography variant="h4">
                <b>¿Quiénes Somos? </b>
              </Typography>
              <p>
                <b>Tecnotics</b> es más que una empresa de tecnología; somos su
                socio estratégico en la era digital. Con una década de
                experiencia en la industria y un equipo multidisciplinario de
                expertos, hemos asumido la misión de impulsar la excelencia
                técnica, manteniendo un enfoque inquebrantable en la calidad y
                en el servicio al cliente.
              </p>
              <p>
                Con años de experiencia en el mercado, nuestro equipo de
                expertos en seguridad cibernética está dedicado a desarrollar y
                ofrecer las mejores soluciones para proteger la información
                crítica de su organización.
              </p>
              <br />
              <MoreInfoButton />
            </motion.div>
          </div>
        </section>
        <section className="tabs-section">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Typography variant="h4">
              <b>¿Qué más hacemos? </b>
            </Typography>
          </motion.div>
          <Box display="flex" justifyContent="center">
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Acronis" />
              <Tab label="Office 365" />
              <Tab label="Karspersky" />
              <Tab label="Outsourcing" />
            </Tabs>
          </Box>
          <br />
          <br />
          {currentTab === 0 && (
            <Grid
              className="acronis-tab"
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "40vh" }}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h3" style={{ marginBottom: "10px" }}>
                  <b>Servicio Acronis </b>
                </Typography>
                <p>
                  Ofrecemos soluciones de respaldo y recuperación de datos
                  líderes en la industria a través de Acronis. Mantén tus datos
                  seguros y respaldados con nuestra experiencia en Acronis.
                </p>
                <p>Nuestros servicios de Acronis incluyen:</p>
                <ul>
                  <li>Respaldo automático de datos</li>
                  <li>Recuperación rápida en caso de desastres</li>
                  <li>Seguridad avanzada de datos</li>
                </ul>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/acronis"
                >
                  Ver más sobre Acronis
                </Button>
              </Grid>
            </Grid>
          )}

          {currentTab === 1 && (
            <Grid
              className="office-tab"
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "40vh" }}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h3">
                  <b>Office 365 </b>
                </Typography>
                <p>
                  Mejora la productividad y colaboración de tu equipo con Office
                  365. Ofrecemos implementación, soporte y personalización de
                  Office 365 para tu negocio.
                </p>
                <p>Beneficios de Office 365 con nosotros:</p>
                <ul>
                  <li>
                    Acceso a las últimas versiones de aplicaciones de Microsoft
                    Office
                  </li>
                  <li>
                    Colaboración en tiempo real en documentos y correos
                    electrónicos
                  </li>
                  <li>Soporte técnico experto y personalizado</li>
                </ul>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/office365"
                >
                  Ver más sobre Office 365
                </Button>
              </Grid>
            </Grid>
          )}

          {currentTab === 2 && (
            <Grid
              className="karspersky-tab"
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "40vh" }}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h3">
                  <b>Karspersky </b>
                </Typography>
                <p>
                  Protege tu infraestructura de TI contra amenazas cibernéticas
                  con Karspersky. Nuestros expertos en seguridad te ayudarán a
                  mantener tus sistemas seguros.
                </p>
                <p>Características de nuestros servicios de Karspersky:</p>
                <ul>
                  <li>Detección avanzada de amenazas</li>
                  <li>Gestión centralizada de seguridad</li>
                  <li>
                    Actualizaciones en tiempo real de definiciones de virus
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/kaspersky"
                >
                  Ver más sobre Kaspersky
                </Button>
              </Grid>
            </Grid>
          )}

          {currentTab === 3 && (
            <Grid
              className="outsourcing-tab"
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "40vh" }}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h3">
                  <b>Outsourcing </b>
                </Typography>
                <p>
                  Externaliza tus servicios de TI con nosotros. Ofrecemos
                  soluciones de outsourcing de TI para ayudarte a reducir costos
                  y mejorar la eficiencia operativa.
                </p>
                <p>Beneficios de nuestro servicio de Outsourcing:</p>
                <ul>
                  <li>Reducción de costos operativos</li>
                  <li>Enfoque en tus competencias principales</li>
                  <li>Soporte técnico y mantenimiento proactivo</li>
                </ul>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/outsourcing-ti"
                >
                  Ver más sobre Outsourcing
                </Button>
              </Grid>
            </Grid>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
