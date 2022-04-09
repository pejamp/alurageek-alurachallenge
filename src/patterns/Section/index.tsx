import { ReactNode } from "react";
import { Container } from "./styled";

interface SectionProps {
  children?: ReactNode;
  id?: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <Container id={id}>
      {children}
    </Container>
  );
}