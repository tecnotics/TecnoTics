import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function AcronisRansomware() {
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
              <b>Proteccion frente al ransomware</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">¿Qué es el ransomware?</Typography>
            <Typography paragraph>
              Ransomware es un tipo de malware especialmente dañino. El malware
              es "software malicioso o intrusivo" que se introduce de forma
              ilegítima en su sistema por motivos malintencionados. Cuando el
              ransomware infecta su sistema, bloquea el acceso a sus datos hasta
              que paga el rescate a los delincuentes que le extorsionan a usted
              o a su empresa. Es una amenaza ilícita para sus datos.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              Cómo funciona Acronis Active Protection
            </Typography>
            <Typography paragraph>
              Acronis Active Protection es una tecnología avanzada de protección
              antirransomware. Nuestra tecnología, totalmente compatible con las
              soluciones anti-malware más utilizadas, protege de forma activa
              todos los datos de sus sistemas, incluidos documentos, archivos
              multimedia, programas y mucho más, incluso sus archivos de Acronis
              Cyber Backup.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Detección de patrones</Typography>
            <Typography paragraph>
              Acronis Active Protection observa continuamente los patrones de
              cambio de los archivos de datos en un sistema. Mientras que
              algunos comportamientos serán normales y previsibles, otros pueden
              indicar la existencia de un proceso sospechoso dirigido
              maliciosamente contra algún archivo. La estrategia de Acronis
              consiste en analizar estas acciones y compararlas con patrones de
              comportamiento malicioso. Esta estrategia puede ser
              extraordinariamente útil para identificar ataques de ransomware,
              incluso de variantes todavía desconocidas.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Listas blancas y negras</Typography>
            <Typography paragraph>
              Además de amenazas conocidas, Acronis Active Protection es capaz
              de detectar nuevas amenazas basadas en patrones ya identificados.
              Los resultados deben ajustarse para reducir la detección de falsos
              positivos, es decir, elementos que en realidad no son ransomware.
              Acronis Active Protection mantiene una lista blanca —programas
              permitidos que deben actuar de una manera determinada— para evitar
              la clasificación errónea de actividades autorizadas como no
              autorizadas.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              Autodefensa de archivos de copia de seguridad
            </Typography>
            <Typography paragraph>
              Un método que los delincuentes pueden elegir para comprometer
              archivos consiste en atacar el software de copia de seguridad
              propiamente dicho para dañar los archivos que este crea. Para
              protegerle de este tipo de ataques, Acronis ha implementado un
              robusto mecanismo de autodefensa que impide a los
              ciberdelincuentes interferir en el funcionamiento de la aplicación
              de Acronis o en el contenido de los archivos de copia de
              seguridad. Además, Acronis Active Protection supervisa el registro
              de arranque maestro de los ordenadores Windows y no permite que se
              realicen cambios ilegítimos que impidan al usuario arrancar
              correctamente su ordenador.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AcronisRansomware;
