import { Banner } from "./patterns/Banner";
import { Footer } from "./patterns/Footer";
import { Header } from "./patterns/Header";
import { SectionHeader } from "./patterns/SectionHeader";
import { Section } from "./patterns/Section";
import { Card } from "./patterns/Card";
import { GlobalStyle } from "./styles/global";
import { Container, Grid } from "./styles/home";
import bannerImg from "./assets/banner.png";

import { starwars, consoles, diversos } from "./api/data";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner backgroundImage={bannerImg} />
        <Section>
          <SectionHeader />
          <Grid>
            {starwars.map(star => <Card cardImage={star.image} />)}
          </Grid>
        </Section>
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
