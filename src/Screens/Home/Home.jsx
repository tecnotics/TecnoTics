import Navbar from "../../Components/Navbar/Navbar";
import Servicio from "../../Components/Servicio/Servicio";
import Footer from "../../Components/Footer/Footer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; 
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="banner-corporativo">
          <Typography variant="h1">TecnoTics</Typography>
          <Typography variant="subtitle1">Soluciones Corporativas</Typography>
        </section>
        <section className="banner-bienvenida">
          <div className="banner-content">
            <Typography variant="h2">Bienvenido a nuestro sitio web</Typography>
            <Typography variant="body1">
              Descubre cómo podemos ayudarte.
            </Typography>
            <Button variant="contained" color="primary" href="#servicios">
              Ver Servicios
            </Button>
          </div>
        </section>
        <section className="servicios" id="servicios">
          <div className="servicios-content">
            <Typography variant="h2">Nuestros Servicios</Typography>
            <Servicio
              iconClass="fas fa-cogs"
              titulo="Servicio 1"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Servicio
              iconClass="fas fa-chart-bar"
              titulo="Servicio 2"
              descripcion="Nullam vitae tortor vel urna lacinia venenatis."
            />
            <Servicio
              iconClass="fas fa-globe"
              titulo="Servicio 3"
              descripcion="Curabitur et odio in libero viverra venenatis."
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
