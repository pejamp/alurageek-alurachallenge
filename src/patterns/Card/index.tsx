import { Container, Image, Price, Text } from "./styled";
import { Link } from "../../components/Link";
import { Link as LinkRouter } from "react-router-dom";

interface CardProps {
  cardImage: string;
}

export function Card({ cardImage }: CardProps) {
  return (
    <Container>
      <Image src={cardImage} />
      <Text>Produto XYZ</Text>
      <Price>R$ 60,00</Price>
      <LinkRouter to={"/product"} onClick={() => {window.scrollTo(0, 0)}}>
        <Link section>
          Ver produto
        </Link>
      </LinkRouter>
    </Container>
  );
}