import { TextareaStyled, Wrapper } from "./styled";

export function Textarea() {
  return (
    <Wrapper>
      <TextareaStyled placeholder="Escreva sua mensagem..." />
    </Wrapper>
  );
}