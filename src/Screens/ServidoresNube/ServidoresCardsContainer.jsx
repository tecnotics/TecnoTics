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

const servidores = [
  {
    id: "4-CORE-XEON",
    image: intel,
    nombre: "4-CORE-XEON",
    precioPorGB: 0.1,
    precioPorGBSSD: 0.2,
    info: "Información sobre Servidor 1",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
  },
  {
    id: "6-CORE-RYZEN",
    image: amd,
    nombre: "6-CORE-RYZEN",
    precioPorGB: 0.15,
    precioPorGBSSD: 0.25,
    info: "Información sobre Servidor 2",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["32 GB", "64 GB", "128 GB"],
  },
  {
    id: "16-CORE-EPYC",
    image: amd,
    nombre: "16-CORE-EPYC",
    precioPorGB: 0.5,
    precioPorGBSSD: 0.35,
    info: "Información sobre Servidor 3",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
  },
  {
    id: "32-CORE-XEON",
    image: intel,
    nombre: "32-CORE-XEON",
    precioPorGB: 0.5,
    precioPorGBSSD: 0.35,
    info: "Información sobre Servidor 4",
    locations: ["Atlanta", "Miami", "Chicago", "Tampa", "Dallas"],
    memoryOptions: ["16 GB", "32 GB", "64 GB"],
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
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              <b>Servidores Nube</b>
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
                        Precio por GB: ${servidor.precioPorGB}
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
      </Container>
      <br />
      {selectedServer && <ServidoresNube servidor={selectedServer} />}
      <br/>
      <Footer />
    </>
  );
}
