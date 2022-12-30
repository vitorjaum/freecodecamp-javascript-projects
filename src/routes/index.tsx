import { Home, PalindromeChecker } from "pages";
import {
  Routes as Switch,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="palindrome-checker" element={<PalindromeChecker />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Switch>
    </BrowserRouter>
  );
};
