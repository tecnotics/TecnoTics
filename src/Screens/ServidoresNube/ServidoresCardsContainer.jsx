import { useState } from "react";
import { motion } from "framer-motion";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import intel from "../../assets/images/Intellogo.png";
import amd from "../../assets/images/amd.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ServidoresNube from "./ServidoresNube";


const servidores = [
  {
    id: "4-CORE-XEON",
    image: intel,
    nombre: "4-CORE-XEON",
    precioPorGBSSD: 0.2,
    info: "Información sobre Servidor 1",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 40,
  },
  {
    id: "6-CORE-RYZEN",
    image: amd,
    nombre: "6-CORE-RYZEN",
    precioPorGBSSD: 0.8,
    info: "Información sobre Servidor 2",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["32 GB", "64 GB", "128 GB"],
    precio: 99,
  },
  {
    id: "16-CORE-EPYC",
    image: amd,
    nombre: "16-CORE-EPYC",
    precioPorGBSSD: 0.8,
    info: "Información sobre Servidor 3",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 149,
  },
  {
    id: "32-CORE-XEON",
    image: intel,
    nombre: "32-CORE-XEON",
    precioPorGBSSD: 0.8,
    info: "Información sobre Servidor 4",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 189,
  },
];


export default function ServerCards() {


  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [selectedServer, setSelectedServer] = useState(null);

  const handleServerSelection = (server) => {
    setSelectedServer(server);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              <b>Servidores Dedicados</b>
            </Typography>
          </Grid>
          {servidores.map((servidor) => (
            <Grid item key={servidor.id} xs={12} sm={6} md={4} lg={3}>
              <div onClick={() => handleServerSelection(servidor)}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={servidor.image}
                      alt="marca"
                      style={{
                        objectFit: "contain",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {servidor.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {servidor.info}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Precio por GB SSD: ${servidor.precioPorGBSSD}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Locations: {servidor.locations.join(", ")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Memory Options: {servidor.memoryOptions.join(", ")}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
        <br />
    
      </Container>
      <br />
      {selectedServer && <ServidoresNube servidor={selectedServer} />}
      <br />
      <Footer />
    </>
  );
}
