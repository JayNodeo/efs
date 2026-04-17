import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Founders from "./pages/Founders";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/founders" element={<Founders />} />
    </Routes>
  );
}
