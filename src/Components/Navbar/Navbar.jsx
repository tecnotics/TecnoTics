
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    flexGrow: 1,
  };

  const titleStyle = {
    flexGrow: 1,
  };

  const buttonStyle = {
    marginLeft: "20px",
  };

  return (
    <div style={navbarStyle}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={titleStyle}>
            TEST
          </Typography>
          <Button color="inherit" style={buttonStyle} component={Link} to="/">
            Inicio
          </Button>
          <Button
            color="inherit"
            style={buttonStyle}
            component={Link}
            to="/acerca"
          >
            Acerca de
          </Button>
          <Button
            color="inherit"
            style={buttonStyle}
            component={Link}
            to="/servicios"
          >
            Servicios
          </Button>
          <Button
            color="inherit"
            style={buttonStyle}
            component={Link}
            to="/contacto"
          >
            Contacto
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
