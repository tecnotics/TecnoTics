import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function AcronisSectorPublico() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">
              <b>Sector público y Administracion (Acronis SCS)</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AcronisSectorPublico;
