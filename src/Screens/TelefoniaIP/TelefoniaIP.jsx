import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import telefoniaIpBannner from "../../assets/images/TelefoniaIp.jpeg";
import net2phoneMockUp from "../../assets/images/net2phone-mockup.png";
import "./TelefoniaIp.css";
import Liston from "../../Components/Liston/Liston";
import {
  telefoniaIpTarjetas,
  tarjetasVentajas,
  caracteristicas,
  imagenesMarcas,
} from "./Telefoniatarjetas";

function TelefoniaIP() {
  return (
    <>
      <Navbar />
      <Container className="container">
        <img src={telefoniaIpBannner} alt="Telefonia Ip banner" style={{ width: "100%" }} />
        <main>
          <Typography
            variant="h1"
            sx={{ fontSize: "2em", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}
          >
            ¿Qué es una central virtual?
          </Typography>
          <Typography style={{ textAlign: "center", marginTop: "10px" }}>
            Es una solución de telefonía avanzada que hace uso de la tecnología VoIP y la nube para
            almacenar y administrar su solución de PBX Virtual. La tecnología en la nube de
            net2phone elimina la necesidad de invertir en equipos, mantenimiento y estructura
            física, brindando actualizaciones sin costo y funciones de central telefónica de última
            generación.
          </Typography>
          <Container
            className="tarjetas-telefonia-container"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "30px",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            {telefoniaIpTarjetas.map((tarjeta, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                <div
                  className="tarjeta-telefonia"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxWidth: "450px",
                    padding: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <div
                    className="tarjeta-titulo"
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      color: "rgb(0, 33, 78)",
                      marginBottom: "10px",
                    }}
                  >
                    {tarjeta.icono}
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.3em" }}>
                      {tarjeta.titulo}
                    </Typography>
                  </div>
                  <div className="cuerpoTarjeta">
                    <Typography>{tarjeta.mensaje}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Container>
          <Typography
            variant="h2"
            sx={{ fontSize: "1.9em", fontWeight: "bold", textAlign: "center" }}
          >
            Beneficios
          </Typography>
          <Container
            className="tarjetas-ventajas"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "30px",
              gap: "10px",
              justifyContent: "space-around",
            }}
          >
            {tarjetasVentajas.map((tarjeta, index) => (
              <Grid
                item
                key={index}
                sx={{
                  width: "450px",
                  minheight: "350px",
                  boxShadow: "0 0 5px rgb(184 184 184);",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              >
                <div style={{position: "relative"}}>
                  <Liston mensaje="Calidad" />
                </div>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    color: "rgb(0, 33, 78)",
                    marginBottom: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                    margin: "20px"
                  }}
                >
                  {tarjeta.titulo}
                </Typography>
                <div className="lista-ventaja" >
                  {tarjeta.lista.map((item, index) => (
                    <p
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                      key={index}
                      className="item-container"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Grid>
            ))}
          </Container>
          <Container>
            <div
              className="caracteristicas-container"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
            >
              <div className="imagen" style={{ maxWidth: "515px" }}>
                <img style={{ width: "100%" }} src={net2phoneMockUp} alt="net2phone Mock ups" />
              </div>
              <div className="tarjeta-caracteristicas" style={{ maxWidth: "515px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    color: "rgb(0, 33, 78)",
                    marginBottom: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  Características principales
                </Typography>
                <div
                  className="lista-caracteristicas"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {caracteristicas.lista.map((caracteristica, index) => (
                    <p
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                      key={index}
                      className="item-container"
                    >
                      {caracteristica}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div
              className="imagenes-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {imagenesMarcas.map((imagenes, index) => (
                <Grid item key={index}>
                  <div
                    className="marcas-container"
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    {imagenes.imagenes.map((imagen, index) => (
                      <img
                        className="marca-img"
                        style={{ width: "80px" }}
                        key={index}
                        src={imagen}
                        alt="net2phbe marcas"
                      />
                    ))}
                  </div>
                </Grid>
              ))}
            </div>
          </Container>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default TelefoniaIP;
