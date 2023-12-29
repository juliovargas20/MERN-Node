import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RutaProtegida() {

    const { auth } = useAuth();

    console.log(auth);

  return (
    <div>RutaProtegida</div>
  )
}

export default RutaProtegida