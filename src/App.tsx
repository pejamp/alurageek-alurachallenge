import { Banner } from "./patterns/Banner";
import { SectionHeader } from "./patterns/SectionHeader";
import { Section } from "./patterns/Section";
import { Card } from "./patterns/Card";
import { Container, Grid } from "./styles/home";
import bannerImg from "./assets/banner.png";
import arrowBlueIcon from "./assets/icons/arrow-blue.svg";

import { starwars, consoles, diversos } from "./api/data";
import { Title } from "./components/Title";
import { Link } from "./components/Link";
import { Icon } from "./components/Icon";

function App() {
  return (
    <Container>
      <Banner backgroundImage={bannerImg} />
      <Section id="starwars">
        <SectionHeader>
          <Title level={2} section>Star Wars</Title>
          <Link section>
            Ver tudo
            <Icon icon={arrowBlueIcon} />
          </Link>  
        </SectionHeader>
        <Grid>
          {starwars.map((star, index) => <Card key={index} cardImage={star.image} />)}
        </Grid>
      </Section>
      <Section id="consoles">
        <SectionHeader>
          <Title level={2} section>Consoles</Title>
          <Link section>
            Ver tudo
            <Icon icon={arrowBlueIcon} />
          </Link>  
        </SectionHeader>
        <Grid>
          {consoles.map((console, index) => <Card key={index} cardImage={console.image} />)}
        </Grid>
      </Section>
      <Section id="diversos">
        <SectionHeader>
          <Title level={2} section>Diversos</Title>
          <Link section>
            Ver tudo
            <Icon icon={arrowBlueIcon} />
          </Link>  
        </SectionHeader>
        <Grid>
          {diversos.map((diverso, index) => <Card key={index} cardImage={diverso.image} />)}
        </Grid>
      </Section>
    </Container>
  );
}

export default App;
