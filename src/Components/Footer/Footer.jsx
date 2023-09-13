import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} TecnoTics
        </Typography>
        <MailOutlineIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
