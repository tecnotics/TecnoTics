import { useState } from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

function CotizadorOffice({ servicio, plan }) {
  const [open, setOpen] = useState(false);
  const [cantidadMensual, setCantidadMensual] = useState(0);
  const [cantidadAnual, setCantidadAnual] = useState(0);
  const [correo, setCorreo] = useState("");
  const remitenteCorreo = import.meta.env.VITE_CORREO;
  const urlBackend = import.meta.env.VITE_URL_BACKEND;

  const calcularPrecioTotal = () => {
    if (plan === "Anual") {
      return servicio.precioAño * cantidadAnual;
    } else if (plan === "Mensual") {
      return servicio.precioMes * cantidadMensual;
    }
  };

  const enviarCotizacion = () => {
    const precioTotal = calcularPrecioTotal();
    // Lógica para enviar correo
    const formData = {
      destinatario: [remitenteCorreo, correo],
      asunto: `Cotización de ${servicio.nombre}`,
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cotización de Servicio</title>
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
                  Servicio: ${servicio.nombre}<br>
                  Cantidad Mensual: ${cantidadMensual}<br>
                  Cantidad Anual: ${cantidadAnual}<br>
                  Precio Total: $${precioTotal.toLocaleString()}
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

    fetch(`${urlBackend}/correo/enviar_correo`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire("¡Correo enviado!", "La cotización ha sido enviada con éxito.", "success");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        Swal.fire(
          "Error",
          "Hubo un problema al enviar la cotización. Por favor, intente de nuevo.",
          "error"
        );
      });
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Cotizar {servicio.nombre}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} sx={{ zIndex: 999 }}>
        <DialogTitle>Cotización de {servicio.nombre}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{servicio.serviceOption}</Typography>
          {plan === "Mensual" && (
            <TextField
              fullWidth
              margin="normal"
              label="Cantidad Mensual"
              type="number"
              value={cantidadMensual}
              onChange={(e) => setCantidadMensual(Number(e.target.value))}
            />
          )}
          {plan === "Anual" && (
            <TextField
              fullWidth
              margin="normal"
              label="Cantidad Anual"
              type="number"
              value={cantidadAnual}
              onChange={(e) => setCantidadAnual(Number(e.target.value))}
            />
          )}
          <TextField
            fullWidth
            margin="normal"
            label="Correo electrónico"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Precio Total: ${calcularPrecioTotal().toLocaleString()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cerrar
          </Button>
          <Button onClick={enviarCotizacion} color="primary">
            Enviar Cotización
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CotizadorOffice;
