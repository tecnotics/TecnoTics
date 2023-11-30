import serviciocloud from "../../assets/images/Cloud/dall-e10-equipo trabajando frente a servidores.png";
import serviciovps from "../../assets/images/Cloud/dall-e11-computador con estatisticas.png";
import servicioDNS from "../../assets/images/Cloud/dall-e12-pantalla con muchas opciones.png";
import servicioVoIP from "../../assets/images/Cloud/dall-e13-computador con un simbolo de red.png";
import servicioSeguridad from "../../assets/images/Cloud/dall-e5-nube y servidores.png";
import telefoniaIP from "../../assets/images/Cloud/Dall-e4-Equipo viendo servidor grande.png";
import servicioMigracion from "../../assets/images/Cloud/dall-e14-compañeros trabajando juntos.png";
import acronisfondo from "../../assets/images/AcronisAbout.webp"; 
import RedesDatos from "../../assets/images/RedesDatos/dall-e40-Redes de Datos.png";
import acronis1 from "../../assets/images/AcronisCard1.webp";
import acronis2 from "../../assets/images/AcronisCard2.webp";
import acronis3 from "../../assets/images/AcronisCard3.webp";
import acronis4 from "../../assets/images/AcronisCard4.webp";
import acronis5 from "../../assets/images/AcronisCard5.webp";
import acronis6 from "../../assets/images/AcronisCard6.webp";
import Card4 from "../../../src/assets/images/TI/dall-e37-cientificos en servidores.png";
import Card5 from "../../../src/assets/images/TI/dall-e38-servidores estadistica.png";
import Card6 from "../../../src/assets/images/TI/dall-e39-hackers reunidos.png";
import Card7 from "../../../src/assets/images/Cloud/dall-e10-equipo trabajando frente a servidores.png";

export const acronisServices = {
  title: "Acronis",
  services: [
    {
      title: "Proteccion frente al ransomware",
      description:
        "Soluciones de Acronis para detener el ransomware, incluso variantes desconocidas.",
      imageUrl: acronisfondo,
      moreLink: "/ver-mas-servicio-ransomware",
    },
    {
      title: "Administracion de parches para empresas",
      description:
        "Soluciones de administración automatizada de parches de Acronis para proteger contra amenazas.",
      imageUrl: acronis1,
      moreLink: "/ver-mas-servicio-parches",
    },
    {
      title: "Antimalware para entornos corporativos",
      description:
        "Soluciones antimalware de Acronis para neutralizar malware conocido y desconocido.",
      imageUrl: acronis2,
      moreLink: "/ver-mas-servicio-antimalware",
    },
    {
      title: "Recuperacion ante desastres de TI",
      description:
        "Opciones de recuperación de talla mundial para evitar interrupciones empresariales.",
      imageUrl: acronis3,
      moreLink: "/ver-mas-servicio-ti",
    },
    {
      title: "Copia de seguridad y recuperación de archivos",
      description:
        "Protección de datos incomparable con soluciones de copia de seguridad y recuperación de Acronis.",
      imageUrl: acronis4,
      moreLink: "/ver-mas-acronis-seguridad",
    },
    {
      title: "Prevención a perdida de datos (DLP)",
      description:
        "Funciones de prevención de la fuga de datos (DLP) para bloquear transferencias no autorizadas.",
      imageUrl: acronis5,
      moreLink: "/ver-mas-servicio-dlp",
    },
    {
      title: "Sector público y Administracion (Acronis SCS)",
      description: "Copia de seguridad reforzada certificada por DoDIN APL.",
      imageUrl: acronis6,
      moreLink: "/ver-mas-servicio-scs",
    },
  ],
};

export const tecnoTicsServices = {
  title: "Nuestros Servicios",
  services: [
    {
      title: "Servidores Dedicados",
      imageUrl: Card4,
      description:
        "Descubre el poder y la confiabilidad de nuestros servidores dedicados, diseñados para impulsar tu infraestructura de TI con un rendimiento excepcional y personalización completa.",
      moreLink: "/ver-mas-servidor-nube",
    },
    {
      title: "Servidores VPS",
      description:
        "Experimenta la flexibilidad y potencia de los Servidores VPS, perfectos para empresas que buscan un equilibrio entre control, rendimiento y eficiencia en la gestión de recursos.",
      imageUrl: serviciovps,
      moreLink: "/ver-mas-servidor-vps",
    },
    {
      title: "Seguridad Perimetral",
      description:
        "Maximiza la seguridad de tu presencia en línea con nuestra gestión avanzada de registros DNS, asegurando la protección y optimización de tus servicios web.",
      imageUrl: servicioDNS,
      moreLink: "/ver-mas-servicio-dns",
    },
    {
      title: "Central Virtual",
      description:
        "Transforma las comunicaciones de tu empresa con nuestra solución de telefonía IP en la nube, integrando tecnología moderna para una colaboración eficaz y sin fronteras.",
      imageUrl: telefoniaIP,
      moreLink: "/ver-mas-servicio-telefonia",
    },
    {
      title: "Troncal SIP",
      description:
        "Eleva tus comunicaciones empresariales con nuestro servicio Troncal SIP, incluyendo un portal de usuario avanzado, paneles administrativos, grabación de llamadas y opciones de números internacionales.",
      imageUrl: servicioVoIP,
      moreLink: "/ver-mas-servicio-voip",
    },
    {
      title: "Seguridad en la Nube",
      description:
        "Defiende tus aplicaciones y datos en línea con nuestra protección avanzada, que incluye firewall de última generación, sistemas de detección de intrusiones y cifrado robusto de datos.",
      imageUrl: servicioSeguridad,
      moreLink: "/ver-mas-servicio-seguridad",
    },
    {
      title: "Migración a la Nube",
      description:
        "Facilitamos tu transición hacia la nube con asesoramiento experto y asistencia técnica para una migración de datos y aplicaciones eficiente, segura y sin interrupciones.",
      imageUrl: servicioMigracion,
      moreLink: "/ver-mas-servicio-migracion",
    },
    {
      title: "FlashStart",
      imageUrl: Card7,
      description:
        "Descubre cómo FlashStart puede ayudarte a proteger tu red y dispositivos contra amenazas en línea. Seguridad cibernética avanzada al alcance de tu mano.",
      moreLink: "/flashstart",
    },
    {
      title: "Redes de datos",
      imageUrl: RedesDatos,
      description:
        "Asegura y mejora tu red de datos, ofreciendo una protección superior contra ciberamenazas y optimizando el rendimiento de tu infraestructura de red.",
      moreLink: "/redes-de-datos",
    },
  ],
};
