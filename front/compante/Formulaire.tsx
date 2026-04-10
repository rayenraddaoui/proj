import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
function Formulaire(){
    const navigate = useNavigate(); 
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
    navigate("/acceuil");
  };
    return(
        <>
       <div className="relative min-h-screen w-full overflow-hidden px-4 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_25%_20%,#a5f3fc_0,#ffffff00_38%),radial-gradient(circle_at_80%_80%,#7dd3fc_0,#ffffff00_35%)]" />
        <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">Connexion</h2>
        <p className="mt-2 text-center text-sm text-slate-600">Connectez-vous pour acceder a votre espace.</p>

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
                    className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
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
                    className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
                <input type="submit" value="Se connecter" className="cursor-pointer rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800" />
                <input type="reset" value="Supprimer" className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100" />
            </div>

            <Link to="/about" className="block text-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 hover:underline">Creer un compte</Link>
        </form>
        </div>
    </div>
        </>
    );
}
export default Formulaire;