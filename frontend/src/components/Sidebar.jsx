import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Sidebar() {

    const {auth} = useAuth();

  return (
    <aside className="md:wd-80 lg:w-96 px-5 py-10">
        <p className="text-xl font-bold">Hola: {auth.nombre} {auth.apellido}</p>

        <Link 
            className="bg-sky-600 w-full p-3 text-white uppercase block mt-5 text-center rounded"  
            to="crear-usuario">Nuevo Usuario</Link>
    </aside>
  )
}
