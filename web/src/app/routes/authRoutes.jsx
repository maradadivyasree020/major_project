import { Routes, Route } from "react-router-dom";
import Login from "../authentication/components/Login";
import Register from "../authentication/components/Register";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route index element={<Login />} /> 
    </Routes>
  );
}

export default AuthRoutes;
