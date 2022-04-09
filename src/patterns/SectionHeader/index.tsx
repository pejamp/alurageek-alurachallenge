import { Container } from "./styled";
import { ReactNode } from "react";

interface SectionHeaderProps {
  children?: ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}