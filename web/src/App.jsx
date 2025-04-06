import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./app/guards/ProtectedRoute";
import LoginGuard from "./app/guards/LoginGuard";

import Home from "./app/home/Home";
import Login from "./app/authentication/components/Login";
import Register from "./app/authentication/components/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginGuard>
            <Login />
          </LoginGuard>
        }
      />
      <Route
        path="/register"
        element={
          <LoginGuard>
            <Register />
          </LoginGuard>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;

