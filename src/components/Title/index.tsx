import { Heading } from "./styled";

interface TitleProps {
  children: string;
  level?: number;
  highlight?: boolean;
  section?: boolean;
}

export function Title({ level, children, highlight, section } :TitleProps) {
  return (
    <Heading level={level} className={`${highlight ? 'highlight' : ''} ${section ? 'section' : ''}`}>
      {children}
    </Heading>
  );
}