
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Bienvenue</h1>
          <Link to="/" className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
            Deconnexion
          </Link>
        </header>

        <main className="grid gap-4 sm:grid-cols-2">
          <Link to="/todo" className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-900">To do list</h2>
            <p className="mt-1 text-sm text-slate-600">Gerer vos taches.</p>
          </Link>

          <Link to="/calculatrice" className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-900">Calculatrice</h2>
            <p className="mt-1 text-sm text-slate-600">Faire des operations rapides.</p>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Acceuil;