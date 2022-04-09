import { Heading } from "./styled";

interface TitleProps {
  children: string;
  level?: number;
  highlight?: boolean;
  section?: boolean;
  product?: boolean;
}

export function Title({ level, ...props } :TitleProps) {
  return (
    <Heading 
      level={level} 
      className={`${props.highlight ? 'highlight' : ''} 
                  ${props.section ? 'section' : ''}
                  ${props.product ? 'product' : ''}
                  `
                }
    >
      {props.children}
    </Heading>
  );
}