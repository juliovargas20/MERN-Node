
export default function Login() {
  return (
    <>
        <h1 className="text-black font-black text-6xl text-center">Iniciar Sesión</h1>

        <form className="my-10 bg-slate-300 shadow rounded-lg p-10">
            <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold" htmlFor="email">Correo Electrónico</label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Ingrese su Correo"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
            </div>
            <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold" htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Ingrese su contraseña"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
            </div>

            <input 
                type="submit" 
                value="Iniciar Sesión"
                className="bg-green-400 w-full py-3 font-bold text-xl uppercase rounded-xl hover:cursor-pointer hover:bg-green-300 transition-colors"/>
        </form>
    </>
  )
}

