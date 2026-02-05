
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div className="bo">
      <header>
        <Link to="/todo">To do list</Link>
        <Link to="/calculatrice">Calculatrice</Link>
      </header>
      
      <main>
       
        <h1>Bienvenue dans votre compte</h1> 
      </main>

      <Link id="lien" to="/">Déconnexion</Link>
    </div>
  );
}

export default Acceuil;