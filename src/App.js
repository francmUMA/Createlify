import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.js";
import Home from "./components/Home.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}
