import { Link } from "react-router-dom";
import { useState } from "react";

function Calculatrice(){
    const [display, setDisplay] = useState("0");

    const press = (value: string) => {
        if (value === "C") {
            setDisplay("0");
            return;
        }

        if (value === "=") {
            try {
                const result = String(Function(`"use strict"; return (${display})`)());
                setDisplay(result);
            } catch {
                setDisplay("Erreur");
            }
            return;
        }

        if (display === "0" || display === "Erreur") {
            setDisplay(value);
            return;
        }

        setDisplay((prev) => prev + value);
    };

    return(
<>
<div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 px-4 py-10">
<div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
    <div className="mb-4 rounded-xl border border-slate-200 bg-slate-900 px-4 py-5 text-right text-3xl font-semibold text-white">
        {display}
    </div>

    <main className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((value) => (
            <button
                key={value}
                onClick={() => press(value)}
                className={[
                    "rounded-lg px-3 py-3 font-semibold transition",
                    value === "=" ? "bg-cyan-600 text-white hover:bg-cyan-700" : "bg-slate-100 text-slate-900 hover:bg-slate-200",
                ].join(" ")}
            >
                {value}
            </button>
        ))}
        <button onClick={() => press("C")} className="col-span-4 rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-600">
            Clear
        </button>
    </main>
</div>
<Link to="/" className="mx-auto mt-5 block w-fit rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">Deconnexion</Link>
</div>
</>
    );
}
export default Calculatrice;