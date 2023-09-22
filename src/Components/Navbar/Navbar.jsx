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
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Favicon from "../../../src/assets/icons/favicon.ico";
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
    { text: "Inicio", link: "/", icon: <HomeIcon fontSize="s" /> },
    {
      text: "Quienes Somos",
      link: "/quienes-somos",
      icon: <PeopleIcon fontSize="string" />,
    },
    {
      text: "Outsourcing TI",
      link: "/outsourcing-ti",
      icon: <BusinessIcon fontSize="string" />,
    },
    {
      text: "Servicios Nube",
      link: "/servicios-nube",
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

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFF",
          zIndex: theme.zIndex.drawer + 1,
          marginBottom: "20px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Favicon}
              alt="Icono"
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "5px",
              }}
            />
            <Typography variant="h6" sx={{ color: "black" }}>
              TecnoTics
            </Typography>
          </div>
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
            <div className="menu">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  sx={{
                    color: "black",
                    margin: "0 0px",
                    fontSize: "13px",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "#007acc",
                    },
                  }}
                >
                  <span
                    style={{
                      marginRight: "4px",
                      fontSize: "small",
                      verticalAlign: "middle",
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: isMobileOrTablet ? "64px" : "0" }}></div>
      {isMobileOrTablet && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleMobileMenu}>
          <div
            role="presentation"
            onClick={toggleMobileMenu}
            onKeyDown={toggleMobileMenu}
            style={{ width: 250 }}
          >
            <br />
            <br />
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
