import { useState, useEffect } from "react";
import { Container, Typography, Paper, Button, ButtonGroup, TextField } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

function ServidoresNube({ servidor }) {
  const [location, setLocation] = useState("Atlanta");
  const [memory, setMemory] = useState("32 GB");
  const [ssd, setSSD] = useState(false);
  const [ssdSize, setSSDSize] = useState(0);
  const [operatingSystem, setOperatingSystem] = useState("");
  const [operatingSystemVersion, setOperatingSystemVersion] = useState("");
  const [servidorSeleccionado, setServidorSeleccionado] = useState(servidor);
  const [precioTotal, setPrecioTotal] = useState();
  const [correo, setCorreo] = useState();
  const tamañosSSD = ["None", "480 GB", "960 GB", "1.92 TB", "3.84 TB", "7.68 TB"];
  const tamañosSATA = ["1 TB", "2 TB", "6 TB", "8 TB", "10 TB", "12 TB"];
  const [storageType, setStorageType] = useState("ssd");
  const preciosSSD = [0, 12, 50, 100, 200];
  const preciosSATA = [0, 6, 12, 18, 25, 37, 43];
  const [backup, setBackup] = useState("100 GB");
  const [primaryHardDriveSize, setPrimaryHardDriveSize] = useState("480 GB");
  const [primaryHardDrivePrice, setPrimaryHardDrivePrice] = useState(preciosSSD[0]);
  const [secondHardDriveSize, setSecondHardDriveSize] = useState("");
  const [secondHardDrivePrice, setSecondHardDrivePrice] = useState(preciosSSD[0]);
  const [thirdHardDriveSize, setThirdHardDriveSize] = useState("");
  const [thirdHardDrivePrice, setThirdHardDrivePrice] = useState(preciosSSD[0]);
  const urlBackend = import.meta.env.VITE_URL_BACKEND;
  const remitenteCorreo = import.meta.env.VITE_CORREO;

  const configuracion = {
    ubicaciones: {
      Atlanta: 0,
      Miami: 0,
      Chicago: 0,
      Tampa: 0,
      Dallas: 0,
    },
    memorias: {
      "32 GB": 0,
      "64 GB": 80,
      "128GB": 120,
    },
    sistemasOperativos: {
      Linux: {
        Almalinux: 0,
        Centos: 0,
        Cloudlinux: 0,
        RockyLinux: 0,
        Ubuntu: 0,
        ESXi: 0,
        Debian: 0,
        RedHat: 0,
        XenServer: 0,
        FreeBSD: 0,
        Proxmox: 0,
      },
      Windows: {
        "Windows Standar": 27,
        "Windows Datacenter": 187,
      },
    },
    backups: {
      "100 GB": 0,
      "500 GB": 39,
      "1000 GB": 79,
      "1500 GB": 119,
      "2000 GB": 159,
      "3000 GB": 29,
      "4000 GB": 239,
      "5000 GB": 279,
      "6000 GB": 279,
      "7000 GB": 279,
      "8000 GB": 279,
    },
  };

  const calcularPrecioTotal = () => {
    if (!servidorSeleccionado) {
      setPrecioTotal(0);
      return;
    }

    let precioCalculado = servidorSeleccionado.precio;

    if (configuracion.ubicaciones[location]) {
      precioCalculado += configuracion.ubicaciones[location];
    }

    if (configuracion.backups[backup]) {
      precioCalculado += configuracion.backups[backup];
    }

    if (configuracion.memorias[memory]) {
      precioCalculado += configuracion.memorias[memory];
    }

    if (operatingSystem === "Linux") {
      if (configuracion.sistemasOperativos.Linux[operatingSystemVersion]) {
        precioCalculado += configuracion.sistemasOperativos.Linux[operatingSystemVersion];
      }
    } else if (operatingSystem === "Windows") {
      if (configuracion.sistemasOperativos.Windows[operatingSystemVersion]) {
        precioCalculado += configuracion.sistemasOperativos.Windows[operatingSystemVersion];
      }
    }

    precioCalculado += primaryHardDrivePrice;
    precioCalculado += secondHardDrivePrice;
    precioCalculado += thirdHardDrivePrice;

    const precioNumerico = parseFloat(precioCalculado);
    const precioFormateado = isNaN(precioNumerico) ? " Valor no válido" : precioNumerico.toFixed(2);

    setPrecioTotal(precioFormateado);
  };

  const enviarInformacion = () => {
    const camposVacios = location <= 0 || memory === "" || (ssd && ssdSize <= 0);

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
                - Nombre del Servidor: ${servidorSeleccionado.nombre}
      - Correo Electrónico: ${correo}
      - Memoria: ${memory}
      - Ubicación: ${location}
      - Sistema Operativo: ${operatingSystem}
      - Version del Sistema Operativo: ${operatingSystemVersion}
      - Tipo de Disco: ${storageType}
      - Daily Backup: ${backup}
      - Primary Hard Drive: ${primaryHardDriveSize}
      - Second Hard Drive: ${
        secondHardDriveSize ? secondHardDriveSize : "No lleva un segundo disco"
      }
      - Third Hard Drive: ${thirdHardDriveSize ? thirdHardDriveSize : "No lleva un tercer disco"}
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

  useEffect(() => {
    setServidorSeleccionado(servidor);
  }, [servidor]);

  useEffect(() => {
    calcularPrecioTotal();
  }, [
    location,
    memory,
    ssd,
    ssdSize,
    operatingSystem,
    servidorSeleccionado,
    primaryHardDriveSize,
    secondHardDriveSize,
    thirdHardDrivePrice,
    operatingSystemVersion,
    backup,
  ]);

  if (!servidorSeleccionado) {
    return (
      <Container>
        <Typography variant="h3" gutterBottom>
          <b>Selecciona un servidor para continuar</b>
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
          <b>Cotizador de Servidores</b>
        </Typography>
        <ButtonGroup fullWidth variant="outlined">
          <Button>{servidorSeleccionado.nombre}</Button>
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          <b>Primary Hard Drive </b>
        </Typography>
        <ButtonGroup fullWidth>
          {tamañosSSD
            .filter((tamaño) => tamaño !== "None")
            .map((tamaño, index) => (
              <Button
                key={tamaño}
                variant={
                  storageType === "ssd" && primaryHardDriveSize === tamaño
                    ? "contained"
                    : "outlined"
                }
                onClick={() => {
                  setStorageType("ssd");
                  setPrimaryHardDriveSize(tamaño);
                  setPrimaryHardDrivePrice(preciosSSD[index]);
                }}
              >
                {tamaño} SSD (${preciosSSD[index]})
              </Button>
            ))}
          {tamañosSATA.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                !ssd && storageType === "sata" && primaryHardDriveSize === tamaño
                  ? "contained"
                  : "outlined"
              }
              onClick={() => {
                setStorageType("sata");
                setPrimaryHardDriveSize(tamaño);
                setPrimaryHardDrivePrice(preciosSATA[index]);
              }}
            >
              {tamaño} SATA (${preciosSATA[index]})
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          <b>Second Hard Drive </b>
        </Typography>
        <ButtonGroup fullWidth>
          {tamañosSSD.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                storageType === "ssd" && secondHardDriveSize === tamaño ? "contained" : "outlined"
              }
              onClick={() => {
                setStorageType("ssd");
                setSecondHardDriveSize(tamaño);
                setSecondHardDrivePrice(preciosSSD[index]);
              }}
            >
              {tamaño} SSD (${preciosSSD[index]})
            </Button>
          ))}
          {tamañosSATA.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                storageType === "sata" && secondHardDriveSize === tamaño ? "contained" : "outlined"
              }
              onClick={() => {
                setStorageType("sata");
                setSecondHardDriveSize(tamaño);
                setSecondHardDrivePrice(preciosSATA[index]);
              }}
            >
              {tamaño} SATA (${preciosSATA[index]})
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          <b>Third Hard Drive </b>
        </Typography>
        <ButtonGroup fullWidth>
          {tamañosSSD.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                storageType === "ssd" && thirdHardDriveSize === tamaño ? "contained" : "outlined"
              }
              onClick={() => {
                setStorageType("ssd");
                setThirdHardDriveSize(tamaño);
                setThirdHardDrivePrice(preciosSSD[index]);
              }}
            >
              {tamaño} SSD (${preciosSSD[index]})
            </Button>
          ))}
          {tamañosSATA.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                storageType === "sata" && thirdHardDriveSize === tamaño ? "contained" : "outlined"
              }
              onClick={() => {
                setStorageType("sata");
                setThirdHardDriveSize(tamaño);
                setThirdHardDrivePrice(preciosSATA[index]);
              }}
            >
              {tamaño} SATA (${preciosSATA[index]})
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          <b>Ubicacion</b>
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(configuracion.ubicaciones).map((loc) => (
            <Button
              key={loc}
              variant={location === loc ? "contained" : "outlined"}
              onClick={() => setLocation(loc)}
            >
              {loc} (${configuracion.ubicaciones[loc]})
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          <b>Memory (RAM) </b>
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(configuracion.memorias).map((mem) => (
            <Button
              key={mem}
              variant={memory === mem ? "contained" : "outlined"}
              onClick={() => setMemory(mem)}
            >
              {mem} (${configuracion.memorias[mem]})
            </Button>
          ))}
        </ButtonGroup>
        <Typography variant="body3" gutterBottom>
          <b>Sistema operativo </b>
        </Typography>
        <br />
        <br />
        <Typography variant="body1" gutterBottom>
          <b>Linux </b>
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(configuracion.sistemasOperativos.Linux).map((version) => (
            <Button
              key={version}
              variant={
                operatingSystem === "Linux" && operatingSystemVersion === version
                  ? "contained"
                  : "outlined"
              }
              onClick={() => {
                setOperatingSystem("Linux");
                setOperatingSystemVersion(version);
              }}
            >
              {version} (${configuracion.sistemasOperativos.Linux[version]})
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <br />
        <Typography variant="body1" gutterBottom>
          <b>Windows </b>
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(configuracion.sistemasOperativos.Windows).map((version) => (
            <Button
              key={version}
              variant={
                operatingSystem === "Windows" && operatingSystemVersion === version
                  ? "contained"
                  : "outlined"
              }
              onClick={() => {
                setOperatingSystem("Windows");
                setOperatingSystemVersion(version);
              }}
            >
              {version} (${configuracion.sistemasOperativos.Windows[version]})
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <br />
        <Typography variant="body1" gutterBottom>
          <b>Daily Backup & Rapid Restore</b>
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(configuracion.backups).map((i) => (
            <Button
              key={i}
              variant={backup === i ? "contained" : "outlined"}
              onClick={() => setBackup(i)}
            >
              {i} (${configuracion.backups[i]})
            </Button>
          ))}
        </ButtonGroup>

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
            <Typography variant="body1">Memory: {memory} (GB)</Typography>
            <Typography variant="body1">Locacion: {location}</Typography>
            <Typography variant="body1">
              Sistema Operativo: {operatingSystem} ({operatingSystemVersion})
            </Typography>
            <Typography variant="body1">Daily Backup: {backup}</Typography>
            <Typography variant="body1">Primary Hard Drive: {primaryHardDriveSize}(GB)</Typography>
            <Typography variant="body1">Second Hard Drive: {secondHardDriveSize} (GB)</Typography>
            <Typography variant="body1">Third Hard Drive: {thirdHardDriveSize} (GB)</Typography>
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Precio Total: ${precioTotal}
            </Typography>
          </Paper>
        )}
        <br />
        <Typography variant="body1" gutterBottom>
          <b>Correo</b>
        </Typography>
        <TextField
          fullWidth
          type="email"
          label="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={enviarInformacion}
          style={{ marginTop: "20px" }}
        >
          Enviar Información
        </Button>
      </Container>
    </>
  );
}

export default ServidoresNube;
