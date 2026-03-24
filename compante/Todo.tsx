import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Todo(){
    const inputRef=useRef<HTMLInputElement>(null);
     const [todol,setTodol]=useState<string[]>([]);
     const addTodo =()=>{
        if (inputRef.current && inputRef.current.value.trim() !== "") {
           inputRef.current.focus();
        setTodol([...todol,inputRef.current.value]);
        inputRef.current.value="";
     }}

 const supptodol = (index: number) => {
  const newTodos: string[] = [];
  for (let i = 0; i < todol.length; i++) {
    if (i !== index) {
      newTodos.push(todol[i]);
    }
  }

  setTodol(newTodos);
};

    return(
        <>
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Mes taches</h1>
        <Link to="/acceuil" className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
          Retour
        </Link>
      </div>

      <div className="flex gap-2">
        <input type="text" placeholder="Ecrire votre tache..." ref={inputRef} className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200" />
        <button onClick={addTodo} className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700">Ajouter</button>
      </div>

      <ul className="mt-5 space-y-2">
       {todol.map((todo, index) => (
        <li key={index} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
        <span className="text-sm text-slate-800">{todo}</span>
        <button onClick={()=>supptodol(index)} className="rounded-md bg-rose-500 px-2 py-1 text-xs font-semibold text-white hover:bg-rose-600">Supp</button>
        </li>
      ))}
      </ul>

      {todol.length === 0 ? <p className="mt-4 text-sm text-slate-500">Aucune tache.</p> : null}
        </div>
      </div>
        </>
        
    );
}
export default Todo;