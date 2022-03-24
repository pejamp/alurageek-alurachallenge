import { Box } from "./styled";

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return <Box>{children}</Box>;
}
