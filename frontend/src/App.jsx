import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import RutaProtegida from "./layouts/RutaProtegida";


function App() {
  return (
    <BrowserRouter>
        <AuthProvider> 
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
              </Route>
            </Routes>

            <Route path="/home" element={<RutaProtegida />}>
              <Route index element={<Home />}/>
            </Route>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
