import { useState } from "react";
import Swal from "sweetalert2";
import db from "../../../Firestore";
import Navbar from "../../Components/Navbar/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Box, Link } from "@mui/material";

const RecuperarContraseña = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reservedWord, setReservedWord] = useState("");
  const [canChangePassword, setCanChangePassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "reservedWord") {
      setReservedWord(value);
    }
  };

  const handlePasswordRecovery = async (event) => {
    event.preventDefault();

    try {
      if (username === "" || reservedWord === "") {
     
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, complete todos los campos",
        });
        return;
      }

      const existingUserQuerySnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .where("reservword", "==", reservedWord)
        .get();

      if (!existingUserQuerySnapshot.empty) {
 
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "El usuario existe. Puede cambiar la contraseña.",
        });
        setCanChangePassword(true);
      } else {
    
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se encontró el usuario",
        });
      }
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al recuperar la contraseña",
      });
    }
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    try {
      const existingUserQuerySnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .where("reservword", "==", reservedWord)
        .get();

      if (!existingUserQuerySnapshot.empty) {
        const userRef = existingUserQuerySnapshot.docs[0].ref;
        await userRef.update({
          password: newPassword,
        });

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Contraseña actualizada correctamente",
        });
        setUsername("");
        setNewPassword("");
        setReservedWord("");
        setCanChangePassword(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se encontró el usuario",
        });
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al cambiar la contraseña",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box mt={4} mb={4}>
          <Typography variant="h4">Recuperar contraseña</Typography>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
          onSubmit={canChangePassword ? handleChangePassword : handlePasswordRecovery}
        >
          <div
            style={{
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <TextField
              label="Nombre de usuario"
              fullWidth
              variant="outlined"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          {canChangePassword && (
            <div
              style={{
                marginBottom: "16px",
                width: "100%",
              }}
            >
              <TextField
                label="Nueva contraseña"
                fullWidth
                variant="outlined"
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
              />
            </div>
          )}
          <div
            style={{
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <TextField
              label="Palabra reservada"
              fullWidth
              variant="outlined"
              type="password"
              name="reservedWord"
              value={reservedWord}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {canChangePassword ? "Cambiar contraseña" : "Recuperar"}
            </Button>
          </div>
        </form>
        <Link href="/clientes">Iniciar sesión</Link>
      </Container>
    </>
  );
};

export default RecuperarContraseña;
