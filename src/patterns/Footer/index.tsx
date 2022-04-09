import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Logo } from "../../components/Logo";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { Bottom, Box, Container, Flex, Links, Text, Top } from "./styled";

export function Footer() {
  return (
    <Container>
      <Top>
        <Flex align={"center"} className={"row"}>
          <Logo footer />
          <Links>
            <Link>Quem somos nós</Link>
            <Link>Política de privacidade</Link>
            <Link>Programa fidelidade</Link>
            <Link>Nossas lojas</Link>
            <Link>Quero ser franqueado</Link>
            <Link>Anuncie aqui</Link>
          </Links>
        </Flex>
        <Flex align={"left"} spacing={"8px"}>
          <Title level={3}>Fale conosco</Title>
          <Flex>
            <Input name="nome" type="text" placeholder="Nome" />
            <Textarea placeholder="Escreva sua mensagem..." />
          </Flex>
          <Box>
            <Button fill>Enviar mensagem</Button>
          </Box>
        </Flex>
      </Top>
      <Bottom>
        <Text>Desenvolvido por Pedro Rodrigues</Text>
        <Text>2022</Text> 
      </Bottom>
    </Container>
  );
}