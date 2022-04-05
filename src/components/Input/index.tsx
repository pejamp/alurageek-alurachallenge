import { InputStyled, LabelStyled, Wrapper } from "./styled";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
}

export function Input(props: InputProps) {
  return (
    <Wrapper>
      <InputStyled id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} />
      <LabelStyled htmlFor={props.name} className="labelClass">{props.name}</LabelStyled>
    </Wrapper>
  );
}