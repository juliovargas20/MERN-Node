import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-sky-700 font-black text-center">Usuarios</h2>
            <input 
                type="text"
                placeholder="Buscar Usuarios" 
                className="rounded-lg lg:w-96 block p-2 border"/>

            <div className="flex items-center gap-4">
              <Link 
                to="/home"
                className="font-bold uppercase"
              >Usuarios</Link>

               <button className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold">
                    Cerrar Sesión
                </button> 
            </div>
        </div>
    </header>
  )
}
