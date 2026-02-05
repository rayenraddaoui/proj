import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
function Formulaire(){
    const navigate = useNavigate(); 
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    navigate("/acceuil");
  };
    return(
        <>
       <div className="bo">
        <div  className="bo">
        <h2>vous avez deja un compte?? </h2>
        <form  onSubmit={handleSubmit} >
            <table>
                <tr>
                    <td><label >address:</label></td>
                    <td><input type="email" 
                        id="add" name="add" placeholder=".....@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
       title="Entrez un email valide" required/></td>
                </tr>
                <tr>
                    <td><label >password:</label></td>
                    <td><input type="password" required placeholder="Mot de passe"  minLength={6} id="pass" name="pass"/></td>
                </tr>
                <tr>
                    <td><input  type="submit"  value="se connecter" /></td>
                    <td><input  type="reset" value="supprimer"/></td>
                </tr>

            </table>
            <hr />
          <Link id="lien" to="/about"> go to inscrir</Link>           
            
        </form>
        </div >
    </div>
        </>
    );
}
export default Formulaire;