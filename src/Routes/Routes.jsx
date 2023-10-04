import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Clientes from "../Screens/Clientes/Clientes";
import Contacto from "../Screens/Contacto/Contacto";
import Outsourcing from "../Screens/Outsourcing/Outsourcing";
import ServiciosNube from "../Screens/ServiciosNube/ServiciosNube";
import SolucionesCorp from "../Screens/SolucionesCorp/SolucionesCorp";
import QuienesSomos from "../Screens/QuienesSomos/QuienesSomos";
import SeguridadNube from "../Screens/SeguridadNube/SeguridadNube";
import ServiciosDNS from "../Screens/ServiciosDNS/ServiciosDNS";
import MigracionNube from "../Screens/MigracionNube/MigracionNube";
import AcronisRansomware from "../Screens/AcronisRansomware/AcronisRansomware";
import AcronisParcheEmpresas from "../Screens/AcronisParcheEmpresas/AcronisParcheEmpresas";
import ServidoresNube from "../Screens/ServidoresNube/ServidoresNube";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/soluciones-corporativas" element={<SolucionesCorp />} />
        <Route path="/servicios-ti" element={<ServiciosNube />} />
        <Route path="/outsourcing-ti" element={<Outsourcing />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/ver-mas-servicio-seguridad" element={<SeguridadNube />} />
        <Route path="/ver-mas-servicio-dns" element={<ServiciosDNS />} />
        <Route path="/ver-mas-servicio-migracion" element={<MigracionNube />} />
        <Route
          path="/ver-mas-servicio-ransomware"
          element={<AcronisRansomware />}
        />
        <Route
          path="/ver-mas-servicio-parches"
          element={<AcronisParcheEmpresas />}
        />
        <Route path="/ver-mas-servidor-nube" element={<ServidoresNube />} />
      </Routes>
    </BrowserRouter>
  );
}
