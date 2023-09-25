import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import avatar1 from "../../assets/images/profile-pic.png";
import avatar2 from "../../assets/images/profile-pic2.png";
import avatar3 from "../../assets/images/profile-pic3.png";
import avatar4 from "../../assets/images/profile-pic4.png";

function Team() {
  const teamMembers = [
    {
      name: "Miembro 1",
      avatarUrl: avatar1,
    },
    {
      name: "Miembro 2",
      avatarUrl: avatar2,
    },
    {
      name: "Miembro 3",
      avatarUrl: avatar3,
    },
    {
      name: "Miembro 3",
      avatarUrl: avatar4,
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Nuestro Equipo
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Avatar
              alt={member.name}
              src={member.avatarUrl}
              variant="circular"
              sx={{ width: 200, height: 200, gap: "20px" }}
            />
            <Typography variant="subtitle1" align="center">
              {member.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Team;
