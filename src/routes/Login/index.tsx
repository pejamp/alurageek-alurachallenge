import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Box, Container } from "./styled";

export function Login() {
  return (
    <Container>
      <Title>Iniciar Sessão</Title>
      <Input name="email" type="email" placeholder="email" />
      <Input name="senha" type="password" placeholder="senha" />
      <Box>
        <Button fill>Entrar</Button>
      </Box>
    </Container>
  );
}