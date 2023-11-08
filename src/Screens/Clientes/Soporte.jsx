import React, { useState } from "react";
import Swal from "sweetalert2";
import db from "../../../Firestore";
import Navbar from "../../Components/Navbar/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Soporte() {
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      setContact(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "company") {
      setCompany(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (contact === "" || username === "" || description === "" || company === "") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, complete todos los campos",
        });
        return;
      }

      const firebaseResponse = await db.collection("supportRequests").add({
        contact: contact,
        username: username,
        description: description,
        company: company,
        timestamp: new Date(),
      });

      // Enviar correo
      const correoResponse = await enviarCorreo({
        destinatario: "soporte@tecnotics.com",
        asunto: "Envío de Ticket",
        mensaje: `Detalles del Ticket:
        - Nombre de la empresa: ${company}
        - Información de contacto: ${contact}
        - Nombre de usuario: ${username}
        - Descripción del problema: ${description}
        `,
      });

      Swal.fire({
        icon: "success",
        title: "Solicitud enviada",
        text: `Tu solicitud de soporte a ${company} ha sido enviada con éxito.`,
      });

      setContact("");
      setUsername("");
      setDescription("");
      setCompany("");
    } catch (error) {
      console.error("Error al enviar la solicitud de soporte:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Ocurrió un error al enviar la solicitud de soporte a ${company}`,
      });
    }
  };

  const enviarCorreo = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/correo/enviar_correo", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "#f7f7f7",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Soporte - Envía un Ticket
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre de la empresa"
                fullWidth
                variant="outlined"
                name="company"
                value={company}
                onChange={handleChange}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Información de contacto"
                fullWidth
                variant="outlined"
                name="contact"
                value={contact}
                onChange={handleChange}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nombre de usuario"
                fullWidth
                variant="outlined"
                name="username"
                value={username}
                onChange={handleChange}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Descripción del problema"
                fullWidth
                variant="outlined"
                name="description"
                multiline
                rows={4}
                value={description}
                onChange={handleChange}
                style={{ marginBottom: "16px" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Enviar Solicitud
          </Button>
        </form>
        <Link href="/" style={{ display: "block", marginTop: "16px" }}>
          Volver a la página de inicio
        </Link>
      </Container>
    </>
  );
}

export default Soporte;
