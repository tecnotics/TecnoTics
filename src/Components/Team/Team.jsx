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
import avatar5 from "../../assets/images/profile-pic5.png";
import avatar6 from "../../assets/images/profile-pic6.jpg";

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Alejandro Martinez",
      avatarUrl: avatar1,
      position: "Director TI",
      info: "Alejandro tiene más de 10 años de experiencia en la gestión de proyectos y liderazgo de equipos.",
    },
    {
      name: "Daniel León",
      avatarUrl: avatar5,
      position: "Desarrollador de Software",
      info: "Daniel tiene  3 años de experiencia siendo desarrollador bajo MERN.",
    },
    {
      name: "Danilo Tabares",
      avatarUrl: avatar2,
      position: "Analista de Infraestructura",
      info: "Danilo es un Analista con experiencia en ...",
    },
    {
      name: "Jaime Durango",
      avatarUrl: avatar4,
      position: "Analista de Soporte",
      info: "Jaime es un experto en Soporte TI.",
    },
    // {
    //   name: "Samuel Vasquez",
    //   avatarUrl: avatar6,
    //   position: "Desarrollador de Software",
    //   info: "Samuel tiene  3 años de experiencia siendo desarrollador bajo MERN.",
    // },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const modalStyle = {
    maxWidth: "80%", 
    margin: "auto",
    marginTop: "10vh", 
    textAlign: "center",
    backgroundColor: "white", 
    borderRadius: "8px",
    padding: "15px"
  };

  const avatarStyle = {
    width: "100%",
    maxWidth: "250px", 
    height: "auto",
    margin: "0 auto",
  };

  return (
    <div>
      <Typography variant="h5" style={{textAlign: "center"}} gutterBottom>
        <b>Nuestro Equipo</b>
      </Typography>
      <br />
      <Grid container spacing={4} sx={{}}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(member)}
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
                    <b>{member.name}</b>
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
          <Typography variant="subtitle1">{selectedMember?.position}</Typography>
          <Typography variant="body2">{selectedMember?.info}</Typography>
        </div>
      </Modal>
    </div>
  );
}

export default Team;
