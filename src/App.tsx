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
    <Container>
      <Banner backgroundImage={bannerImg} />
      <Section>
        <SectionHeader name="Star Wars" linkHref="#" />
        <Grid>
          {starwars.map((star, index) => <Card key={index} cardImage={star.image} />)}
        </Grid>
      </Section>
      <Section>
        <SectionHeader name="Consoles" linkHref="#" />
        <Grid>
          {consoles.map((console, index) => <Card key={index} cardImage={console.image} />)}
        </Grid>
      </Section>
      <Section>
        <SectionHeader name="Diversos" linkHref="#" />
        <Grid>
          {diversos.map((diverso, index) => <Card key={index} cardImage={diverso.image} />)}
        </Grid>
      </Section>
    </Container>
  );
}

export default App;
