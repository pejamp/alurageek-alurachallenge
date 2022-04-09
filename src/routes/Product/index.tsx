import { Container, Grid, Highlight, Image, Info, Price, Text } from "./styled";
import stormImg from "../../assets/stormtrooper-mug.jpg";
import { Title } from "../../components/Title";
import { Section } from "../../patterns/Section";
import { starwars } from "../../api/data";
import { SectionHeader } from "../../patterns/SectionHeader";
import { Link } from "../../components/Link";
import { Card } from "../../patterns/Card";

export function Product() {
  return (
    <Container>
      <Highlight>
        <Image src={stormImg} />
        <Info>
          <Title level={1} product>Produto XYZ</Title>
          <Price>R$ 60,00</Price>
          <Text>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</Text>
        </Info>
      </Highlight>
      <Section>
        <SectionHeader>
          <Title level={2} section>Produtos similares</Title>
        </SectionHeader>
        <Grid>
          {starwars.map((star, index) => <Card key={index} cardImage={star.image} />)}
        </Grid>
      </Section>
    </Container>
  );
}