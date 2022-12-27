import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import "./App.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

function Hello() {
  return <h1>Hello FreeCodeCamp</h1>;
}
