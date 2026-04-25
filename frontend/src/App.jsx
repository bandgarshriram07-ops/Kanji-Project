import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanji from "./pages/Kanji";
import KanjiDetails from "./pages/KanjiDetails";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kanji" element={<Kanji />} />
        <Route path="/Kanji/:id" element={<KanjiDetails />} />
        <Route path="/hiragana" element={<Hiragana/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
