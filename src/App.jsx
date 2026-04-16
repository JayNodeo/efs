import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
    </Routes>
  );
}
