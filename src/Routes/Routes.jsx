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
import ServiciosVoLP from "../Screens/ServiciosVoLP/ServiciosVoLP";
import MigracionNube from "../Screens/MigracionNube/MigracionNube";
import TelefoniaIP from "../Screens/TelefoniaIP/TelefoniaIP";
import AcronisRansomware from "../Screens/AcronisRansomware/AcronisRansomware";
import AcronisParcheEmpresas from "../Screens/AcronisParcheEmpresas/AcronisParcheEmpresas";
import AcronisAntimalware from "../Screens/AcronisAntimalware/AcronisAntimalware";
import AcronisRecuperacionTI from "../Screens/AcronisRecuperacionTI/AcronisRecuperacionTI";
import AcronisCopiaSeguridad from "../Screens/AcronisCopiaSeguridad/AcronisCopiaSeguridad";
import AcronisPerdidaDatos from "../Screens/AcronisPerdidaDatos/AcronisPerdidaDatos";
import AcronisSectorPublico from "../Screens/AcronisSectorPublico/AcronisSectorPublico";
import ServerCards from "../Screens/ServidoresNube/ServidoresCardsContainer";
import ServerVPSCards from "../Screens/ServidoresVPS/ServidoresVPSContainer";
import RegistroUsuario from "../Screens/Clientes/RegistroUsuario";
import RecuperarContraseña from "../Screens/Clientes/RecuperarContraseña";
import Soporte from "../Screens/Clientes/Soporte";
import Office365 from "../Screens/Office365/Office365";
import AcronisContainer from "../Screens/AcronisCotizador/AcronisContainer";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/RegistrarUsuario" element={<RegistroUsuario />} />
        <Route path="/RecuperarContraseña" element={<RecuperarContraseña />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/soluciones-corporativas" element={<SolucionesCorp />} />
        <Route path="/servicios-ti" element={<ServiciosNube />} />
        <Route path="/cotizador-office" element={<Office365 />} />
        <Route path="/cotizador-acronis" element={<AcronisContainer />} />
        <Route path="/outsourcing-ti" element={<Outsourcing />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/ver-mas-servicio-seguridad" element={<SeguridadNube />} />
        <Route path="/ver-mas-servicio-dns" element={<ServiciosDNS />} />
        <Route path="/ver-mas-servicio-migracion" element={<MigracionNube />} />

        <Route path="/ver-mas-servicio-ransomware" element={<AcronisRansomware />} />
        <Route path="/ver-mas-servicio-antimalware" element={<AcronisAntimalware />} />
        <Route path="ver-mas-servicio-ti" element={<AcronisRecuperacionTI />} />
        <Route path="ver-mas-acronis-seguridad" element={<AcronisCopiaSeguridad />} />
        <Route path="ver-mas-servicio-dlp" element={<AcronisPerdidaDatos />} />
        <Route path="ver-mas-servicio-scs" element={<AcronisSectorPublico />} />

        <Route path="/ver-mas-servicio-parches" element={<AcronisParcheEmpresas />} />
        <Route path="/ver-mas-servidor-nube" element={<ServerCards />} />
        <Route path="//ver-mas-servidor-vps" element={<ServerVPSCards />} />
        <Route path="/ver-mas-servicio-voip" element={<ServiciosVoLP />} />
        <Route path="/ver-mas-servicio-telefonia" element={<TelefoniaIP />} />
      </Routes>
    </BrowserRouter>
  );
}
