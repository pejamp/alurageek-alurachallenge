import { Container, Image, Price, Text } from "./styled";
import { Link } from "../../components/Link";
import { Link as LinkRouter } from "react-router-dom";

interface productProps {
  id: number;
  name: string;
  banner: string;
  price: number;
  category: any;
}
interface CardProps {
  resource: productProps;
}

export function Card({ resource }: CardProps) {
  return (
    <Container>
      <Image src={resource.banner} />
      <Text>{resource.name}</Text>
      <Price>R$ {resource.price}</Price>
      <LinkRouter to={`/product/${resource.id}`} onClick={() => {window.scrollTo(0, 0)}}>
        <Link section>
          Ver produto
        </Link>
      </LinkRouter>
    </Container>
  );
}