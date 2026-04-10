import { Link } from "react-router-dom";

function Inscrir() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_15%,#bae6fd_0,#ffffff00_35%),radial-gradient(circle_at_85%_85%,#67e8f9_0,#ffffff00_30%)]" />
      <div className="relative mx-auto w-full max-w-lg rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
        <h4 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">Creer un compte</h4>
        <p className="mt-2 text-center text-sm text-slate-600">Veuillez remplir tous les champs.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Nom</label>
            <input
              type="text"
              required
              placeholder="Entrez votre nom"
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Prenom</label>
            <input
              type="text"
              required
              placeholder="Entrez votre prenom"
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label htmlFor="add" className="mb-1 block text-sm font-medium text-slate-700">Adresse email</label>
            <input
              type="email"
              id="add"
              name="add"
              placeholder="exemple@gmail.com"
              required
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label htmlFor="pass" className="mb-1 block text-sm font-medium text-slate-700">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              minLength={6}
              id="pass"
              required
              name="pass"
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label htmlFor="pass2" className="mb-1 block text-sm font-medium text-slate-700">Confirmer mot de passe</label>
            <input
              type="password"
              placeholder="Confirmation"
              minLength={6}
              required
              id="pass2"
              name="pass2"
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <input
              type="submit"
              value="S'inscrire"
              className="cursor-pointer rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            />
            <input
              type="reset"
              value="Supprimer"
              className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
            />
          </div>

          <Link to="/" className="block text-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 hover:underline">
            Retour a la connexion
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Inscrir;
