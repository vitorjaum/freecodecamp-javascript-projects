import { ThemeProvider } from "styled-components";

const primaryColor = "#2a2a40";

const theme = {
  colors: {
    primaryColor,
  },
};

export type ThemeType = typeof theme;

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
