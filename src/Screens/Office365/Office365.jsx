import { Container, Typography, Grid, Paper } from "@mui/material";

const Office365 = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Página de Office 365
      </Typography>

      <Typography variant="h4" gutterBottom>
        Sección 1: Introducción
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        ullamcorper metus nec justo bibendum, at finibus sapien congue. Duis eu
        hendrerit est. Nulla facilisi.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Sección 2: Características
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h6">Colaboración en línea</Typography>
            <Typography variant="body2">
              Office 365 permite la colaboración en línea en tiempo real en
              documentos y hojas de cálculo.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h6">Almacenamiento en la nube</Typography>
            <Typography variant="body2">
              Almacena tus archivos en la nube con OneDrive para acceder a ellos
              desde cualquier lugar.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom>
        Sección 3: Precios
      </Typography>
      <Typography variant="body1">
        Consulta nuestro sitio web para obtener información actualizada sobre
        los precios y planes de Office 365.
      </Typography>
    </Container>
  );
};

export default Office365;
