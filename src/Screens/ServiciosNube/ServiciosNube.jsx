import  { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { tecnoTicsServices, acronisServices } from "./DataNube";
import { motion } from "framer-motion";
import "./ServiciosNube.css";

function ServiciosNube() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <Container className="container">
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            <b>Servicios Cloud</b>
          </Typography>
        </Grid>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="TecnoTics" />
          <Tab label="ACRONIS" />
        </Tabs>
        <br />
        <br />

        {/* Contenido de la sección de TecnoTics */}
        {activeTab === 0 && (
          <Grid container spacing={3}>
            {tecnoTicsServices.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      alt={service.title}
                      height="140"
                      image={service.imageUrl}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {service.description}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        href={service.moreLink}
                      >
                        Ver más
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Contenido de la sección de ACRONIS */}
        {activeTab === 1 && (
          <Grid container spacing={3}>
            {acronisServices.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      alt={service.title}
                      height="140"
                      image={service.imageUrl}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {service.description}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        href={service.moreLink}
                      >
                        Ver más
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default ServiciosNube;
