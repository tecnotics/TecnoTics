import { motion } from "framer-motion";
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Team from "../../Components/Team/Team";
import Footer from "../../Components/Footer/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionTitleStyle = {
  marginBottom: "20px",
  fontSize: "24px",
  textAlign: "center",
};

const sectionTextStyle = {
  fontSize: "15px",
  textAlign: "center",
};

function QuienesSomos() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">
              <b>Quiénes Somos</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginBottom: "20px" }}>
              <Typography variant="h4" style={sectionTitleStyle}>
                Nuestra Misión
              </Typography>
              <Typography style={sectionTextStyle}>
                Somos una empresa de soluciones corporativas especializadas en
                tecnología que brinda a nuestros clientes las herramientas y el
                conocimiento necesarios para optimizar sus procesos y alcanzar
                sus objetivos de negocio.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginBottom: "20px" }}>
              <Typography variant="h4" style={sectionTitleStyle}>
                Nuestra Visión
              </Typography>
              <Typography style={sectionTextStyle}>
                Ser la empresa líder en soluciones corporativas tecnológicas en
                América Latina, brindando a nuestros clientes la mejor
                experiencia posible y contribuyendo al desarrollo de la región.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Team />
          </Grid>
        </Grid>
      </Container>
    <br />
      <Footer />
    </>
  );
}

export default QuienesSomos;
