import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
  Popover,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Favicon from "../../../src/assets/icons/favicon.ico"; // Asegúrate de que la ruta a tu favicon sea correcta
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CloudIcon from "@mui/icons-material/Cloud";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Navbar = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleMobileMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Inicio", link: "/", icon: <HomeIcon fontSize="s" /> },
    {
      text: "Quienes Somos",
      link: "/quienes-somos",
      icon: <PeopleIcon fontSize="string" />,
    },
    {
      text: "Servicios Cloud",
      link: "/servicios-ti",
      icon: <CloudIcon fontSize="string" />,
    },
    {
      text: "Soluciones Corporativas",
      link: "/soluciones-corporativas",
      icon: <WorkIcon fontSize="string" />,
    },
    {
      text: "Clientes",
      link: "/clientes",
      icon: <PersonIcon fontSize="string" />,
    },
    {
      text: "Contacto",
      link: "/contacto",
      icon: <ContactMailIcon fontSize="string" />,
    },
  ];

  const cloudServices = [
    {
      text: "Servidores Dedicados",
      link: "/ver-mas-servidor-nube",
    },
    {
      text: "Servidores VPS",
      link: "/ver-mas-servidor-vps",
    },
    {
      text: "Seguridad Perimetral",
      link: "/ver-mas-servicio-dns",
    },
    {
      text: "Central Virtual",
      link: "/ver-mas-servicio-telefonia",
    },
    {
      text: "Troncal SIP",
      link: "/ver-mas-servicio-voip",
    },
    {
      text: "Seguridad en la Nube",
      link: "/ver-mas-servicio-seguridad",
    },
    {
      text: "Migración a la Nube",
      link: "/ver-mas-servicio-migracion",
    },
    {
      text: "FlashStart",
      link: "/flashstart",
    },
    {
      text: "Redes de datos",
      link: "/redes-de-datos",
    },
  ];

  const appBarStyles = {
    backgroundColor: "#FFF",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  };

  const buttonStyles = {
    color: "black",
    margin: "0 10px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      color: "#1976d2",
      transition: "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
    },
  };

  const listItemStyles = {
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  };

  const popoverStyles = {
    ".MuiPopover-root": {
      ".MuiPaper-root": {
        borderRadius: 3,
        boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        backgroundColor: "#fff",
        marginTop: "5px",
      },
    },
    ".MuiButton-root": {
      justifyContent: "flex-start",
      padding: "10px 20px",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      color: "rgba(0, 0, 0, 0.87)",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        color: "#1976d2",
      },
      "&:not(:last-child)": {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      },
    },
  };

  return (
    <div>
      <AppBar position="fixed" sx={appBarStyles}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
            <img
              src={Favicon}
              alt="Icono"
              style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            />
            <Typography variant="h6" sx={{ color: "black" }}>
              TecnoTics
            </Typography>
          </div>
          {isMobileOrTablet ? (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          ) : (
            <div
              className="menu"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
              {menuItems.map((item, index) => (
                <Button key={index} component={Link} to={item.link} sx={buttonStyles}>
                  {item.icon}
                  {item.text}
                </Button>
              ))}
              <Button
                onMouseEnter={handlePopoverOpen}
                sx={{ color: "black", textTransform: "capitalize" }}
              >
                <MoreHorizIcon />
                Descubre Más
              </Button>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={popoverStyles}
              >
                <Box sx={{ p: 2 }}>
                  {cloudServices.map((service, index) => (
                    <Button
                      key={index}
                      component={Link}
                      to={service.link}
                      sx={{ color: "black", textTransform: "capitalize", display: "block" }}
                      onClick={handlePopoverClose}
                    >
                      {service.text}
                    </Button>
                  ))}
                </Box>
              </Popover>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleMobileMenu}>
        <br />
        <br />
        <br />
        <List style={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.link}
              onClick={toggleMobileMenu}
              sx={listItemStyles}
            >
              {item.icon}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem button onClick={handlePopoverOpen}>
            <MoreHorizIcon />
            <ListItemText primary="Descubre Más" />
          </ListItem>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={popoverStyles}
          >
            <Box sx={{ p: 2 }}>
              {cloudServices.map((service, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={service.link}
                  sx={{ color: "black", textTransform: "capitalize", display: "block" }}
                  onClick={handlePopoverClose}
                >
                  {service.text}
                </Button>
              ))}
            </Box>
          </Popover>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
