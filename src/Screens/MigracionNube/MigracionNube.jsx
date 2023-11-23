import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import MigracionNubeBanner from "../../assets/images/MigracionNubeBanner.png";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";

function MigracionNube() {
  const services = [
    {
      title: "Análisis y Planificación",
      description:
        "Antes de realizar cualquier migración, nuestro equipo se encarga de analizar las necesidades específicas de tu negocio. Elaboramos un plan estratégico para asegurar que la transición sea lo más fluida posible.",
      image: MigracionNubeBanner,
      icon: <CloudIcon />,
    },
    {
      title: "Migración a Azure",
      description:
        "Como expertos en Microsoft Azure, te asistimos en lamigración de tus aplicaciones, datos y infraestructura, asegurando que tu empresa aproveche al máximo las soluciones innovadoras que ofrece Azure.",
      image: MigracionNubeBanner,
      icon: <StorageIcon />,
    },
    {
      title: "Migración a Amazon AWS",
      description:
        " Amazon Web Services (AWS) es uno de los líderes en soluciones en la nube. Con nuestro conocimiento profundo de AWS, te guiamos en la transición, garantizando una migración sin problemas y maximizando las ventajas de este poderoso proveedor de la nube.",
      image: MigracionNubeBanner,
      icon: <BusinessIcon />,
    },
    {
      title: "Otros Proveedores:",
      description:
        "Antes de realizar cualquier migración, nuestro equipo se encarga de analizar las necesidades específicas de tu negocio. Elaboramos un plan estratégico para asegurar que la transición sea lo más fluida posible.",
      image: MigracionNubeBanner,
      icon: <PublicIcon />,
    },
  ];

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <img src={MigracionNubeBanner} alt="Banner" style={{ width: "100%" }} />
        <br />
        <br />
        <Typography variant="body1" paragraph>
          En un mundo digital cada vez más interconectado, <b>la migración a la nube</b> se ha
          convertido en un paso esencial para las empresas que buscan optimizar sus operaciones,
          mejorar la escalabilidad y garantizar una mayor resistencia frente a desafíos imprevistos.
          En TecnoTics , somos especialistas en facilitar este tránsito hacia un futuro más
          eficiente y seguro.
        </Typography>

        <Typography variant="h4" gutterBottom component="div">
          <b>Nuestros Servicios de Migración a la Nube</b>
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  marginBottom: 2,
                }}
                elevation={3}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.icon} {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        <MoreInfoButton />
      </Container>
      <br />
      <Footer />
    </>
  );
}

export default MigracionNube;
