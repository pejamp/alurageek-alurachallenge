import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Bottom, Container, Flex, Links, Text, Top } from "./styled";

export function Footer() {
  return (
    <Container>
      <Top>
        <Flex>
          <Logo footer />
          <Links>
            <Link goto="#">Quem somos nós</Link>
            <Link goto="#">Política de privacidade</Link>
            <Link goto="#">Programa fidelidade</Link>
            <Link goto="#">Nossas lojas</Link>
            <Link goto="#">Quero ser franqueado</Link>
            <Link goto="#">Anuncie aqui</Link>
          </Links>
        </Flex>
        <Input />
      </Top>
      <Bottom>
        <Text>Desenvolvido por Pedro Rodrigues</Text>
        <Text>2022</Text> 
      </Bottom>
    </Container>
  );
}