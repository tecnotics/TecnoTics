import { Button, Card, CardContent,TextField } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Contacto.css";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import Map from "../../Components/Map/Map";
import ContactoBanner from "../../assets/images/Contacto.png";

function Contacto() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <img src={ContactoBanner} alt="Banner" style={{ width: "100%" }} />
        <br />
        <br />
        {/* Tarjetas (Cards) */}
        <div className="card-container">
          <Card className="card">
            <CardContent>
              <LocationOn />
              <p>Dirección: Carrera 43c 7d 37-El Poblado-Medellín</p>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <Phone />
              <p>Teléfono: +57-3185078721</p>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <Email />
              <p>Correo: alejandro@tecnotics.com</p>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <a href="https://www.facebook.com/ejemplo" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                <Facebook />
              </a>
              <a href="https://www.twitter.com/ejemplo" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                <Twitter />
              </a>
              <a href="https://www.instagram.com/ejemplo" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
                <Instagram />
              </a>
              <p>Redes Sociales</p>
            </CardContent>
          </Card>
        </div>

        {/* Formulario y Mapa */}
        <div className="form-and-map-container">
          {/* Formulario de contacto */}
          <form className="contact-form">
            <TextField label="Nombre" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </form>

          {/* Mapa */}
          <div className="map-container">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
