import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CardComponent from "../../Components/Cards/CardComponent";
import Acronis1 from "../../../src/assets/images/Acronis1.jpg";
import Acronis2 from "../../../src/assets/images/Acronis2.jpg";
import Acronis3 from "../../../src/assets/images/Acronis3.jpg";
import Acronis4 from "../../../src/assets/images/Acronis4.jpg";
import Acronis5 from "../../../src/assets/images/Acronis5.jpg";
import AcronisCard from "../../../src/assets/images/AcronisCard1.webp";
import AcronisCard2 from "../../../src/assets/images/AcronisCard2.webp";
import AcronisCard3 from "../../../src/assets/images/AcronisCard3.webp";
import { Typography } from "@mui/material";
import Carrousel from "../../Components/Carrousels/Carrousel";
import "./Home.css";
import Team from "../../Components/Team/Team";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import { useHistory } from "react-router-dom"; // Importa useHistory

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const carouselImages = [Acronis1, Acronis2, Acronis3, Acronis4, Acronis5];

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
              interval={2000}
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
              <Typography variant="h4">¿Quiénes Somos?</Typography>
              {/* Resto de tu contenido */}
            </motion.div>
          </div>
        </section>
        <section className="card-section">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Typography variant="h4">¿Qué más hacemos?</Typography>
          </motion.div>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <CardComponent
                  title="Acronis Cyber Protect Home Office"
                  image={AcronisCard}
                  description="Proteja hasta cinco ordenadores Windowa o macOS, un número ilimitado de dispositivos moviles Android/iOS, asi como sus datos de Microsoft 365."
                  linkTo="/ruta-1" 
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <CardComponent
                  title="Acronis Cyber Backup"
                  image={AcronisCard2}
                  description="Haga copias de seguridad de un número ilimitado de endpoints,servidores fisicos/virtuales,bases de datos,aplicaciones y cargas de trabajo en la nube. Ediciones disponibles para las necesidades de todas las empresas."
                  linkTo="/ruta-2"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <CardComponent
                  title="Acronis Cyber Protect Cloud"
                  image={AcronisCard3}
                  description="Proporcione una ciberprotección completa a través de una solucion con una integracion de copia de seguridad exclusiva, proteccion antimalware de pila completa y herramientas de seguridad y administracion."
                  linkTo="/ruta-3" 
                />
              </motion.div>
            </Grid>
          </Grid>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
