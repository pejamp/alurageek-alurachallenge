import { Container, Grid, Highlight, Image, Info, Price, Text } from "./styled";
import { Title } from "../../components/Title";
import { Section } from "../../patterns/Section";
import { SectionHeader } from "../../patterns/SectionHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface productProps {
  id: number;
  name: string;
  banner: string;
  price: number;
  category: any;
}

export function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<productProps>({} as productProps);

  function getProduct() {
    const productUrl = `http://localhost:3004/products/${id}`;

    fetch(productUrl)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <Container>
      <Highlight>
        <Image src={product.banner} />
        <Info>
          <Title level={1} product>{product.name}</Title>
          <Price>R$ {product.price}</Price>
          <Text>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</Text>
        </Info>
      </Highlight>
      <Section>
        <SectionHeader>
          <Title level={2} section>Produtos similares</Title>
        </SectionHeader>
        <Grid>
          
        </Grid>
      </Section>
    </Container>
  );
}

//{starwars.map((star, index) => <Card key={index} cardImage={star.image} />)}