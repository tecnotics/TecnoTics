import serviciocloud from "../../assets/images/servicioscloud.jpg";
import servicioDNS from "../../assets/images/DNS.jpg";
import servicioVoIP from "../../assets/images/serviciosVoIP.jpg";
import servicioSeguridad from "../../assets/images/servicioseguridad.jpeg";
import telefoniaIP from "../../assets/images/TelefoniaIP.jpg";
import servicioMigracion from "../../assets/images/serviciosmigracion.png";
import acronisfondo from "../../assets/images/AcronisAbout.webp";
import acronis1 from "../../assets/images/AcronisCard1.webp";
import acronis2 from "../../assets/images/AcronisCard2.webp";
import acronis3 from "../../assets/images/AcronisCard3.webp";
import acronis4 from "../../assets/images/AcronisCard4.webp";
import acronis5 from "../../assets/images/AcronisCard5.webp";
import acronis6 from "../../assets/images/AcronisCard6.webp";

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
      title: "Administrcion de parches para empresas",
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
      moreLink: "/ver-mas-servicio-seguridad",
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
      title: "Servidores Nube",
      description:
        "Infraestructura de TI sólida y confiable para empresas en servidores en la nube.",
      imageUrl: serviciocloud,
      moreLink: "/ver-mas-servicio-cloud",
    },
    {
      title: "Servicios DNS",
      description:
        "Gestión, optimización y seguridad de registros DNS para servicios en línea.",
      imageUrl: servicioDNS,
      moreLink: "/ver-mas-servicio-dns",
    },
    {
      title: "Telefonía IP",
      description:
        "Modernización de comunicaciones empresariales con telefonía IP en la nube.",
      imageUrl: telefoniaIP,
      moreLink: "/ver-mas-servicio-telefonia",
    },
    {
      title: "Servicios VoIP",
      description:
        "Portal de usuario, panel administrativo, panel de llamadas, grabación de llamadas y números internacionales para mejorar las comunicaciones empresariales.",
      imageUrl: servicioVoIP,
      moreLink: "/ver-mas-servicio-voip",
    },
    {
      title: "Seguridad en la Nube",
      description:
        "Protección avanzada de aplicaciones y datos en línea, incluyendo firewall, detección de intrusiones y cifrado de datos.",
      imageUrl: servicioSeguridad,
      moreLink: "/ver-mas-servicio-seguridad",
    },
    {
      title: "Migración a la Nube",
      description:
        "Asesoramiento y asistencia en la migración eficiente y segura de aplicaciones y datos a la nube, con evaluación, planificación y optimización.",
      imageUrl: servicioMigracion,
      moreLink: "/ver-mas-servicio-migracion",
    },
  ],
};
