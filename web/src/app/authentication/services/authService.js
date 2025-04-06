// // import axios from "axios";

// // const API_URL = "http://localhost:5000/api/users";

// // const AuthService = {
  
// //   loginUser: async (username, password) => {
// //     try {
// //       console.log(username,password);
// //       const response = await axios.post(`${API_URL}/login`, { username, password }); 

// //         if (response.data.token) { 
// //             localStorage.setItem("token", response.data.token);
// //         }

// //         return response.data;
// //     } catch (error) {
// //         console.error("Login error", error);
// //         return { success: false, error: "Login failed" };
// //     }
// // },

// //   registerUser: async (username, password) => {
// //     try {
// //       const response = await axios.post(`${API_URL}/register`, { username, password }); // ✅ Corrected path
// //       return response.data;
// //     } catch (error) {
// //       console.error("Registration error", error);
// //       return { success: false, error: "Registration failed" };
// //     }
// //   },

// //   logoutUser: () => {
// //     localStorage.removeItem("token");
// //     return "User logged out";
// //   },
// // };

// // export default AuthService;

// import axios from "axios";

// const API_URL = "http://localhost:5000/api/users";

// const AuthService = {
//   // ✅ Login User
//   loginUser: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_URL}/login`, { username, password });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//       }

//       return response.data;
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       return { success: false, error: error.response?.data?.message || "Login failed" };
//     }
//   },

//   // ✅ Register User
//   // registerUser: async (username, password) => {
//   //   try {
//   //     const response = await axios.post(`${API_URL}/register`, { username, password });
//   //     console.log(response)
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error("Registration error:", error.response?.data || error.message);
//   //     return { success: false, error: error.response?.data?.message || "Registration failed" };
//   //   }
//   // },
//   registerUser: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_URL}/register`, { username, password });
  
//       console.log("Full Axios Response:", response);  // Logs entire Axios response
//       console.log("Response Data:", response.data);   // Logs only the data part
  
//       return response.data;
//     } catch (error) {
//       console.error("Registration error:", error.response?.data || error.message);
  
//       return { success: false, error: error.response?.data?.message || "Registration failed" };
//     }
//   },
  

//   // ✅ Logout User
//   logoutUser: () => {
//     localStorage.removeItem("token");
//     return "User logged out";
//   },

//   // ✅ Get Auth Token from Storage
//   getToken: () => {
//     return localStorage.getItem("token");
//   },

//   // ✅ Check if User is Logged In
//   isAuthenticated: () => {
//     return !!localStorage.getItem("token");
//   }
// };

// export default AuthService;

const API_URL = 'http://localhost:5000/api/users';

const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Save token if you want
    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: error.message };
  }
};

const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: error.message };
  }
};

export default {
  loginUser,
  registerUser,
};
