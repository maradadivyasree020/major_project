import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const LoginGuard = ({ children }) => {
  const auth = isAuthenticated();
  // console.log("LoginGuard  isAuthenticated():", auth);
  // console.log("LoginGuard  current path:", window.location.pathname);

  if (auth) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default LoginGuard;
