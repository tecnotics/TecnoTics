import  { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import avatar1 from "../../assets/images/profile-pic.png";
import avatar2 from "../../assets/images/profile-pic2.png";
import avatar3 from "../../assets/images/profile-pic3.png";
import avatar4 from "../../assets/images/profile-pic4.png";

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Alejandro Martinez",
      avatarUrl: avatar1,
      position: "Gerente de Proyectos",
      info: "Alejandro tiene más de 10 años de experiencia en la gestión de proyectos y liderazgo de equipos.",
    },
    {
      name: "Danilo Tabares",
      avatarUrl: avatar2,
      position: "Desarrollador Senior",
      info: "Danilo es un desarrollador con experiencia en tecnologías web y móviles.",
    },
    {
      name: "Sebastian Ocampo",
      avatarUrl: avatar3,
      position: "Diseñador Gráfico",
      info: "Sebastian es un diseñador con una sólida experiencia en diseño de interfaces de usuario.",
    },
    {
      name: "Jaime Durango",
      avatarUrl: avatar4,
      position: "Especialista en Marketing",
      info: "Jaime es un experto en marketing digital con un historial comprobado de éxitos en campañas publicitarias.",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const modalStyle = {
    maxWidth: "80%", // Ancho máximo del modal
    margin: "auto",
    marginTop: "10vh", // Margen superior para centrar verticalmente
    textAlign: "center",
    backgroundColor: "white", // Fondo blanco
    padding: "20px", // Aumenta el espacio alrededor del contenido
    borderRadius: "8px", // Agrega esquinas redondeadas
  };

  const avatarStyle = {
    width: "100%",
    maxWidth: "250px", // Ancho máximo de la foto
    height: "auto", // Altura ajustada automáticamente para mantener la relación de aspecto
    margin: "0 auto",
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Nuestro Equipo
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(member)} // Agregar evento onClick para abrir el modal
              style={{ cursor: "pointer" }}
            >
              <Card>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      alt={member.name}
                      src={member.avatarUrl}
                      variant="circular"
                      sx={{ width: 200, height: 200 }}
                    />
                  </div>
                  <Typography variant="subtitle1" align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {/* Modal */}
      <Modal open={Boolean(selectedMember)} onClose={closeModal}>
        <div style={modalStyle}>
          <Avatar
            alt={selectedMember?.name}
            src={selectedMember?.avatarUrl}
            variant="circular"
            style={avatarStyle}
          />
          <Typography variant="h6">{selectedMember?.name}</Typography>
          <Typography variant="subtitle1">
            {selectedMember?.position}
          </Typography>
          <Typography variant="body2">{selectedMember?.info}</Typography>
        </div>
      </Modal>
    </div>
  );
}

export default Team;
