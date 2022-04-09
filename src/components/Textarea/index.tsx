import { TextareaStyled, Wrapper } from "./styled";

interface TextareaProps {
  placeholder?: string;
}

export function Textarea({ placeholder }: TextareaProps) {
  return (
    <Wrapper>
      <TextareaStyled placeholder={placeholder} />
    </Wrapper>
  );
}