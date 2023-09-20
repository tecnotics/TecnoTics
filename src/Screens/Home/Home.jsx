import { useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Importa Framer Motion
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
import { Typography } from "@mui/material";
import Carrousel from "../../Components/Carrousels/Carrousel";
import "./Home.css"; // Importa tu archivo CSS personalizado

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

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
            variants={headerVariants} // Aplica la animación al encabezado
          >
            <Carrousel
              selectedItem={currentSlide}
              onChange={handleSlideChange}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              images={carouselImages} // Pasa las imágenes como prop
            />
          </motion.div>
        </section>
        <section className="quienes-somos-section">
          <div className="quienes-somos-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants} // Aplica la animación al encabezado
            >
              <Typography variant="h4">¿Quiénes Somos?</Typography>
              <p>
                Somos una empresa comprometida con brindar soluciones
                innovadoras en el ámbito de la tecnología y la seguridad
                informática. Nuestra misión es proteger los activos digitales de
                nuestros clientes y proporcionar herramientas que les permitan
                alcanzar el éxito en un mundo cada vez más digitalizado.
              </p>
              <p>
                Con años de experiencia en el mercado, nuestro equipo de
                expertos en seguridad cibernética está dedicado a desarrollar y
                ofrecer las mejores soluciones para proteger la información
                crítica de su organización.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="card-section">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants} // Aplica la animación al encabezado
          >
            <Typography variant="h4">¿Qué más hacemos?</Typography>
          </motion.div>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants} // Aplica la animación a las tarjetas
              >
                <CardComponent
                  title="Card 1"
                  image={Acronis1}
                  description="This is the content of Card 1."
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants} // Aplica la animación a las tarjetas
              >
                <CardComponent
                  title="Card 2"
                  image={Acronis2}
                  description="This is the content of Card 2."
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants} // Aplica la animación a las tarjetas
              >
                <CardComponent
                  title="Card 3"
                  image={Acronis3}
                  description="This is the content of Card 3."
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
