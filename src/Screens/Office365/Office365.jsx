import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Tab, Tabs } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import CotizadorOfficeBanner from "../../assets/images/Office/BannerOffice.png";
import CotizadorOffice from "./CotizadorOffice";
import Office from "../../assets/images/CardOffice.png";
import Liston from "../../Components/Liston/Liston";

const servicios = [
  {
    id: "Exchange Online Kiosk",
    nombre: "Exchange Online Kiosk",
    image: Office,
    serviceOption:
      "Mensajería básica y plan de calendario con correo electrónico web y acceso POP, cada usuario obtiene un buzón con 2 GB",
    precioMes: 23,
    precioAño: 2.12,
  },
  {
    id: "Exchange Online (Plan 1)",
    nombre: "Exchange Online (Plan 1)",
    image: Office,
    serviceOption:
      "Plan de mensajería, calendario y archivo de correo electrónico accesible desde Outlook en PC, Internet y dispositivos móviles. Cada usuario dispone de un buzón con 50 GB de espacio de almacenamiento y puede enviar mensajes de hasta 150 MB de tamaño",
    precioMes: 46,
    precioAño: 4.25,
  },
  {
    id: "Microsoft 365 Business Basic",
    nombre: "Microsoft 365 Business Basic",
    image: Office,
    serviceOption:
      "Versiones en línea de Office con correo electrónico, mensajería instantánea, videoconferencia HD, más 1 TB de almacenamiento y uso compartido de archivos personales. No incluye Office suite para PC o Mac. Para organizaciones con hasta 300 usuarios.",
    precioMes: 67,
    precioAño: 5.64,
  },
  {
    id: "Microsoft 365 Business Standard",
    nombre: "Microsoft 365 Business Standard",
    image: Office,
    serviceOption:
      "La suite Office para PC y Mac con aplicaciones para tabletas y teléfonos, además de correo electrónico, mensajería instantánea, videoconferencia HD, almacenamiento y uso compartido de archivos personales de 1 TB. Para organizaciones con hasta 300 usuarios.",
    precioMes: 142,
    precioAño: 11.85,
    plan: ""
  },
];

const Office365 = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleServiceSelection = (service) => {
    const plan = activeTab === 0 ? "Anual" : "Mensual";
    setSelectedService({...service, plan });
  };


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <img src={CotizadorOfficeBanner} alt="Banner" style={{ width: "100%" }} />
        <br />
        <br />
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
              <b>Office 365</b>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom style={{ textAlign: "justify" }}>
              Transforma tu forma de trabajar con Office 365. Descubre la eficiencia y la
              flexibilidad que ofrece la suite de productividad en la nube más completa. Con
              herramientas como Word, Excel, PowerPoint, y Outlook, mantente conectado y productivo
              desde cualquier lugar. Aprovecha la colaboración en tiempo real, el almacenamiento
              seguro en la nube y las actualizaciones constantes. ¡Eleva tu negocio al siguiente
              nivel con Office 365 hoy mismo!
            </Typography>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Anual" />
              <Tab label="Mensual" />
            </Tabs>
          </Grid>

          {activeTab === 0 &&
            servicios.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
                <div onClick={() => handleServiceSelection(service)}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: 500,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={service.image}
                        alt="marca"
                        style={{
                          objectFit: "contain",
                          height: "200px",
                          width: "100%",
                        }}
                      />
                      <Liston mensaje="Anual" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {service.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.serviceOption}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Precio Anual: {service.precioAño}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            ))}
          {activeTab === 1 &&
            servicios.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
                <div onClick={() => handleServiceSelection(service)}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      height: 500,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={service.image}
                        alt="marca"
                        style={{
                          objectFit: "contain",
                          height: "200px",
                          width: "100%",
                        }}
                      />
                      <Liston mensaje="Mensual" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {service.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.serviceOption}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Precio Anual: {service.precioAño}
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
      <div className="container" style={{width: "100%", display: "flex", justifyContent: "center"}}>
      {selectedService && (
        <CotizadorOffice servicio={selectedService} plan={selectedService.plan} />
      )}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Office365;
