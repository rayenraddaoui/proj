import { Link } from "react-router-dom";

function Inscrir(){
    return(
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-cyan-50 via-slate-100 to-blue-100 px-4 py-10">
                <div className="mx-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                    <h4 className="text-center text-xl font-bold text-slate-900">Creer un compte</h4>
                    <p className="mt-2 text-center text-sm text-slate-600">Veuillez remplir tous les champs</p>

                    <form method="get" className="mt-6 space-y-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Nom</label>
                            <input type="text" required title="Le nom doit avoir entre 3 et 20 lettres" pattern="[A-Za-z\s]{3,20}" placeholder="Entrez votre nom" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Prenom</label>
                            <input type="text" required placeholder="Entrez votre prenom" pattern="[A-Za-z\s]{3,20}" title="Le prenom doit avoir entre 3 et 20 lettres" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
                        </div>

                        <div>
                            <label htmlFor="add" className="mb-1 block text-sm font-medium text-slate-700">Adresse email</label>
                            <input type="email" id="add" name="add" placeholder="exemple@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Entrez un email valide" required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
                        </div>

                        <div>
                            <label htmlFor="pass" className="mb-1 block text-sm font-medium text-slate-700">Mot de passe</label>
                            <input type="password" placeholder="Mot de passe" minLength={6} id="pass" required name="pass" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
                        </div>

                        <div>
                            <label htmlFor="pass2" className="mb-1 block text-sm font-medium text-slate-700">Confirmer mot de passe</label>
                            <input type="password" placeholder="Confirmation" minLength={6} required id="pass2" name="pass2" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-1">
                            <input type="submit" value="S'inscrire" className="cursor-pointer rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700" />
                            <input type="reset" value="Supprimer" className="cursor-pointer rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200" />
                        </div>

                        <Link to="/" className="block text-center text-sm font-medium text-cyan-700 hover:underline">Retour a la connexion</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Inscrir;