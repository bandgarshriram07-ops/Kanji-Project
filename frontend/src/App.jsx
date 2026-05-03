import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanji from "./components/Kanji";
import KanjiDetails from "./components/KanjiDetails";
import EditKanji from "./components/EditKanij";
import Home from "./components/Home";
import Hiragana from "./components/Hiragana";
import Navbar from "./pages/Navbar";
import AddKanji from "./components/AddKanji.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { ProtectedRoutes } from "./components/ProtectedRoute.jsx"; 

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/kanji/:id" element={<KanjiDetails />} />
        <Route path="/kanji/:id/edit" element={<ProtectedRoutes><EditKanji /></ProtectedRoutes>} />
        <Route path="/addkanji" element={<ProtectedRoutes><AddKanji /></ProtectedRoutes>} />
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
