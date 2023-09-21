import React from "react";
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
} from "@mui/material";
import { tecnoTicsServices } from "./DataNube";
import { motion } from "framer-motion";
import "./ServiciosNube.css"

function ServiciosNube() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container className="container">
        <Typography variant="h3">
          <b>{tecnoTicsServices.title}</b>
        </Typography>
        <br />
        <Grid container spacing={3}>
          {tecnoTicsServices.services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      </Container>
      <Footer />
    </>
  );
}

export default ServiciosNube;
