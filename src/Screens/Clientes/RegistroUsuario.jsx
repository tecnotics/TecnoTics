import { useState } from "react";
import db from "../../../Firestore";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./RegistroUsuario.css"; 

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    role: "usuario",
    password: "",
    reservword: "",
  });

  const [state, setState] = useState({
    error: "",
    message: "",
  });

  const { error, message } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        formData.username === "" ||
        formData.name === "" ||
        formData.password === "" ||
        formData.reservword === "" // Verifica que el campo de reservword no esté vacío
      ) {
        Swal.fire({
          icon: "error",
          title: "Campos vacíos",
          text: "Por favor, complete todos los campos",
        });
        return;
      }

      await db.collection("users").add(formData);

      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Usuario registrado correctamente",
      });

      setFormData({
        username: "",
        name: "",
        role: "usuario",
        password: "",
        reservword: "", // Restablece el campo de reservword a un valor vacío
      });
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setState({
        message: "",
        error: "Ocurrió un error al registrar el usuario",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      username: "",
      name: "",
      role: "usuario",
      password: "",
      reservword: "", // Restablece el campo de reservword a un valor vacío
    });

    setState({
      error: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Registrar usuario</h2>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              fullWidth
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Select
              label="Rol"
              fullWidth
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="administrador">Administrador</MenuItem>
              <MenuItem value="usuario">Usuario</MenuItem>
            </Select>
          </div>
          <div className="form-group">
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Palabra Reservada"
              variant="outlined"
              fullWidth
              id="reservword"
              name="reservword"
              value={formData.reservword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Button type="submit" variant="contained" color="primary">
              Registrar
            </Button>
            <Button type="button" variant="contained" color="secondary" onClick={handleClear}>
              Limpiar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistroUsuario;
