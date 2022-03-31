import { Heading } from "./styled";

interface TitleProps {
  children: string;
  level?: number;
}

export function Title({ level, children } :TitleProps) {
  return (
    <Heading level={level}>
      {children}
    </Heading>
  );
}