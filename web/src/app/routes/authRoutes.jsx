import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../authentication/components/login"
import Register from "../authentication/components/Register";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AuthRoutes;
