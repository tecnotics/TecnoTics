import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function AcronisParcheEmpresas() {
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
                <b>Administracion de parches para empresas</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Proteja su entorno de TI con administración automatizada de
                parches
              </Typography>
              <Typography paragraph>
                Es importante mantener todos los sistemas esenciales para la
                empresa, desde estaciones de trabajo a servidores, actualizados
                con los últimos parches de software. Aunque se distribuyen con
                frecuencia nuevas correcciones para las vulnerabilidades, la
                administración de todas estas actualizaciones puede ser difícil
                y lleva mucho tiempo. Las soluciones de administración
                automatizada de parches de Acronis facilitan la protección de su
                empresa contra las últimas amenazas.
              </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Proteja su entorno de TI con administración automatizada de
                parches
              </Typography>
              <Typography paragraph>
                Cierre las brechas de las vulnerabilidades con protección
                proactiva. Todos los días se distribuyen parches para corregir
                nuevas vulnerabilidades detectadas en conocidas herramientas de
                software. Sin embargo, hasta que los parches no se instalan, en
                todos los sistemas, la empresa sigue desprotegida frente a las
                ciberamenazas más avanzadas. Las evaluaciones de
                vulnerabilidades integradas de Acronis le ayudan a identificar
                sistemas y aplicaciones que requieren actualizaciones y a
                desplegar parches fácilmente, bajo demanda o de forma
                programada, y todo mediante un único panel de uso intuitivo.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Mantenga operativos los sistemas con la aplicación de parches a
                prueba de fallos
              </Typography>
              <Typography paragraph>
                No es habitual, pero ocurre que a veces incluso los parches que
                se han probado convenientemente pueden introducir errores o
                problemas de incompatibilidad con otro software. Por eso las
                soluciones de Acronis crean automáticamente copias de seguridad
                del sistema completo antes de aplicar nuevos parches, con el fin
                de proteger los datos esenciales de la empresa y facilitar la
                reversión de los sistemas a un estado de funcionamiento
                anterior, en caso de necesidad.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Ciberprotección integral garantizada
              </Typography>
              <Typography paragraph>
                Los empleados cada vez exigen más de sus servicios de TI y es
                fácil acabar con un cóctel de herramientas diferentes que
                resulta difícil de aprender y complicado de mantener. Las
                soluciones integrales de Acronis incluyen protección antimalware
                con copia de seguridad de los datos y administración de la
                protección de endpoints. Este exclusivo enfoque elimina lagunas
                de protección y facilita una corrección fluida, sin necesidad de
                lidiar con la gestión de varias soluciones.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Acronis Cyber Protect</Typography>
              <Typography paragraph>
                Modernice su infraestructura de ciberseguridad y copia de
                seguridad con una ciberprotección integrada.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
}

export default AcronisParcheEmpresas;
