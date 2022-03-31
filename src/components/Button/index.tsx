import { Box } from "./styled";

interface ButtonProps {
  children: string;
  fill?: boolean;
}

export function Button({ children, fill }: ButtonProps) {
  return (
    <Box className={fill ? 'fill' : ''}>
      {children}
    </Box>
  );
}
