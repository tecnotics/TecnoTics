import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  Alert,
  AlertTitle,
  InputLabel,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";

function ServidoresNube({ servidor }) {
  const [almacenamiento, setAlmacenamiento] = useState(0);
  const [location, setLocation] = useState("");
  const [memory, setMemory] = useState("");
  const [ssd, setSSD] = useState(false);
  const [ssdSize, setSSDSize] = useState(0);
  const [operatingSystem, setOperatingSystem] = useState("");
  const [precioTotal, setPrecioTotal] = useState(0);
  const [servidorSeleccionado, setServidorSeleccionado] = useState(servidor);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState("success");
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [errorFormulario, setErrorFormulario] = useState(false);

  const configuracion = {
    ubicaciones: {
      Atlanta: 100,
      Miami: 120,
      Chicago: 130,
      Tampa: 140,
      Dallas: 150,
    },
    memorias: {
      "32 GB": 200,
      "64 GB": 350,
      "128GB": 450,
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

    let precioCalculado = almacenamiento * servidorSeleccionado.precioPorGB;

    if (ssd) {
      precioCalculado += ssdSize * servidorSeleccionado.precioPorGBSSD;
    }

    if (configuracion.ubicaciones[location]) {
      precioCalculado += configuracion.ubicaciones[location];
    }

    if (configuracion.memorias[memory]) {
      precioCalculado += configuracion.memorias[memory];
    }

    if (configuracion.sistemasOperativos[operatingSystem]) {
      precioCalculado += configuracion.sistemasOperativos[operatingSystem];
    }

    setPrecioTotal(precioCalculado);
  };

  const enviarInformacion = () => {
    const camposVacios =
      almacenamiento <= 0 || location === "" || memory === "" || (ssd && ssdSize <= 0);

    if (camposVacios) {
      setErrorFormulario(true);
      setMostrarAlerta(true);
      setTipoAlerta("error");
      setMensajeAlerta("Por favor, complete todos los campos requeridos.");
      return;
    }

    setTimeout(() => {
      setMostrarAlerta(true);
      setTipoAlerta("success");
      setMensajeAlerta("La información se envió correctamente.");
    }, 1000);
  };

  useEffect(() => {
    setServidorSeleccionado(servidor);
  }, [servidor]);

  useEffect(() => {
    calcularPrecioTotal();
  }, [almacenamiento, location, memory, ssd, ssdSize, operatingSystem, servidorSeleccionado]);

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
        <TextField
          fullWidth
          type="number"
          label="Almacenamiento (GB)"
          value={almacenamiento}
          onChange={(e) => setAlmacenamiento(parseInt(e.target.value))}
          style={{ marginTop: "20px" }}
        />
        <FormControlLabel
          control={<Checkbox checked={ssd} onChange={(e) => setSSD(e.target.checked)} />}
          label="SSD"
          style={{ marginTop: "20px" }}
        />
        {ssd && (
          <TextField
            fullWidth
            type="number"
            label="Tamaño de la SSD (GB)"
            value={ssdSize}
            onChange={(e) => setSSDSize(parseInt(e.target.value))}
            style={{ marginTop: "20px" }}
          />
        )}
        <InputLabel htmlFor="location">Location</InputLabel>
        <Select
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Location"
          inputProps={{
            name: "location",
            id: "location",
          }}
        >
          {servidorSeleccionado.locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="memory">Memory</InputLabel>
        <Select
          fullWidth
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          label="Memory"
          inputProps={{
            name: "memory",
            id: "memory",
          }}
        >
          {servidorSeleccionado.memoryOptions.map((mem) => (
            <MenuItem key={mem} value={mem}>
              {mem}
            </MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="operatingSystem">Sistema Operativo</InputLabel>
        <Select
          fullWidth
          value={operatingSystem}
          onChange={(e) => setOperatingSystem(e.target.value)}
          label="Sistema Operativo"
          inputProps={{
            name: "operatingSystem",
            id: "operatingSystem",
          }}
        >
          <MenuItem value="Linux">Linux</MenuItem>
          <MenuItem value="Windows">Windows</MenuItem>
        </Select>
        {servidorSeleccionado && (
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5">Información del Servidor</Typography>
            <img
              src={servidorSeleccionado.image}
              alt=""
              style={{ objectFit: "contain", height: "200px", width: "100%" }}
            />
            <Typography variant="body1">{servidorSeleccionado.nombre}</Typography>
            <Typography variant="body1">{servidorSeleccionado.info}</Typography>
            <Typography variant="body1">Almacenamiento: {almacenamiento} (GB)</Typography>
            <Typography variant="body1">SSD: {ssdSize} (GB)</Typography>
            <Typography variant="body1">Locacion: {location}</Typography>
            <Typography variant="body1">Memoria: {memory}</Typography>
            <Typography variant="body1">Sistema Operativo: {operatingSystem}</Typography>
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
