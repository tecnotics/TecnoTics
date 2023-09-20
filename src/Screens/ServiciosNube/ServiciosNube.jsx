
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";


function ServiciosNube() {

  const acronisData = {
    title: "Soluciones de Nube de Acronis",
    services: [
      {
        title: "Respaldo en la Nube",
        description:
          "Nuestra solución de respaldo en la nube garantiza la seguridad de tus datos con copias de seguridad automatizadas y recuperación rápida.",
      },
      {
        title: "Almacenamiento en la Nube",
        description:
          "Ofrecemos un almacenamiento seguro en la nube para tus archivos y datos, con capacidad escalable según tus necesidades.",
      },
      {
        title: "Protección contra Ransomware",
        description:
          "Protege tu negocio contra el ransomware y otras amenazas cibernéticas con nuestras soluciones avanzadas de seguridad.",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h2" gutterBottom>
          {acronisData.title}
        </Typography>
        <Grid container spacing={3}>
          {acronisData.services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ServiciosNube;
