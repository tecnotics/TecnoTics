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

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", link: "/" },
    { text: "Outsourcing", link: "/acerca" },
    { text: "Servicios", link: "/servicios" },
    { text: "Soluciones", link: "/soluciones" },
  ];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#007bff" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            TecnoTics
          </Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div className="desktop-menu">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={item.link}
                  sx={{ color: "white" }}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            sx={{ width: 250, backgroundColor: "#007bff" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.link}
                  onClick={toggleDrawer(false)}
                >
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

