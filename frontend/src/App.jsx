import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanji from "./components/Kanji";
import KanjiDetails from "./components/KanjiDetails";
import EditKanji from "./components/EditKanij";
import Home from "./components/Home";
import DeleteKanji from "./components/DeleteButton";
import Hiragana from "./components/Hiragana";
import Katakana from "./components/Katakana";
import Navbar from "./pages/Navbar";
import AddKanji from "./components/Addkanji";
import Register from "./components/Register";
import Login from "./components/Login";
import LogoutUser from "./components/LogoutUser";
import { ProtectedRoutes } from "./components/ProtectedRoute"; 
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <BrowserRouter >
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/kanji/:id" element={<KanjiDetails />} />
        <Route path="/kanji/:id/edit" element={<EditKanji />} />
        <Route path="/addkanji" element={<ProtectedRoutes><AddKanji /></ProtectedRoutes>} />
        <Route path="/kanji/:id/delete" element={<ProtectedRoutes><DeleteKanji/></ProtectedRoutes>} />
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/katakana" element={<Katakana/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<LogoutUser/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
