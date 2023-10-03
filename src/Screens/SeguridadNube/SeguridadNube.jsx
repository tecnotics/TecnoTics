import { Container, Typography, Grid, Paper } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import chip from "../../assets/images/chip.jpg"

// JSON con el contenido para facilitar su uso
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

function SeguridadNube() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" gutterBottom>
          <b>Seguridad en la Nube</b>
        </Typography>

        <Grid container spacing={3}>
          {contentData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.text}</Typography>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ maxWidth: "100%", marginTop: "20px" }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br />
      <Footer />
    </>
  );
}

export default SeguridadNube;
