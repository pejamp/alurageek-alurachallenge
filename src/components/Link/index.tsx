import { Wrapper } from "./styled";

interface LinkProps {
  children: any;
  goto: string | "#";
  section?: boolean;
}

export function Link({ children, goto, section }: LinkProps) {
  return (
    <Wrapper href={goto} className={section ? 'sectionLink' : ''}>
      {children}
    </Wrapper>
  );
}