import React from "react";
import { AuthProvider } from "../context/authProvider"; 
import AuthRoutes from "../routes/authRoutes"; 

const AuthenticationModule = () => {
  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
};

export default AuthenticationModule;
