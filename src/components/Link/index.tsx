import { Wrapper } from "./styled";

interface LinkProps {
  children: string;
  goto: string;
}

export function Link({ children, goto }: LinkProps) {
  return (
    <Wrapper href={goto}>
      {children}
    </Wrapper>
  );
}