import { HashLink } from 'react-router-hash-link';
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Background, Box, Description, Text } from "./styled";

interface BannerProps {
  backgroundImage?: string;
}

export function Banner({ backgroundImage }: BannerProps) {
  return (
    <Background image={backgroundImage}>
      <Description>
        <Title level={1} highlight>Dezembro Promocional</Title>
        <Text>Produtos selecionados com 33% de desconto</Text>
        <Box>
          <HashLink to={'#consoles'} smooth>
            <Button fill>Ver Consoles</Button>
          </HashLink>
        </Box>
      </Description>
    </Background>
  );
}