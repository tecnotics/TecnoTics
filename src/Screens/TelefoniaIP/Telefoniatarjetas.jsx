import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

import tresCX from '../../assets/images/net2phone-marcas/3cx.png'
import avaya from '../../assets/images/net2phone-marcas/avaya.png'
import cisco from '../../assets/images/net2phone-marcas/cisco.png'
import mitel from '../../assets/images/net2phone-marcas/mitel.png'
import nec from '../../assets/images/net2phone-marcas/nec.png'
import nortel from '../../assets/images/net2phone-marcas/nortel.png'
import panasonic from '../../assets/images/net2phone-marcas/panasonic.png'
import pbx from '../../assets/images/net2phone-marcas/pbx.png'
import stream from '../../assets/images/net2phone-marcas/stream.png'
import yealink from '../../assets/images/net2phone-marcas/yealink.png'

export const telefoniaIpTarjetas = [
    {
        titulo: "Activación rápida y simple",
        icono: <FastForwardOutlinedIcon sx={{fontSize: 35}}/>,
        mensaje: `La tecnología de net2phone permite una instalación rápida y fácil, sólo se requiere de una PC y una conexión a internet. Todo su flujo de llamadas está configurado en la nube, todas las extensiones, colas, grabaciones de llamadas y más. Contará con el respaldo y la asistencia de nuestro soporte técnico en todo momento.`
    },
    {
        titulo: "Funcionalidades, análisis y gestión",
        icono: <AutoGraphOutlinedIcon sx={{fontSize: 35}}/>,
        mensaje: `Con la central vitual de net2phone obtendrá funcionalidades de central telefoníca de ultima generación para una administracion de llamadas completa y poderosa. Además tendrá acceso a reportes con la informacion necesaria para tomar decisiones y mejorar el servicio de atención a sus clientes.`,
    },
    {
        titulo: "Escalable en función de su crecimiento",
        icono: <BarChartOutlinedIcon sx={{fontSize: 35}}/>,
        mensaje: `La central virtual de net2phone es una solución 100% en la nube que le perimite incrementar el número de usuarios según las necesidades de crecimiento de su negocio, ya sea planificado o no, sin necesidad de invertir en infraestructura adicional.`,
    },
    {
        titulo: "Siempre conectado e integrado",
        icono: <HubOutlinedIcon sx={{fontSize: 35}}/>,
        mensaje: `Simplemente accediendo a Internet, podrá recibir y hacer llamadas desde su PC, tablet, telefono de escritorio o smartphone. Incluso, la central virtual de net2phone cuenta con operaciones de integracion con reconocidos CRMs, Zapier y MS Teams.`,
    }
]


export const tarjetasVentajas = [
    {
        titulo: "SIP Trunking flexible, confiable y seguro",
        lista: [
            "✔️ Planes de llamadas con minutos incluidos a líneas fijas y móviles de Colombia.",
            "✔️ Disponibilidad de servicios 800.",
            "✔️ Calidad de servicio mejorada para comunicaciones de voz.",
            "✔️ Compatibilidad con entornos Hosted y SIP híbrido.",
            "✔️ Sistema de autenticación seguro y confiable.",
            "✔️ Certificado y compatible con la mayoría de IP-PBX y gateways."
        ]
    },
    {
        titulo: "¿Por qué net2phone?",
        lista: [
            "✔️ Más de 30 años de experiencia y pioneros en VoIP.",
            "✔️ Presencia global y local.",
            "✔️ Red global propia con data centers en 9 países.",
            "✔️ Más de 25 mil millones de minutos terminados por año.",
            "✔️ Soporte Premium."
        ]
    },
]


export const caracteristicas = {
        titulo: "Caracteristicas principales",
        lista: [
        "✔️ Planes con minutos incluidos a fijos y móviles de Colombia.",
        "✔️ Planes con minutos incluidos a fijos de más de 25 países.",
        "✔️ Completa administración de llamadas.",
        "✔️ Planes con teléfono IP incluido.",
        "✔️ Reportes con información detallada.",
        "✔️ Integración con Zapier.",
        "✔️ Integración con los principales CRMs y MS Teams.",
        "✔️ Softphone web & Softphone App (Android e IOS).",
        "✔️ Numeración compatible con WhatsApp Business.",
        "✔️ Videoconferencia.",
        "✔️ Grabación de llamada.",
        "✔️ IVR y más de 40 funcionalidades!"
    ]
}


export const imagenesMarcas = [
    {
        imagenes: [
            tresCX,
            avaya,
            cisco,
            mitel,
            nec
        ]
    },
    {
        imagenes: [
            nortel,
            panasonic,
            pbx,
            stream,
            yealink
        ]
    }
]
