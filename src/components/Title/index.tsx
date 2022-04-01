import { Heading } from "./styled";

interface TitleProps {
  children: string;
  level?: number;
  highlight?: boolean;
}

export function Title({ level, children, highlight } :TitleProps) {
  return (
    <Heading level={level} className={highlight ? 'highlight' : ''}>
      {children}
    </Heading>
  );
}