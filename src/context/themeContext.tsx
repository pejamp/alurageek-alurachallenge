import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#E5E5E5",
  darkBlue: "#2A7AE4",
  mediumBlue: "#5595E9",
  lightBlue: "#D4E4FA",
  superLightBlue: "#EAF2FD",
  white: "#FFFFFF",
  black100: "#464646",
  black50: "#A2A2A2",
  black30: "#C8C8C8",
  black05: "#F5F5F5",
};

interface ThemeProps {
  children?: ReactNode;
}

export function ThemeDefault({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
