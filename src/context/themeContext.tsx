import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#E5E5E5",
  darkBlue: "#2A7AE4",
  mediumBlue: "#5595E9",
  lightBlue: "#D4E4FA",
  white: "#FFFFFF",
  black100: "#464646",
  black50: "#A2A2A2",
};

interface ThemeProps {
  children?: ReactNode;
}

export function ThemeDefault({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
