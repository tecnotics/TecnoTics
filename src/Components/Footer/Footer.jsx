import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const footerStyle = {
    backgroundColor: "#00214E",
    color: "#fff",
    padding: "20px",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const iconStyle = {
    marginRight: "8px",
    verticalAlign: "middle",
  };

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
  };

  const linkStyle = {
    textDecoration: "none", 
    color: "#fff", 
  };

  const copyrightStyle = {
    textAlign: "center",
  };

  return (
    <AppBar position="static" style={footerStyle}>
      <Toolbar style={gridContainer}>
        <div>
          <Typography variant="body1" style={sectionStyle}>
            <RoomIcon style={iconStyle} />
            <strong>Dirección</strong>
            <br />
            Carrera 43c 7d 37-El Poblado-Medellín
          </Typography>
          <Typography variant="body1" style={sectionStyle}>
            <PhoneIcon style={iconStyle} />
            <strong>Teléfono</strong>
            <br />
            +57 (4) 4310101
          </Typography>
        </div>
        <div>
          <Typography variant="body1" style={sectionStyle}>
            <EmailIcon style={iconStyle} />
            <strong>Correo Electrónico</strong>
            <br />
            info@tecnotics.com
          </Typography>
          <Typography variant="body1" style={sectionStyle}>
            <AccessTimeIcon style={iconStyle} />
            <strong>Horarios de Atención</strong>
            <br />
            Lunes a Viernes: 7:30 a.m. - 6 p.m.
          </Typography>
        </div>
        <div>
          <Typography variant="body1" style={sectionStyle}>
            <strong>Redes Sociales</strong>
            <br />
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <FacebookIcon style={iconStyle} />
              Facebook
            </a>
            <br />
            <a
              href="https://twitter.com/TecnoTics_"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <TwitterIcon style={iconStyle} />
              Twitter
            </a>
            <br />
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <LinkedInIcon style={iconStyle} />
              LinkedIn
            </a>
            <br />
            <a
              href="https://www.instagram.com/tecnotics_/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <InstagramIcon style={iconStyle} />
              Instagram
            </a>
          </Typography>
        </div>
      </Toolbar>
      <Typography variant="body1" style={copyrightStyle}>
        <strong>Derechos de Autor</strong>
        <br /> © {new Date().getFullYear()} TecnoTics. Todos los derechos
        reservados.
      </Typography>
    </AppBar>
  );
}

export default Footer;
