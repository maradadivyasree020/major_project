 
  export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    console.log("Checking token:", token);
    return !!token;
  };
  