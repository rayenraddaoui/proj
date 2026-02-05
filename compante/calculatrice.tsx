import { Link } from "react-router-dom";

function Calculatrice(){
    return(
<>
<div className="bo">
    <header><input type="text" /></header>
    <main>
    <div className=" p-4">
    <button>1</button><button>2</button><button>3</button>
    </div>
    <div>
    <button>4</button><button>5</button><button>6</button>
    </div>
    <div>
    <button>7</button><button>8</button><button>9</button>
    </div>
    <div>
    <button>/</button><button>*</button><button>-</button>
    </div>
    <div>
    <button>0</button><button>.</button><button>+</button>
    </div>
    </main>
</div>
<Link id="lien" to="/">Déconnexion</Link>
</>
    );
}
export default Calculatrice;