import Formulaire from "../compante/Formulaire"
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscrir from "./about/app";
import Todo from "../compante/Todo"
import Acceuil from "../compante/Acceuil"
import Calculatrice from "../compante/calculatrice"
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Formulaire/>}/>
      <Route path="/about" element={<Inscrir/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/acceuil" element={<Acceuil/>}/>
      <Route path="/calculatrice" element={<Calculatrice/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
