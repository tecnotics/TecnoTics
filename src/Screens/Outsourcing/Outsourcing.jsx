import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Icon,
  CardContent,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import fondo from "../../assets/images/AcronisCard6.webp";
import fondo2 from "../../assets/images/AcronisCard5.webp";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  LocalLibrary as LocalLibraryIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Laptop as LaptopMacIcon,
} from "@mui/icons-material";
import "./Outsourcing.css";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import { Link, useNavigate } from "react-router-dom";
import ServiciosEspTi from "../../assets/images/ServiciosEspTi.png"

const BenefitsList = ({ benefits }) => (
  <List>
    {benefits.map((benefit, index) => (
      <ListItem key={index}>
        <CheckCircleOutlineIcon />
        <ListItemText primary={benefit} />
      </ListItem>
    ))}
  </List>
);

const Outsourcing = () => {

  const inHouseServices = [
    {
      title: "In-House",
      description:
        "Contamos con un equipo de TI dedicado que trabaja directamente en tus instalaciones.",
    },
    {
      title: "Tiempo Completo",
      description:
        "Ofrecemos servicios de tiempo completo para cubrir todas tus necesidades de TI.",
    },
    {
      title: "Medio Tiempo",
      description: "También brindamos opciones de medio tiempo para adaptarnos a tu presupuesto.",
    },
    {
      title: "Bolsa de Horas",
      description:
        "Flexibilidad adicional con una bolsa de horas que puedes utilizar según tus necesidades.",
    },
  ];

  const serviciosTI = {
    servicios: [
      "Administración de redes y sistemas.",
      "Soporte técnico y mantenimiento de hardware y software.",
      "Desarrollo de software a medida.",
      "Seguridad informática y gestión de riesgos.",
      "Consultoría tecnológica y estrategia de TI.",
    ],
  };

  const cardColors = [
    "#FFC107", 
    "#03A9F4", 
    "#8BC34A", 
    "#FF5722", 
  ];

  const outsourcingBenefits = [
    "Reducción de costos operativos.",
    "Acceso a un equipo de expertos en TI sin tener que contratar personal interno.",
    "Enfoque en el núcleo de tu negocio mientras gestionamos la tecnología.",
    "Mayor flexibilidad y escalabilidad.",
    "Mejora de la eficiencia y productividad.",
  ];

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardRoutes = ["/ruta1", "/ruta2", "/ruta3", "/ruta4"];

  const handleCardClick = () => {
    const navigate = useNavigate();
    navigate("/");
  };

  const iconos = [
    <LocalLibraryIcon fontSize="string" />,
    <CloudIcon fontSize="string" />,
    <SecurityIcon fontSize="string" />,
    <CodeIcon fontSize="string" />,
    <LaptopMacIcon fontSize="string" />,
  ];

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <img src={ServiciosEspTi} alt="Banner" style={{ width: "100%" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <motion.div
              className="content"
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <Typography variant="body1" style={{ textAlign: "justify" }}>
                <div>
                  <p>
                    <strong>Nuestra empresa se especializa</strong> en ofrecer servicios de
                    <strong> Outsourcing de Tecnología de la Información (TI)</strong> de alta
                    calidad y personalizados para satisfacer las necesidades específicas de tu
                    negocio. Con un equipo altamente calificado de expertos en TI, estamos aquí para
                    ayudarte a optimizar tus operaciones y mejorar la eficiencia de tu empresa.
                  </p>

                  <p>
                    <strong>Nuestros servicios de outsourcing de TI incluyen:</strong>
                  </p>
                  <br />
                  <Grid container spacing={2}>
                    {serviciosTI.servicios.map((servicio, index) => (
                      <Grid key={index} item xs={4}>
                        <IconButton
                          component={Link}
                          to={cardRoutes[index]}
                          onClick={() => handleCardClick(index)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 0,
                            backgroundColor: "transparent",
                          }}
                        >
                          <Icon style={{ fontSize: "44px", color: "#ff5733" }}>
                            {iconos[index]}
                          </Icon>
                          <Typography variant="body2" align="center">
                            <b>{servicio} </b>
                          </Typography>
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                  <br />
                  <p>
                    Ya sea que necesites un soporte técnico confiable, soluciones de seguridad
                    cibernética avanzadas o desarrollo de software personalizado, estamos preparados
                    para ofrecerte las mejores soluciones para tu negocio. Nuestro enfoque es
                    brindarte tranquilidad para que puedas concentrarte en hacer crecer tu empresa
                    mientras nosotros cuidamos de tus necesidades tecnológicas.
                  </p>
                </div>
              </Typography>
              <br />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              className="image"
              src={fondo}
              alt="Imagen de outsourcing de TI"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.img
              className="image"
              src={fondo2}
              alt="Imagen de outsourcing de TI"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">
              <strong>Beneficios de Outsourcing de TI</strong>
            </Typography>
            <motion.div
              className="benefits"
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <BenefitsList benefits={outsourcingBenefits} />
            </motion.div>
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={3} style={{ margin: "20px 0" }}>
          {inHouseServices.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                className="outsourcing-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 * index },
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={cardRoutes[index]}
                  onClick={() => handleCardClick(index)}
                >
                  <Card style={{ backgroundColor: cardColors[index % cardColors.length] }}>
                    <CardContent className="outsourcing-card-content">
                      <Typography variant="h6">{service.title}</Typography>
                      <Typography variant="body2">{service.description}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <MoreInfoButton />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Outsourcing;
