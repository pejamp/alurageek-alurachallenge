import { Banner } from "./patterns/Banner";
import { SectionHeader } from "./patterns/SectionHeader";
import { Section } from "./patterns/Section";
import { Card } from "./patterns/Card";
import { Container, Grid } from "./styles/home";
import bannerImg from "./assets/banner.png";
import arrowBlueIcon from "./assets/icons/arrow-blue.svg";

import { Title } from "./components/Title";
import { Link } from "./components/Link";
import { Icon } from "./components/Icon";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    const productsUrl = "http://localhost:3004/products";

    fetch(productsUrl)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getProducts();
  }, [])

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
          {products.map((product: any) => (product.category.id == 1 ? <Card key={product.id} resource={product} /> : null))}
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
          {products.map((product: any) => (product.category.id == 2 ? <Card key={product.id} resource={product} /> : null))}
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
          {products.map((product: any) => (product.category.id == 3 ? <Card key={product.id} resource={product} /> : null))}
        </Grid>
      </Section>
    </Container>
  );
}

export default App;
