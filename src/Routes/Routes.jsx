import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Clientes from "../Screens/Clientes/Clientes"
import Contacto from "../Screens/Contacto/Contacto"
import Outsourcing from "../Screens/Outsourcing/Outsourcing"
import ServiciosNube from "../Screens/ServiciosNube/ServiciosNube";
import SolucionesCorp from "../Screens/SolucionesCorp/SolucionesCorp";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/soluciones-corporativas" element={<SolucionesCorp/>} />
        <Route path="/servicios-nube" element={<ServiciosNube/>} />
        <Route path="/outsourcing-ti" element={<Outsourcing/>} />{" "}
        <Route path="/quienes-somos" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
