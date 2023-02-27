import {
  CashRegister,
  CaesarsCipher,
  Home,
  PalindromeChecker,
  RomanConverter,
  TelephoneValidator,
} from "pages";
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
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/freecodecamp-javascript-projects" element={<Home />} />
        <Route path="/palindrome-checker" element={<PalindromeChecker />} />
        <Route path="/roman-numeral-converter" element={<RomanConverter />} />
        <Route path="/caesars-cipher" element={<CaesarsCipher />} />
        <Route
          path="/telephone-number-validator"
          element={<TelephoneValidator />}
        />
        <Route path="/cash-register" element={<CashRegister />} />
      </Switch>
    </BrowserRouter>
  );
};
