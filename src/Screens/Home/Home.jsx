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
import ServidoresNube from "../../../src/assets/images/ServidoresNube.png";
import ServiciosCloud from "../../../src/assets/images/ServiciosCloud.png";
import SolucionesCorporativas from "../../../src/assets/images/SolucionesCorporativas.png";
import Card1 from "../../../src/assets/images/AcronisCard1.webp";
import Card2 from "../../../src/assets/images/CardOffice.png";
import Card3 from "../../../src/assets/images/Outsourcing/dall-e24-outsorcing imagen.png";
import Card4 from "../../../src/assets/images/TI/dall-e37-cientificos en servidores.png";
import Card5 from "../../../src/assets/images/TI/dall-e38-servidores estadistica.png";
import Card6 from "../../../src/assets/images/TI/dall-e39-hackers reunidos.png";
import Card7 from "../../../src/assets/images/Cloud/dall-e10-equipo trabajando frente a servidores.png";
import Card8 from "../../../src/assets/images/Cloud/dall-e9-escudo verde contra hackers.png";
import Vanguardia from "../../assets/images/Vanguard.png"
import { Typography,Button, Card, CardContent, CardMedia } from "@mui/material";
import Carrousel from "../../Components/Carrousels/Carrousel";
import { Link } from "react-router-dom";
import "./Home.css";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

   const cardsContent = [
     {
       title: "Servidores Dedicados",
       imageUrl: Card4,
       content:
         "Nuestros servidores dedicados ofrecen rendimiento y confiabilidad excepcionales. Impulsa tu infraestructura de TI con nuestros servidores de alto rendimiento.",
       list: [
         "Rendimiento excepcional",
         "Confiabilidad garantizada",
         "Infraestructura de TI potenciada",
       ],
       link: "/ver-mas-servidor-nube",
     },
     {
       title: "Servidores VPS",
       imageUrl: Card5,
       content:
         "Los servidores VPS te brindan flexibilidad y control. Escala recursos según tus necesidades con nuestros servidores virtuales.",
       list: [
         "Flexibilidad y control",
         "Escalabilidad de recursos",
         "Administración de servidores virtuales",
       ],
       link: "/ver-mas-servidor-vps",
     },
     {
       title: "Servicios TI",
       imageUrl: Card6,
       content:
         "Nuestros servicios de TI ofrecen soporte integral para tu empresa. Optimiza tu infraestructura tecnológica con nuestra experiencia.",
       list: [
         "Soporte integral de TI",
         "Optimización de infraestructura",
         "Experiencia en servicios tecnológicos",
       ],
       link: "/servicios-ti",
     },
     {
       title: "Acronis",
       imageUrl: Card1,
       content:
         "Ofrecemos soluciones de respaldo y recuperación de datos líderes en la industria a través de Acronis. Mantén tus datos seguros y respaldados con nuestra experiencia en Acronis",
       list: ["Soluciones de respaldo", "Recuperación de datos", "Experiencia en Acronis"],
       link: "/acronis1",
     },
     {
       title: "Office 365",
       imageUrl: Card2,
       content:
         "Office 365 te ofrece una suite de herramientas de productividad en la nube. Descubre sus beneficios para tu negocio.",
       list: [
         "Suite de productividad en la nube",
         "Beneficios para tu negocio",
         "Colaboración en línea",
       ],
       link: "/cotizador-office",
     },
     {
       title: "Outsourcing",
       imageUrl: Card3,
       content:
         "Nuestros servicios de outsourcing te permiten enfocarte en lo que realmente importa. Deja la tecnología en nuestras manos.",
       list: ["Enfoque en lo que importa", "Tecnología gestionada", "Eficiencia empresarial"],
       link: "/acronis3",
     },
     {
       title: "Kaspersky",
       imageUrl: Card8,
       content:
         "Kaspersky ofrece soluciones de seguridad informática de confianza. Protege tus sistemas y datos con nuestras herramientas.",
       list: [
         "Seguridad informática confiable",
         "Protección de sistemas y datos",
         "Prevención de amenazas",
       ],
       link: "/kaspersky",
     },
     {
       title: "FlashStart",
       imageUrl: Card7,
       content:
         "Descubre cómo FlashStart puede ayudarte a proteger tu red y dispositivos contra amenazas en línea. Seguridad cibernética avanzada al alcance de tu mano.",
       list: [
         "Protección de red y dispositivos",
         "Seguridad cibernética avanzada",
         "Prevención de amenazas en línea",
       ],
       link: "/flashstart",
     },
   ];


  const carouselImages = [
    Acronis,
    FlashStart,
    Office,
    Outsourcing,
    Karspersky,
    ServidoresNube,
    ServiciosCloud,
    SolucionesCorporativas
  ];

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
            <motion.div initial="hidden" animate="visible" variants={headerVariants}>
              <Typography variant="h4">
                <b>¿Quiénes Somos? </b>
              </Typography>
              <p>
                <b>Tecnotics</b> es más que una empresa de tecnología; somos su socio estratégico en
                la era digital. Con una década de experiencia en la industria y un equipo
                multidisciplinario de expertos, hemos asumido la misión de impulsar la excelencia
                técnica, manteniendo un enfoque inquebrantable en la calidad y en el servicio al
                cliente.
              </p>
              <p>
                Con años de experiencia en el mercado, nuestro equipo de expertos en seguridad
                cibernética está dedicado a desarrollar y ofrecer las mejores soluciones para
                proteger la información crítica de su organización.
              </p>
              <br />
              <MoreInfoButton />
            </motion.div>
          </div>
        </section>

        <section></section>
        <section className="cards-section">
          <motion.div initial="hidden" animate="visible" variants={headerVariants}>
            <Typography variant="h4">
              <b>¿Que mas hacemos? </b>
            </Typography>
            <br />
          </motion.div>
          <Grid container spacing={4}>
            {cardsContent.map(
              (card, index) =>
                index % 4 === 0 && (
                  <Grid container item spacing={3} key={index}>
                    {cardsContent.slice(index, index + 4).map((card, subIndex) => (
                      <Grid item xs={12} sm={6} md={3} key={subIndex}>
                        <Card className="Card">
                          <CardMedia
                            component="img"
                            alt={card.title}
                            height="200"
                            image={card.imageUrl}
                          />

                          <CardContent>
                            <Typography variant="h4">
                              <b>{card.title}</b>
                            </Typography>
                            <p>{card.content}</p>
                            <ul>
                              {card.list.map((item, listIndex) => (
                                <li key={listIndex}>{item}</li>
                              ))}
                            </ul>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to={card.link}
                            >
                              Ver más
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )
            )}
          </Grid>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
