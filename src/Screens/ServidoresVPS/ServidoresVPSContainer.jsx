import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import intel from "../../assets/images/Intellogo.png";
import amd from "../../assets/images/amd.png";
import Footer from "../../Components/Footer/Footer";
import ServidoresVps from "../../assets/images/ServidoresVPS.png";
import ServidoresVPS from "./ServidoresVPS";

const servidoresvps = [
  {
    id: "vps-xxs-intel",
    image: intel,
    nombre: "vps.xxs.intel",
    precio: 4,
    sistemaOperativo: "Ubuntu 22.04", // Ejemplo de sistema operativo predeterminado
    dataCenterLocation: "LAX2 (Los Angeles, CA)", // Ejemplo de ubicación predeterminada
    processor: "1 vCPU", // Ejemplo de procesador predeterminado
    memory: "16 GB", // Tomando la primera opción de memoryOptions
    primaryHardDrive: "20GB", // Ejemplo de unidad de disco duro primaria
    bandwidth: "10TB on 1Gbps port", // Ejemplo de ancho de banda
  },
  {
    id: "vps-md-amd",
    image: amd,
    nombre: "vps.md.amd",
    precio: 27,
    sistemaOperativo: "Ubuntu 22.04", // Ejemplo de sistema operativo predeterminado
    dataCenterLocation: "LAX2 (Los Angeles, CA)", // Ejemplo de ubicación predeterminada
    processor: "1 vCPU", // Ejemplo de procesador predeterminado
    memory: "16 GB", // Tomando la primera opción de memoryOptions
    primaryHardDrive: "20GB", // Ejemplo de unidad de disco duro primaria
    bandwidth: "10TB on 1Gbps port", // Ejemplo de ancho de banda
  },
  {
    id: "vps-lg-intel",
    image: intel,
    nombre: "vps.lg.intel",
    precio: 49,
    sistemaOperativo: "Ubuntu 22.04", // Ejemplo de sistema operativo predeterminado
    dataCenterLocation: "LAX2 (Los Angeles, CA)", // Ejemplo de ubicación predeterminada
    processor: "1 vCPU", // Ejemplo de procesador predeterminado
    memory: "16 GB", // Tomando la primera opción de memoryOptions
    primaryHardDrive: "20GB", // Ejemplo de unidad de disco duro primaria
    bandwidth: "10TB on 1Gbps port", // Ejemplo de ancho de banda
  },
];

export default function ServerVPSCards() {
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
        <img src={ServidoresVps} alt="Banner" style={{ width: "100%" }} />
        <br />
        <br />

        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
          <b>¿Qué son los Servidores VPS?</b>
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
          Un servidor VPS, o Servidor Virtual Privado, es una forma avanzada de alojamiento web que
          fusiona las características de un servidor dedicado con la flexibilidad de la
          virtualización. En lugar de contar con un servidor físico dedicado a una sola organización
          o cliente, un servidor VPS divide un servidor físico en varios servidores virtuales, cada
          uno de los cuales opera de manera independiente como un servidor dedicado en miniatura.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
          Aquí te presentamos algunas de las características clave de los servidores VPS:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
              <b>Aislamiento:</b> Cada servidor VPS se encuentra aislado de los demás en el mismo
              servidor físico. Esto significa que los recursos, como la CPU, la RAM, el
              almacenamiento y el ancho de banda, se asignan exclusivamente al servidor VPS y no se
              comparten con otros.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
              <b>Control:</b> Los usuarios de servidores VPS gozan de un alto grado de control sobre
              su entorno. Pueden instalar, configurar y administrar su propio software y sistemas
              operativos.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
              <b>Escalabilidad:</b> Los servidores VPS son escalables, lo que significa que puedes
              ajustar los recursos asignados, como la RAM y la CPU, según tus necesidades. Esto te
              permite pagar solo por lo que necesitas en un momento dado.
            </Typography>
          </li>
        </ul>
        <br />

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {servidoresvps.map((servidor) => (
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
                        height: "100px",
                        width: "100%",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {servidor.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: $ {servidor.precio} /mo.
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
      {selectedServer && <ServidoresVPS servidorVPS={selectedServer} />}
      <br />
      <Footer />
    </>
  );
}
