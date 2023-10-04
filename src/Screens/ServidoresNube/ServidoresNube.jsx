import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ServidoresNube() {
  const servidores = [
    {
      id: "servidor1",
      nombre: "Servidor 1",
      precioPorGB: 0.1,
      precioPorGBSSD: 0.2, // Precio por GB de SSD
      info: "Información sobre Servidor 1",
      locations: ["Datacenter A", "Datacenter B"],
      memoryOptions: ["16 GB", "32 GB", "64 GB"],
    },
    {
      id: "servidor2",
      nombre: "Servidor 2",
      precioPorGB: 0.15,
      precioPorGBSSD: 0.25, // Precio por GB de SSD
      info: "Información sobre Servidor 2",
      locations: ["Datacenter A", "Datacenter C"],
      memoryOptions: ["32 GB", "64 GB", "128 GB"],
    },
    // Agrega más servidores con propiedades similares
  ];

  const [tipoServidor, setTipoServidor] = useState("");
  const [almacenamiento, setAlmacenamiento] = useState(0);
  const [location, setLocation] = useState("");
  const [memory, setMemory] = useState("");
  const [ssd, setSSD] = useState(false);
  const [ssdSize, setSSDSize] = useState(0);
  const [operatingSystem, setOperatingSystem] = useState("");
  const [precioTotal, setPrecioTotal] = useState(0);
  const [servidorSeleccionado, setServidorSeleccionado] = useState(null);

  const calcularPrecioTotal = () => {
    const servidor = servidores.find(
      (servidor) => servidor.id === tipoServidor
    );

    if (servidor) {
      let precioCalculado = almacenamiento * servidor.precioPorGB;

      // Considerar el tamaño de la SSD
      if (ssd) {
        precioCalculado += ssdSize * servidor.precioPorGBSSD; // Precio por GB de SSD
      }

      // Resto de los cálculos basados en las opciones seleccionadas por el usuario
      // Ejemplo: Location y Memory
      if (location === "Datacenter A") {
        precioCalculado += 100; // Precio adicional por Datacenter A
      } else if (location === "Datacenter B") {
        precioCalculado += 120; // Precio adicional por Datacenter B
      } else if (location === "Datacenter C") {
        precioCalculado += 130; // Precio adicional por Datacenter C
      }

      if (memory === "32 GB") {
        precioCalculado += 200; // Precio adicional por 32 GB de memoria
      } else if (memory === "64 GB") {
        precioCalculado += 350; // Precio adicional por 64 GB de memoria
      }

      // Resto de los cálculos basados en las opciones seleccionadas por el usuario
      // Ejemplo: Sistema Operativo
      if (operatingSystem === "Linux") {
        precioCalculado += 0; // Linux puede ser gratuito
      } else if (operatingSystem === "Windows") {
        precioCalculado += 100; // Precio adicional por Windows
      }

      setPrecioTotal(precioCalculado);
      setServidorSeleccionado(servidor);
    } else {
      setPrecioTotal(0);
      setServidorSeleccionado(null);
    }
  };

  useEffect(() => {
    calcularPrecioTotal();
  }, [
    tipoServidor,
    almacenamiento,
    ssd,
    ssdSize,
    location,
    memory,
    operatingSystem,
  ]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" gutterBottom>
          <b>Cotizador de Servidores</b>
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Tipo de Servidor</InputLabel>
          <Select
            value={tipoServidor}
            onChange={(e) => setTipoServidor(e.target.value)}
          >
            {servidores.map((servidor) => (
              <MenuItem key={servidor.id} value={servidor.id}>
                {servidor.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Almacenamiento (GB)</InputLabel>
          <TextField
            type="number"
            value={almacenamiento}
            onChange={(e) => setAlmacenamiento(parseInt(e.target.value))}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {servidorSeleccionado &&
              servidorSeleccionado.locations.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Memory</InputLabel>
          <Select value={memory} onChange={(e) => setMemory(e.target.value)}>
            {servidorSeleccionado &&
              servidorSeleccionado.memoryOptions.map((mem) => (
                <MenuItem key={mem} value={mem}>
                  {mem}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={ssd}
              onChange={(e) => setSSD(e.target.checked)}
            />
          }
          label="SSD"
        />
        {ssd && (
            <FormControl fullWidth>
              <InputLabel>Tamaño de la SSD (GB)</InputLabel>
            <TextField
              type="number"
              value={ssdSize}
              onChange={(e) => setSSDSize(parseInt(e.target.value))}
            />
          </FormControl>
        )}
        <FormControl fullWidth>
          <InputLabel>Sistema Operativo</InputLabel>
          <Select
            value={operatingSystem}
            onChange={(e) => setOperatingSystem(e.target.value)}
          >
            <MenuItem value="Linux">Linux</MenuItem>
            <MenuItem value="Windows">Windows</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom>
          Precio Total: ${precioTotal}
        </Typography>
        {servidorSeleccionado && (
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5">Información del Servidor</Typography>
            <Typography variant="body1">
              Nombre: {servidorSeleccionado.nombre}
            </Typography>
            <Typography variant="body1">
              Precio por GB: ${servidorSeleccionado.precioPorGB}
            </Typography>
            <Typography variant="body1">
              Información Adicional: {servidorSeleccionado.info}
            </Typography>
          </Paper>
        )}
      </Container>
      <br />
      <Footer />
    </>
  );
}

export default ServidoresNube;
