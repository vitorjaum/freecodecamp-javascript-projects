import { Routes } from "./routes";
import "./App.css";
import { GlobalStyles, Theme } from "themes";

export const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
};
