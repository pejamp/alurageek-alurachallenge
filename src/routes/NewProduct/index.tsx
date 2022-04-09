import { Button } from "../../components/Button";
import { DropzoneImage } from "../../components/DragAndDropImage";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { Container } from "./styled";

export function NewProduct() {
  return (
    <Container>
      <Title level={1} section>Adicionar novo produto</Title>
      <DropzoneImage />
      <Input name="product" type="text" placeholder="Nome do produto" />
      <Input name="price" type="number" placeholder="Preço do produto" />
      <Textarea placeholder="Descrição do produto"></Textarea>
      <Button fill>Adicionar produto</Button>
    </Container>
  );
}