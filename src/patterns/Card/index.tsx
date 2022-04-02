import { Container, Image, Price, Text } from "./styled";
import { Link } from "../../components/Link";

interface CardProps {
  cardImage: string;
}

export function Card({ cardImage }: CardProps) {
  return (
    <Container>
      <Image src={cardImage} />
      <Text>Produto XYZ</Text>
      <Price>R$ 60,00</Price>
      <Link goto="#" section>Ver produto</Link>
    </Container>
  );
}