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
       <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 px-4 py-10">
        <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-slate-900">Connexion</h2>
        <p className="mt-2 text-center text-sm text-slate-600">Vous avez deja un compte ?</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
                <label htmlFor="add" className="mb-1 block text-sm font-medium text-slate-700">Adresse email</label>
                <input
                    type="email"
                    id="add"
                    name="add"
                    placeholder="exemple@gmail.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Entrez un email valide"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
            </div>

            <div>
                <label htmlFor="pass" className="mb-1 block text-sm font-medium text-slate-700">Mot de passe</label>
                <input
                    type="password"
                    required
                    placeholder="Mot de passe"
                    minLength={6}
                    id="pass"
                    name="pass"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
                <input type="submit" value="Se connecter" className="cursor-pointer rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700" />
                <input type="reset" value="Supprimer" className="cursor-pointer rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200" />
            </div>

            <Link to="/about" className="block text-center text-sm font-medium text-cyan-700 hover:underline">Creer un compte</Link>
        </form>
        </div>
    </div>
        </>
    );
}
export default Formulaire;