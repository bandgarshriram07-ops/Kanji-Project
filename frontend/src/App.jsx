import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanji from "./components/Kanji";
import KanjiDetails from "./components/KanjiDetails";
import EditKanji from "./components/EditKanji";
import Home from "./components/Home";
import Hiragana from "./components/Hiragana";
import Navbar from "./pages/Navbar";
import AddKanji from "./components/Addkanji.jsx";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/kanji/:id" element={<KanjiDetails />} />
        <Route path="/kanji/:id/edit" element={<EditKanji />} />
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/addkanji" element={<AddKanji/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
