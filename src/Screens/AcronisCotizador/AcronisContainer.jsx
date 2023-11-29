import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  ButtonGroup,
  Paper,
  TextField,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Tabs,
  Tab,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";

function AcronisContainer() {
  const [correo, setCorreo] = useState("");
  const urlBackend = import.meta.env.VITE_URL_BACKEND;
  const remitenteCorreo = import.meta.env.VITE_CORREO;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [serviciosState, setServiciosState] = useState([
    {
      nombre: "Servidores Físicos",
      seleccionado: true,
      cantidad: 0,
      precioUnidad: 24.0,
      costoTotal: null,
    },
    {
      nombre: "Almacenamiento Conectado a Red",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 16.0,
      costoTotal: null,
    },
    {
      nombre: "Máquinas Virtuales",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 6.8,
      costoTotal: null,
    },
    {
      nombre: "Máquinas Virtuales vCloud Director",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 8.0,
      costoTotal: null,
    },
    {
      nombre: "Estaciones de Trabajo",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 3.4,
      costoTotal: null,
    },
    {
      nombre: "Servidores de Hosting",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 3.4,
      costoTotal: null,
    },
    {
      nombre: "Asientos Microsoft 365 (incluye almacenamiento ilimitado Acronis Hosted Cloud)",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 2.0,
      costoTotal: null,
    },
    {
      nombre: "Asientos Microsoft 365 (para almacenamiento SP/Customer/Azure/Google Hosted)",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 1.3,
      costoTotal: null,
    },
    {
      nombre: "Asientos Google Workspace (incluye almacenamiento ilimitado Acronis Hosted Cloud)",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 2.0,
      costoTotal: null,
    },
    {
      nombre: "Asientos Google Workspace (para almacenamiento SP/Customer/Azure/Google Hosted)",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 1.3,
      costoTotal: null,
    },
    {
      nombre: "Dispositivos Móviles",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 1.0,
      costoTotal: null,
    },
    {
      nombre: "Sitios Web",
      seleccionado: false,
      cantidad: 0,
      precioUnidad: 1.5,
      costoTotal: null,
    },
    {
      nombre:
        "Almacenamiento Acronis Cloud en Centro de Datos de Acronis (modelo por Carga de Trabajo)",
      seleccionado: true,
      cantidad: 0,
      precioUnidad: 0.04,
      costoTotal: null,
    },
  ]);

  const modeloGiga = {
    nombre: "Almacenamiento Acronis Cloud en Centro de Datos de Acronis (modelo por GB)",
    seleccionado: true,
    cantidad: 0,
    precioUnidad: 0.108,
    costoTotal: null,
  };

  const indiceAlmacenamientoGB = serviciosState.findIndex(
    (servicio) =>
      servicio.nombre ===
      "Almacenamiento Acronis Cloud en Centro de Datos de Acronis (modelo por GB)"
  );

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState({
    [indiceAlmacenamientoGB]: 100,
  });

  const handleSeleccion = (index, seleccionado) => {
    const serviciosActualizados = serviciosState.map((servicio, i) => {
      if (i === index) {
        return { ...servicio, seleccionado };
      }
      return servicio;
    });
    setServiciosState(serviciosActualizados);
  };

  const handleCantidadChange = (index, nuevaCantidad) => {
    const cantidadNumerica = Number(nuevaCantidad);

    const serviciosActualizados = serviciosState.map((servicio, i) => {
      if (i === index) {
        const costoTotalCalculado = servicio.precioUnidad
          ? ((servicio.precioUnidad * cantidadNumerica) / 0.8).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          : null;

        return {
          ...servicio,
          cantidad: cantidadNumerica,
          costoTotal: costoTotalCalculado,
        };
      }
      return servicio;
    });
    setServiciosState(serviciosActualizados);
    setCantidadSeleccionada((prevState) => ({ ...prevState, [index]: nuevaCantidad }));
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const enviarInformacion = () => {
    let listaServiciosHtml;

    if (activeTab === 0) {
      const serviciosSeleccionados = serviciosState.filter((s) => s.seleccionado && s.cantidad > 0);

      if (serviciosSeleccionados.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No ha seleccionado ningún servicio para cotizar.",
        });
        return;
      }

      listaServiciosHtml = serviciosSeleccionados
        .map(
          (servicio) => `
          <b>${servicio.nombre}</b><br>
          - Cantidad: ${servicio.cantidad}<br>
          - Costo Total: $${servicio.costoTotal}<br>
        `
        )
        .join("");
    } else if (activeTab === 1) {
      // Manejar la lógica para la pestaña 1 (Por GIGA)
      listaServiciosHtml = `Cantidad Almacenamiento Acronis Cloud en Centro de Datos de Acronis: ${cantidadSeleccionada[indiceAlmacenamientoGB]} GB`;
    }

    const formData = {
      destinatario: [remitenteCorreo, correo],
      asunto: "Cotizacion de Acronis",
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
                ${listaServiciosHtml}
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
      <br />
      <br />
      <br />
      <br />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          <b>Cotizador Acronis</b>
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Carga de trabajo" />
          <Tab label="Por GIGA" />
        </Tabs>

        {activeTab === 0 && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Servicio
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold", width: "200px" }}>
                    Precio por Unidad
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold", width: "200px" }}>
                    Cantidad
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold", width: "200px" }}>
                    Costo Total
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold", width: "200px" }}>
                    Seleccionar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviciosState.map((servicio, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center">{servicio.nombre}</TableCell>
                    <TableCell align="center">
                      {servicio.precioUnidad !== null ? `$${servicio.precioUnidad}` : "N/A"}
                    </TableCell>
                    <TableCell align="center">
                      {servicio.nombre ===
                      "Almacenamiento Acronis Cloud en Centro de Datos de Acronis (modelo por GB)" ? (
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                          {[100, 200, 300, 500, 1000].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleCantidadChange(index, value)}
                              variant={
                                cantidadSeleccionada[index] === value ||
                                (cantidadSeleccionada[index] === undefined && value === 100)
                                  ? "contained"
                                  : "outlined"
                              }
                            >
                              {value} GB
                            </Button>
                          ))}
                        </ButtonGroup>
                      ) : (
                        servicio.seleccionado && (
                          <TextField
                            size="small"
                            type="number"
                            value={servicio.cantidad}
                            onChange={(e) => handleCantidadChange(index, e.target.value)}
                            inputProps={{ min: "0", style: { textAlign: "center" } }}
                          />
                        )
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {servicio.costoTotal !== null ? `$${servicio.costoTotal}` : "N/A"}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant={servicio.seleccionado ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => handleSeleccion(index, !servicio.seleccionado)}
                      >
                        {servicio.seleccionado ? "Sí" : "No"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {activeTab === 1 && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>{/* ... Tus otros TableCells del encabezado */}</TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell align="center">{modeloGiga.nombre}</TableCell>
                  {/* ... Tus otros TableCells */}
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      {[100, 200, 300, 500, 1000].map((value, index) => (
                        <Button
                          key={value}
                          onClick={() => handleCantidadChange(serviciosState.length, value)} // Asumiendo que quieres usar el último índice + 1 para el modeloGiga
                          variant={
                            cantidadSeleccionada[serviciosState.length] === value // Deberías calcular el estado inicial de cantidadSeleccionada teniendo en cuenta modeloGiga
                              ? "contained"
                              : "outlined"
                          }
                        >
                          {value} GB
                        </Button>
                      ))}
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Correo electrónico"
          value={correo}
          onChange={handleCorreoChange}
        />
        <Button variant="contained" color="primary" onClick={enviarInformacion}>
          Cotizar
        </Button>
      </Container>
      <br />
      <Footer />
    </>
  );
}

export default AcronisContainer;
