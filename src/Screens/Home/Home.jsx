import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Acronis from "../../../src/assets/images/Acronis.png";
import FlashStart from "../../../src/assets/images/FlashStart.png";
import Office from "../../../src/assets/images/OFFICE 365.png";
import Outsourcing from "../../../src/assets/images/Outsourcing Banner.png";
import Karspersky from "../../../src/assets/images/Karspersky.png";
import AcronisCard from "../../../src/assets/images/AcronisCard1.webp";
import AcronisCard2 from "../../../src/assets/images/AcronisCard2.webp";
import AcronisCard3 from "../../../src/assets/images/AcronisCard3.webp";
import { Typography, Tab, Tabs, Box } from "@mui/material";
import Carrousel from "../../Components/Carrousels/Carrousel";
import "./Home.css";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import ServiciosNube from "../ServiciosNube/ServiciosNube";
import SeguridadNube from "../SeguridadNube/SeguridadNube";
import Office365 from "../Office365/Office365";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTab, setCurrentTab] = useState(0); // State para el tab actual

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const carouselImages = [Acronis, FlashStart, Office, Outsourcing, Karspersky];

  // Animación para el encabezado
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Animación para las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Manejar el cambio de pestañas
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
            {" "}
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
          {/* Renderizar el contenido basado en el tab actual */}
          {currentTab === 0 && <Grid container spacing={2}></Grid>}
          {currentTab === 1 && (
            <Grid container spacing={2}>
              <Office365 />
            </Grid>
          )}
          {currentTab === 2 && <Grid container spacing={2}></Grid>}
          {currentTab === 3 && <Grid container spacing={2}></Grid>}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
