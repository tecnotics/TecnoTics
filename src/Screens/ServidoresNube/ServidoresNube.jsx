import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  ButtonGroup,
  TextField,
  Alert,
  AlertTitle,
  InputLabel,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";

function ServidoresNube({ servidor }) {
  const [location, setLocation] = useState("");
  const [memory, setMemory] = useState("");
  const [ssd, setSSD] = useState(false);
  const [ssdSize, setSSDSize] = useState(0);
  const [operatingSystem, setOperatingSystem] = useState("");
  const [servidorSeleccionado, setServidorSeleccionado] = useState(servidor);
  const [precioTotal, setPrecioTotal] = useState();
  const [correo, setCorreo] = useState();
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState("success");
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [errorFormulario, setErrorFormulario] = useState(false);
  const tamañosDisponibles = ["256 GB", "512 GB", "1 TB", "2 TB"];
  const [storageType, setStorageType] = useState("ssd");
  const preciosSSD = [320, 640, 1280, 25600];
  const preciosSATA = [320, 640, 1280, 25600];
  const [primaryHardDriveSize, setPrimaryHardDriveSize] = useState("");
  const [primaryHardDrivePrice, setPrimaryHardDrivePrice] = useState(preciosSSD[0]);
  const [secondHardDriveSize, setSecondHardDriveSize] = useState("");
  const [secondHardDrivePrice, setSecondHardDrivePrice] = useState(preciosSSD[0]);
  const [thirdHardDriveSize, setThirdHardDriveSize] = useState("");
  const [thirdHardDrivePrice, setThirdHardDrivePrice] = useState(preciosSSD[0]);
  const configuracion = {
    ubicaciones: {
      Atlanta: 0,
      Miami: 0,
      Chicago: 0,
      Tampa: 0,
      Dallas: 0,
    },
    memorias: {
      "32 GB": 40,
      "64 GB": 80,
      "128GB": 120,
    },
    sistemasOperativos: {
      Linux: 0,
      Windows: 100,
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

    if (configuracion.memorias[memory]) {
      precioCalculado += configuracion.memorias[memory];
    }

    if (configuracion.sistemasOperativos[operatingSystem]) {
      precioCalculado += configuracion.sistemasOperativos[operatingSystem];
    }
    if (primaryHardDriveSize) {
      precioCalculado += primaryHardDrivePrice;
    }

    if (secondHardDriveSize) {
      precioCalculado += secondHardDrivePrice;
    }

    if (thirdHardDriveSize) {
      precioCalculado += thirdHardDrivePrice;
    }

    const precioNumerico = parseFloat(precioCalculado);
    const precioFormateado = isNaN(precioNumerico) ? " Valor no válido" : precioNumerico.toFixed(2);

    setPrecioTotal(precioFormateado);
  };

  const enviarInformacion = () => {
    const camposVacios = location <= 0 || memory === "" || (ssd && ssdSize <= 0);

    if (camposVacios) {
      setErrorFormulario(true);
      setMostrarAlerta(true);
      setTipoAlerta("error");
      setMensajeAlerta("Por favor, complete todos los campos requeridos.");
      return;
    }

    const formData = {
      destinatario: "Alejandro@tecnotics.com",
      asunto: "Cotizacion de Servidor",
      mensaje: `Detalles de la Cotización:
      - Nombre del Servidor: ${servidorSeleccionado.nombre}
      - Correo Electrónico: ${correo}
      - Memoria: ${memory}
      - Tamaño de la SSD: ${ssdSize} 
      - Ubicación: ${location}
      - Sistema Operativo: ${operatingSystem}
      - Primary Hard Drive: ${primaryHardDriveSize}
      - Second Hard Drive: ${
        secondHardDriveSize ? secondHardDriveSize : "NO LLEVA UN SEGUNDO DISCO"
      }
      - Third Hard Drive: ${thirdHardDriveSize ? thirdHardDriveSize : "NO LEVA UN TERCER DISCO"}
      `,
    };

    console.log(formData);

    fetch("http://localhost:3000/correo/enviar_correo", {
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
        setMostrarAlerta(true);
        setTipoAlerta("success");
        setMensajeAlerta(data.message);
      })
      .catch((error) => {
        console.log(error);
        setMostrarAlerta(true);
        setTipoAlerta("error");
        setMensajeAlerta(
          "Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo."
        );
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
      
        <Typography variant="h3" gutterBottom>
          <b>Cotizador de Servidores</b>
        </Typography>
        <ButtonGroup fullWidth variant="outlined">
          <Button>{servidorSeleccionado.nombre}</Button>
        </ButtonGroup>

        <Typography variant="body1" gutterBottom>
          <b>Primary Hard Drive </b>
        </Typography>
        <ButtonGroup fullWidth>
          {tamañosDisponibles.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                storageType === "ssd" && primaryHardDriveSize === tamaño ? "contained" : "outlined"
              }
              onClick={() => {
                setStorageType("ssd");
                setSSDSize(tamañosDisponibles[index]);
                setPrimaryHardDriveSize(tamañosDisponibles[index]);
                setPrimaryHardDrivePrice(preciosSSD[index]);
              }}
            >
              {tamaño} SSD (${preciosSSD[index]})
            </Button>
          ))}
          {tamañosDisponibles.map((tamaño, index) => (
            <Button
              key={tamaño}
              variant={
                !ssd && storageType === "sata" && ssdSize === tamañosDisponibles[index]
                  ? "contained"
                  : "outlined"
              }
              onClick={() => {
                setStorageType("sata");
                setSSDSize(tamañosDisponibles[index]);
                setPrimaryHardDriveSize(tamañosDisponibles[index]);
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
          {tamañosDisponibles.map((tamaño, index) => (
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
          {tamañosDisponibles.map((tamaño, index) => (
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
          {tamañosDisponibles.map((tamaño, index) => (
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
          {tamañosDisponibles.map((tamaño, index) => (
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
        <InputLabel htmlFor="location">Correo electrónico</InputLabel>
        <TextField
          fullWidth
          type="email"
          label="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <InputLabel htmlFor="location">Location</InputLabel>
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
        <InputLabel htmlFor="memory">Memory</InputLabel>
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
        <InputLabel htmlFor="operatingSystem">Sistema Operativo</InputLabel>
        <ButtonGroup fullWidth>
          <Button
            variant={operatingSystem === "Linux" ? "contained" : "outlined"}
            onClick={() => setOperatingSystem("Linux")}
          >
            Linux (${configuracion.sistemasOperativos.Linux})
          </Button>
          <Button
            variant={operatingSystem === "Windows" ? "contained" : "outlined"}
            onClick={() => setOperatingSystem("Windows")}
          >
            Windows (${configuracion.sistemasOperativos.Windows})
          </Button>
        </ButtonGroup>
        {servidorSeleccionado && (
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5">Información del Servidor</Typography>
            <img
              src={servidorSeleccionado.image}
              alt=""
              style={{ objectFit: "contain", height: "200px", width: "100%" }}
            />
            <Typography variant="body1">{servidorSeleccionado.nombre}</Typography>
            <Typography variant="body1">Memory: {memory} (GB)</Typography>
            <Typography variant="body1">Locacion: {location}</Typography>
            <Typography variant="body1">Sistema Operativo: {operatingSystem}</Typography>
            <Typography variant="body1">
              Primary Hard Drive: {primaryHardDrivePrice} (GB)
            </Typography>
            <Typography variant="body1">Second Hard Drive: {secondHardDriveSize} (GB)</Typography>
            <Typography variant="body1">Third Hard Drive: {thirdHardDriveSize} (GB)</Typography>
            <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
              Precio Total: ${precioTotal}
            </Typography>
          </Paper>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={enviarInformacion}
          style={{ marginTop: "20px" }}
        >
          Enviar Información
        </Button>
        {mostrarAlerta && (
          <Alert severity={tipoAlerta} onClose={() => setMostrarAlerta(false)}>
            <AlertTitle>{tipoAlerta === "success" ? "Éxito" : "Error"}</AlertTitle>
            {mensajeAlerta}
          </Alert>
        )}
      </Container>
    </>
  );
}

export default ServidoresNube;
