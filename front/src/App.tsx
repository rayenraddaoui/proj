import Formulaire from "../compante/Formulaire"
import './App.css'
import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Inscrir from "../compante/Inscrir.tsx"
import Todo from "../compante/Todo"
import Acceuil from "../compante/Acceuil"
import Calculatrice from "../compante/calculatrice"
function App() {
 

  return (
    <>
     <HashRouter>
     <Routes>
      <Route path="/" element={<Formulaire/>}/>
      <Route path="/about" element={<Inscrir/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/acceuil" element={<Acceuil/>}/>
      <Route path="/calculatrice" element={<Calculatrice/>}/>
     </Routes>
     </HashRouter>
    </>
  )
}

export default App;
