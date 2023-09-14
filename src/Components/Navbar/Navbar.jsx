import { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import CloudIcon from "@mui/icons-material/Cloud";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Navbar() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMobileMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Inicio", link: "/", icon: <HomeIcon /> },
    { text: "Quienes Somos", link: "/quienes-somos", icon: <PeopleIcon /> },
    { text: "Outsourcing TI", link: "/outsourcing-ti", icon: <BusinessIcon /> },
    { text: "Servicios Nube", link: "/servicios-nube", icon: <CloudIcon /> },
    {
      text: "Soluciones Corporativas",
      link: "/soluciones-corporativas",
      icon: <WorkIcon />,
    },
    {
      text: "Clientes",
      link: "/clientes",
      icon: <PersonIcon />,
    },
    {
      text: "Contacto",
      link: "/contacto",
      icon: <ContactMailIcon />,
    },
  ];

  const renderMenu = () => {
    return (
      <div className="menu">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            component={Link}
            to={item.link}
            sx={{
              color: "black",
              margin: "0 0px",
              fontSize: "15px",
              textTransform: "capitalize",
              "&:hover": {
                color: "#007acc",
              },
            }}
          >
            <span
              style={{
                marginRight: "4px",
              }}
            >
              {item.icon}
            </span>
            {item.text}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#FFF" }}>
        <Toolbar>
          <img
            src="../../../src/assets/images/favicom.png"
            alt="Icono"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "5px",
            }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            TecnoTics
          </Typography>
          {isMobileOrTablet ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          ) : (
            renderMenu()
          )}
        </Toolbar>
      </AppBar>
      {isMobileOrTablet && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleMobileMenu}>
          <div
            role="presentation"
            onClick={toggleMobileMenu}
            onKeyDown={toggleMobileMenu}
            style={{ width: 250 }}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.link}
                  onClick={toggleMobileMenu}
                >
                  <span
                    style={{
                      marginRight: "5px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
