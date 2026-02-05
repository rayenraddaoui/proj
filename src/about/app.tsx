

function Inscrir(){
    
    return(<>
    <div  className="bo">
        <div  className="bo">
<h4> veuillez remplir tout les champs</h4>
<form  method="get">
 <table>
        <tr>
            <th><label htmlFor="">votre nom:</label></th>
            <th><input type="text" required title="Le nom doit avoir entre 3 et 20 lettres" pattern="[A-Za-z\s]{3,20}" placeholder="Entrez votre nom" /></th>
        </tr>
        <tr>
            <th><label htmlFor="">prenom:</label></th>
            <th><input type="text" required placeholder="Entrez votre prenom" pattern="[A-Za-z\s]{3,20}" title="Le prenom doit avoir entre 3 et 20 lettres"/></th>
        </tr>
          <tr>
                    <td><label >address:</label></td>
                    <td><input type="email" 
                        id="add" name="add" placeholder=".....@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
       title="Entrez un email valide" required/></td>
                </tr>
                <tr>
                    <td><label >password:</label></td>
                    <td><input type="password" placeholder="Mot de passe" minLength={6} id="pass" required name="pass"/></td>
                </tr>
                <tr>
                    <td><label > confirmer password:</label></td>
                    <td><input type="password" placeholder="confirmation Mot de passe" minLength={6} required id="pass2" name="pass2"/></td>
                </tr>
                <tr>
                    
                    <td><input  type="submit"   value="se connecter" /></td>
                    <td><input  type="reset" value="supprimer"/></td>
                </tr>
 </table>
 </form>
 </div>
 </div>
 </>
    );
}
export default Inscrir;