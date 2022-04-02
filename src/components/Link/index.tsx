import { Wrapper } from "./styled";

interface LinkProps {
  children: string;
  goto: string;
  section?: boolean;
}

export function Link({ children, goto, section }: LinkProps) {
  return (
    <Wrapper href={goto} className={section ? 'sectionLink' : ''}>
      {children}
    </Wrapper>
  );
}