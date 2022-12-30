import { Home } from "pages/Home";
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
        <Route path="*" element={<Navigate to={"/"} />} />
      </Switch>
    </BrowserRouter>
  );
};
