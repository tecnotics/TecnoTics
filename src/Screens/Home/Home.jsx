import Navbar from "../../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousels/Carrousel";
import CardComponent from "../../Components/Cards/CardComponent";
import Circuito1 from "../../../src/assets/images/circuito1.jpg";
import Circuito2 from "../../../src/assets/images/circuito2.jpg";
import Circuito3 from "../../../src/assets/images/circuito3.jpg";
import { Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <div className="landing-page">
        <section className="banner-corporativo">
          <Carrousel />
        </section>
        <section className="card-section">
          <Typography variant="h4">¿Que hacemos?</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 1"
                image={Circuito1}
                description="This is the content of Card 1."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 2"
                image={Circuito2}
                description="This is the content of Card 2."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 3"
                image={Circuito3}
                description="This is the content of Card 3."
              />
            </Grid>
          </Grid>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
