import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Characters from "../components/characters/Characters";
import CharacterDetail from "../components/characters/CharacterDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}