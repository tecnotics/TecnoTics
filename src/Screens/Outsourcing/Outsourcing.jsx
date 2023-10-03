import {
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Icon,
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
} from "@mui/icons-material";
import "./Outsourcing.css";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import { Link, useNavigate } from "react-router-dom";

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
  const pageTitle = "Outsourcing de TI";

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
      description:
        "También brindamos opciones de medio tiempo para adaptarnos a tu presupuesto.",
    },
    {
      title: "Bolsa de Horas",
      description:
        "Flexibilidad adicional con una bolsa de horas que puedes utilizar según tus necesidades.",
    },
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
  ];

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className="title" variant="h3">
              <b>{pageTitle}</b>
            </Typography>
          </Grid>
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
                    <strong>Nuestra empresa se especializa</strong> en ofrecer
                    servicios de
                    <strong>
                      {" "}
                      Outsourcing de Tecnología de la Información (TI)
                    </strong>{" "}
                    de alta calidad y personalizados para satisfacer las
                    necesidades específicas de tu negocio. Con un equipo
                    altamente calificado de expertos en TI, estamos aquí para
                    ayudarte a optimizar tus operaciones y mejorar la eficiencia
                    de tu empresa.
                  </p>

                  <p>
                    <strong>
                      Nuestros servicios de outsourcing de TI incluyen:
                    </strong>
                  </p>
                  <ul>
                    <li>Administración de redes y sistemas.</li>
                    <li>
                      Soporte técnico y mantenimiento de hardware y software.
                    </li>
                    <li>Desarrollo de software a medida.</li>
                    <li>Seguridad informática y gestión de riesgos.</li>
                    <li>Consultoría tecnológica y estrategia de TI.</li>
                  </ul>

                  <p>
                    Ya sea que necesites un soporte técnico confiable,
                    soluciones de seguridad cibernética avanzadas o desarrollo
                    de software personalizado, estamos preparados para ofrecerte
                    las mejores soluciones para tu negocio. Nuestro enfoque es
                    brindarte tranquilidad para que puedas concentrarte en hacer
                    crecer tu empresa mientras nosotros cuidamos de tus
                    necesidades tecnológicas.
                  </p>
                </div>
              </Typography>
              <br />
              <MoreInfoButton />
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
        <Grid container spacing={2}>
          {inHouseServices.map((service, index) => (
            <Grid key={index} item xs={4}>
              <IconButton
                component={Link}
                to={cardRoutes[index]}
                onClick={() => handleCardClick(index)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0, // Elimina el espacio interior del botón
                  backgroundColor: "transparent", // Fondo transparente
                }}
              >
                <Icon style={{ fontSize: "64px", color: "#ff5733" }}>
                  {iconos[index]}
                </Icon>
                <Typography variant="body2" align="center">
                  <b>{service.title}</b>
                </Typography>
                <Typography variant="body2" align="center">
                  {service.description}
                </Typography>
              </IconButton>
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
