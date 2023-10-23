import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"

function Clientes() {

   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");
   const [isError, setIsError] = useState(false);

   const handleChange = (e) => {
     const { name, value } = e.target;
     if (name === "username") {
       setUsername(value);
     } else if (name === "password") {
       setPassword(value);
     }
   };

   const handleInicioSesion = (ruta) => {
    //  Swal.fire({
    //    title: "Iniciando sesión",
    //    text: "Por favor, espera un momento...",
    //    icon: "info",
    //    showConfirmButton: false,
    //    allowOutsideClick: false,
    //    allowEscapeKey: false,
    //    didOpen: () => {
    //      Swal.showLoading();
    //      setTimeout(() => {
    //        navigate(ruta);
    //        Swal.close();
    //      }, 2000); // Simula un inicio de sesión que tarda 2 segundos
    //    },
    //  });
   };

   const handleUsuarioNoExistente = (ruta) => {
    //  Swal.fire({
    //    title: "Usuario no encontrado",
    //    text: "Este usuario no existe",
    //    icon: "error",
    //    confirmButtonText: "Aceptar",
    //  }).then(() => {
    //    navigate(ruta);
    //  });
   };

   const handleCamposVacios = () => {
    //  Swal.fire({
    //    title: "Campos vacíos",
    //    text: "Por favor, completa todos los campos",
    //    icon: "error",
    //    confirmButtonText: "Aceptar",
    //  });
   };

   const handleSubmit = async (e) => {
    //  e.preventDefault();
    //  if (username === "" || password === "") {
    //    handleCamposVacios();
    //    return;
    //  }
    //  const existingUserQuerySnapshot = await db
    //    .collection("users")
    //    .where("username", "==", username)
    //    .where("password", "==", password)
    //    .get();
    //  if (!existingUserQuerySnapshot.empty) {
    //    // El usuario existe, inicia sesión o realiza alguna acción adicional
    //    setMessage("El usuario existe. Iniciando sesión...");
    //    handleInicioSesion("/Home");
    //    // Agrega aquí la lógica para iniciar sesión o realizar la acción deseada con el usuario existente
    //  } else {
    //    handleUsuarioNoExistente("/RegistrarUsuario");
    //  }
    //  // Restablece el estado
    //  setUsername("");
    //  setPassword("");

    //  // Verificar si la consulta obtuvo resultados
    //  if (existingUserQuerySnapshot.empty) {
    //    console.log("No se encontraron usuarios con las credenciales proporcionadas");
    //  } else {
    //    console.log("Se encontraron usuarios con las credenciales proporcionadas");
    //  }
   };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">
              <b>Clientes</b>
            </Typography>
            <div className="background">
              <div className="shape"></div>
              <div className="shape"></div>
              <form className="login-form" onSubmit={handleSubmit}>
                <h3>TecnoTics</h3>
                {message && <p className={isError ? "error" : "success"}>{message}</p>}
                <label htmlFor="username">Nombre de Usuario</label>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />

                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />

                <button className="mt-4" type="submit">
                  Iniciar Sesion
                </button>
                <div className="social">
                  <div>
                    <Link to="/RegistrarUsuario">Registrar usuario</Link>
                  </div>
                  <div>
                    <Link to="/RecuperarContraseña">¿Olvidaste tu contraseña?</Link>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Clientes;
