import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const { auth, setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/login', {email, password});

      setAlerta({});
      sessionStorage.setItem('token', data.token);
      setAuth(data);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }

  }

  const { msg } = alerta;

  return (
    <>
        <h1 className="text-black font-black text-6xl text-center">Iniciar Sesión</h1>

        { msg && <Alerta alerta={ alerta } />}

        <form className="my-10 bg-slate-300 shadow rounded-lg p-10" onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold" htmlFor="email">Correo Electrónico</label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Ingrese su Correo"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}/>
            </div>
            <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold" htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Ingrese su contraseña"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}/>
            </div>

            <input 
                type="submit" 
                value="Iniciar Sesión"
                className="bg-green-400 w-full py-3 font-bold text-xl uppercase rounded-xl hover:cursor-pointer hover:bg-green-300 transition-colors"/>
        </form>
    </>
  )
}

