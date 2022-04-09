import { Wrapper } from "./styled";

interface LinkProps {
  children: any;
  section?: boolean;
}

export function Link({ children, section }: LinkProps) {
  return (
    <Wrapper className={section ? 'sectionLink' : ''}>
      {children}
    </Wrapper>
  );
}