import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kanji from './pages/Kanji'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Kanji" element={<Kanji />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
