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

const routes = [
  { path: "/", element: <Home /> },
  { path: "/clientes", element: <Clientes /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/soluciones-corporativas", element: <SolucionesCorp /> },
  { path: "/servicios-ti", element: <ServiciosNube /> },
  { path: "/outsourcing-ti", element: <Outsourcing /> },
  { path: "/quienes-somos", element: <QuienesSomos /> },
  { path: "/ver-mas-servicio-seguridad", element: <SeguridadNube /> },
  { path: "/ver-mas-servicio-dns", element: <ServiciosDNS /> },
  { path: "/ver-mas-servicio-migracion", element: <MigracionNube /> },
  { path: "/ver-mas-servicio-ransomware", element: <AcronisRansomware /> },
  { path: "/ver-mas-servicio-parches", element: <AcronisParcheEmpresas /> },
];

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
