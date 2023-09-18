import { Button, Card, CardContent, TextField } from "@mui/material";
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


function Contacto() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contacto</h1>

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
              <Facebook />
              <Twitter />
              <Instagram />
              <p>Redes Sociales:</p>
              <a
                href="https://www.facebook.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.twitter.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/ejemplo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Formulario de contacto */}
        <form className="contact-form">
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
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
        <div className="map-container">{/* <Map /> */}</div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
