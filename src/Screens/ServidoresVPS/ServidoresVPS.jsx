import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

function ServidoresVPS({ servidorVPS }) {
  const [servidorSeleccionado, setServidorSeleccionado] = useState(servidorVPS);
  const [correo, setCorreo] = useState("");
  const [sistemaOperativo, setSistemaOperativo] = useState(servidorVPS.sistemaOperativo);
  const [dataCenterLocation, setDataCenterLocation] = useState(servidorVPS.dataCenterLocation);
  const urlBackend = import.meta.env.VITE_URL_BACKEND;
  const remitenteCorreo = import.meta.env.VITE_CORREO;

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  useEffect(() => {
    setServidorSeleccionado(servidorVPS);
  }, [servidorVPS]);

  const enviarInformacion = () => {
    const camposVacios = !sistemaOperativo || !correo;

    if (camposVacios) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos requeridos.",
      });
      return;
    }

    const formData = {
      destinatario: [remitenteCorreo, correo],
      asunto: "Cotizacion de Servidor",
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cotización de Servicios VPS</title>
  <style>
    /* Estilos base */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* Reinicia estilos */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* Estilos para clientes de correo electrónico de Microsoft */
    .ExternalClass { width: 100%; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
    .ReadMsgBody { width: 100%; background-color: #f4f4f4; }

    /* Estilos para botones */
    .button-td, .button-a {
      transition: all 100ms ease-in;
    }
    .button-td:hover, .button-a:hover {
      background: #555555 !important;
      border-color: #555555 !important;
    }

    /* Media Queries */
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .fluid { max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; }
      .stack-column, .stack-column-center { display: block !important; width: 100% !important; max-width: 100% !important; direction: ltr !important; }
      .stack-column-center { text-align: center !important; }
      .center-on-narrow { text-align: center !important; display: block !important; margin-left: auto !important; margin-right: auto !important; float: none !important; }
      table.center-on-narrow { display: inline-block !important; }
    }
  </style>
</head>
<body width="100%" style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;" bgcolor="#f4f4f4">
  <center style="width: 100%; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto;" class="email-container">
      <!-- Header -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
        <tr>
          <td bgcolor="#0d6efd" style="padding: 40px 0; text-align: center; color: #ffffff;">
            <img src="https://tecnotics.com/assets/favicon-fa79ae63.ico" alt="Tecnotics Logo" width="100" style="margin-bottom: 20px;">
            <h1>TecnoTics</h1>
          </td>
        </tr>
      </table>
      <!-- Email Body -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
        <tr>
          <td style="background-color: #ffffff; padding: 40px 30px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <tr>
                <td style="color: #153643; font-size: 24px; margin-bottom: 20px;">
                  <strong>Detalles de la cotización</strong>
                </td>
              </tr>
              <tr>
                <td style="color: #153643; font-size: 16px; line-height: 24px; padding: 20px 0;">
                - Nombre del Servidor: ${servidorSeleccionado.nombre}
                - Correo Electrónico: ${correo}
                - Memoria: ${servidorSeleccionado.memory}
                - Ubicación: ${servidorSeleccionado.dataCenterLocation}
                - Sistema Operativo: ${sistemaOperativo}
                - Procesador: ${servidorSeleccionado.processor}
                - Disco Duro: ${servidorSeleccionado.primaryHardDrive}
                - Ancho de Banda: ${servidorSeleccionado.bandwidth}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#0d6efd" style="padding: 30px; text-align: center; color: #ffffff;">
            <h2>Contactanos</h2>
            <p>Email: <a href="mailto:dwdwdw@ffefd.com" style="color: #ffffff;">Soporte@tecnotics.com</a><br>
            Teléfono: <a href="tel:111111" style="color: #ffffff;">318 5078721</a></p>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>
      `,
    };

    console.log(formData);

    fetch(`${urlBackend}/correo/enviar_correo`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: data.message,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo.",
        });
      });
  };

  return (
    <>
      <Navbar />
      <Container fullWidth>
        <ButtonGroup fullWidth variant="outlined">
          <Button>{servidorSeleccionado.nombre}</Button>
        </ButtonGroup>
        <List>
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText
              primary="Data Center Location:"
              secondary={`${dataCenterLocation} $0/mo.`}
            />
          </ListItem>
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText
              primary="Processor:"
              secondary={`${servidorSeleccionado.processor} $0/mo.`}
            />
          </ListItem>
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText primary="Memory:" secondary={`${servidorSeleccionado.memory} $0/mo.`} />
          </ListItem>
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText
              primary="Primary Hard Drive:"
              secondary={`${servidorSeleccionado.primaryHardDrive} $0/mo.`}
            />
          </ListItem>
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText
              primary="Software Operating System:"
              secondary={`Linux/Other: ${sistemaOperativo} $0/mo.`}
            />
          </ListItem>
          <br />
          <ButtonGroup fullWidth>
            {["Ubuntu 22.04", "Debian 12", "Almalinux 9", "Rocky Linux 9"].map((so) => (
              <Button
                key={so}
                variant={sistemaOperativo === so ? "contained" : "outlined"}
                onClick={() => setSistemaOperativo(so)}
              >
                {so}
              </Button>
            ))}
          </ButtonGroup>
          <br />
          <br />
          <ListItem style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "10px" }}>
            <ListItemText
              primary="Network Bandwidth:"
              secondary={`${servidorSeleccionado.bandwidth}`}
            />
          </ListItem>
        </List>
        {servidorSeleccionado && (
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              <b>Información del Servidor </b>
            </Typography>
            <br />
            <img
              src={servidorSeleccionado.image}
              alt=""
              style={{ objectFit: "contain", height: "200px", width: "100%" }}
            />
            <br />
            <br />
            <Typography variant="body1" style={{ textAlign: "center" }}>
              <b>{servidorSeleccionado.nombre}</b>
            </Typography>
            <Typography variant="body1">Memory: {servidorSeleccionado.memory}</Typography>
            <Typography variant="body1">Locacion: {dataCenterLocation}</Typography>
            <Typography variant="body1">Sistema Operativo: {sistemaOperativo}</Typography>
            <Typography variant="body1">
              Primary Hard Drive: {servidorSeleccionado.primaryHardDrive}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Precio Total: ${servidorSeleccionado.precio}
            </Typography>
          </Paper>
        )}
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Correo electrónico"
          value={correo}
          onChange={handleCorreoChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={enviarInformacion}>
          Enviar Información
        </Button>
      </Container>
    </>
  );
}

export default ServidoresVPS;
