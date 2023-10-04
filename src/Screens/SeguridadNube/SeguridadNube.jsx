import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import chip from "../../assets/images/chip.jpg";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";

const contentData = [
  {
    title: "🌐 Bienvenidos al Futuro Seguro con TecnoTics",
    text: "En un mundo digital en constante evolución, la seguridad y la continuidad de los negocios se han convertido en pilares fundamentales. En TecnoTics, entendemos este imperativo y hemos diseñado soluciones específicas para garantizar que tu negocio nunca se detenga, incluso frente a los desafíos más inesperados.",
    image: chip,
  },
  {
    title: "🛡 Planes de Continuidad de Negocio Personalizados",
    text: "No todos los negocios son iguales, y por eso, no ofrecemos soluciones genéricas. Trabajamos codo a codo contigo para diseñar un Plan de Continuidad de Negocio que se adapte a tus especificidades y necesidades. Evaluamos potenciales riesgos, identificamos puntos críticos y diseñamos estrategias para garantizar que, sin importar lo que ocurra, tu negocio siga adelante.",
    image: chip,
  },
  {
    title: "☁ Respaldo en Nubes Alternas: Duplicidad Segura",
    text: "Entendemos que en el ámbito digital, tener todos los datos en un solo lugar puede ser un riesgo. Por eso, ofrecemos respaldo en nubes alternas, garantizando que si hay un problema en una, otra está lista para tomar la posta. Esta duplicidad no solo asegura la continuidad de tus operaciones, sino que también brinda una capa adicional de protección contra pérdida de datos y amenazas cibernéticas.",
    image: chip,
  },
  {
    title: "🤝 Comprometidos con la Resiliencia de tu Negocio",
    text: "La resiliencia es la habilidad de adaptarse y superar adversidades. En TecnoTics, no solo nos esforzamos por proteger tu negocio, sino también por garantizar su adaptabilidad y fortaleza ante cualquier eventualidad.",
    image: chip,
  },
  {
    title: "🌟 Equipo Experto a tu Disposición",
    text: "Nuestro equipo de profesionales en seguridad y continuidad de negocio está siempre dispuesto a asistirte, guiarte y responder a tus inquietudes. Su experiencia y dedicación son la garantía de que estás en las mejores manos.",
    image: chip,
  },
];

const SeguridadNube = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="title" variant="h3">
              <b>Seguridad en la Nube</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              className="content"
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={2}>
                {contentData.map((item, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Card elevation={3}>
                      <CardContent>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="body1">{item.text}</Typography>
                      </CardContent>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ maxWidth: "100%" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "16px",
                        }}
                      >
                        <MoreInfoButton />
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default SeguridadNube;
