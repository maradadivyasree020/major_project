import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
        // console.log(data.username, data.password);
        const res = await authService.loginUser(data.username, data.password);

        if (res.token) { 
            navigate("/home");
        } else {
            alert(res.message);
        }
    } catch (error) {
        console.error(error);
    }
};
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center text-white">
      <div className="bg-gray-900 bg-opacity-60 p-9 rounded-xl w-[500px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[60%] mb-2.5 text-center">
            <h1 className="font-bold text-xl">Welcome Back!</h1>
            <p className="text-sm text-gray-300">Enter your details to sign in to your account</p>
        </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-1.5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              {...register("username", { required: "Enter a valid username" })}
              placeholder="Enter username"
              className="border border-white p-2 rounded-lg w-full text-sm bg-gray-600 bg-opacity-50"
            />
            {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
          </div>

          <div className="w-full flex flex-col items-start justify-center gap-1.5 mt-3">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Enter a valid password",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must be at least 8 characters with a mix of letters, numbers, and symbols",
                },
              })}
              placeholder="Enter password"
              className="border border-white p-2 rounded-lg w-full text-sm bg-gray-600 bg-opacity-50"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full text-center mt-4 rounded-full p-2 text-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-2 ">
          Don't have an Account? 
          <span className="text-blue-400 cursor-pointer" onClick={() => { navigate("/register"); console.log("clicked"); }}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;