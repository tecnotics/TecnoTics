import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Servicio from "../../Components/Servicio/Servicio";
import Footer from "../../Components/Footer/Footer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="banner-corporativo">
          <Typography variant="h1">
            <b>TecnoTics</b>
          </Typography>
          <Typography variant="subtitle1">Soluciones Corporativas</Typography>
        </section>
        <section className="banner-bienvenida">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="banner-content">
                <Typography variant="h2">
                  <b>¡Bienvenido a TecnoTics!</b>
                </Typography>
                <Typography variant="body2">
                  Estamos aquí para impulsar tu éxito en el mundo digital.
                  Descubre cómo podemos ayudarte a transformar tu negocio.
                </Typography>
                <Button variant="contained" color="primary" href="#servicios">
                  Ver Servicios
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TBpRnnqyy5A?si=aiHIRr1EOPTQqLGk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
        </section>
        {/* <section className="servicios" id="servicios">
          <div className="servicios-content">
            <Typography variant="h3">Nuestros Servicios</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Servicio
                  iconClass="fas fa-cogs"
                  titulo="Servicios DNS"
                  descripcion="Gestionamos y optimizamos tus registros DNS para garantizar un acceso rápido y seguro a tus servicios en línea. Nuestro equipo de expertos se encarga de configurar, monitorear y mantener tus registros DNS, asegurando la disponibilidad y la seguridad de tu presencia en línea."
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Servicio
                  iconClass="fas fa-chart-bar"
                  titulo="Outsourcing"
                  descripcion="Nuestro servicio de outsourcing va más allá de la mera externalización; actuamos como una extensión de su equipo, asegurando que cada aspecto tecnológico de su negocio opere a la máxima eficiencia.
"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Servicio
                  iconClass="fas fa-globe"
                  titulo="Office 365"
                  descripcion="En TecnoTics, entendemos que la productividad es esencial para el éxito empresarial. Es por eso que ofrecemos Office 365, una solución integral de productividad y colaboración diseñada para impulsar la eficiencia de tu empresa."
                />
              </Grid>
            </Grid>
          </div>
        </section> */}
        
        <section className="contacto" id="contacto">
          <div className="contacto-content">
            <Typography variant="h2">Contáctanos</Typography>
            <Typography variant="body2">
              ¿Listo para comenzar tu proyecto? ¡Hablemos!
            </Typography>
            <Button variant="contained" color="primary" href="#contacto">
              Contactar
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
