import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Carrousel from "../../Components/Carrousels/Carrousel";
import CardComponent from "../../Components/Cards/CardComponent";

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="banner-corporativo">
          <Carrousel />
        </section>
        <section className="card-section">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 1"
                image="../../../src/assets/images/circuito1.jpg"
                description="This is the content of Card 1."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 2"
                image="../../../src/assets/images/circuito2.jpg"
                description="This is the content of Card 2."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardComponent
                title="Card 3"
                image="../../../src/assets/images/circuito3.jpg"
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
