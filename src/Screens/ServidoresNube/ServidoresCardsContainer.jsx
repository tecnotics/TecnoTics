import { useState } from "react";
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
import ServidoresDedicados from "../../assets/images/ServidoresDedicados.png";

const servidores = [
  {
    id: "4-CORE-XEON",
    image: intel,
    nombre: "4-CORE-XEON",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 130,
  },
  {
    id: "6-CORE-RYZEN",
    image: amd,
    nombre: "6-CORE-RYZEN",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["32 GB", "64 GB", "128 GB"],
    precio: 260,
  },
  {
    id: "16-CORE-EPYC",
    image: amd,
    nombre: "16-CORE-EPYC",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 520,
  },
  {
    id: "32-CORE-XEON",
    image: intel,
    nombre: "32-CORE-XEON",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
    precio: 1040,
  },
];

export default function ServerCards() {
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
        <img src={ServidoresDedicados} alt="Banner" style={{ width: "100%" }} />
        <br />
        <br />
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
              <b>¿Qué son los Servidores Dedicados?</b>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
              Un servidor dedicado es una máquina física que se utiliza exclusivamente para alojar
              aplicaciones, sitios web o servicios específicos para una sola entidad, en lugar de
              compartir recursos con otros usuarios, como ocurre en el alojamiento compartido o en
              servidores virtuales. En otras palabras, un servidor dedicado es dedicado a una única
              organización o individuo.
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
                        <b>{servidor.nombre} </b>
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
