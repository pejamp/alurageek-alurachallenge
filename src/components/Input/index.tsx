import { InputStyled, LabelStyled, Wrapper } from "./styled";

export function Input() {
  return (
    <Wrapper>
      <InputStyled placeholder="Escreva seu nome..." id="name" />
      <LabelStyled htmlFor="name" className="labelClass">Nome</LabelStyled>
    </Wrapper>
  );
}