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
        <div id="lis">
        <Link  to="/acceuil" style={{ color: '#667eea', textDecoration: 'none' }}>← Retour à l'accueil</Link>

        <h1> les taches a faire </h1>
        
    <ul>
         {todol.map((todo, index) => (
            <>
          <li key={index} >{todo}  <button onClick={()=>supptodol(index)}>supp</button></li> 
         
          </>
        ))}
    </ul>
        <input type="text" placeholder="ecrire votre tache......" ref={inputRef} />
        <p></p>
        <button onClick={addTodo}>ajouter</button>
        </div>
        </>
        
    );
}
export default Todo;