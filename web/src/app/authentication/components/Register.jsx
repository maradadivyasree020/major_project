import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await authService.registerUser(data.username, data.password);
      console.log(response?.success)
      if (response.success) {
        navigate("/");
        console.log("success sdf")
      } else {
        setErrorMessage(response.error);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while registering.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-row items-center justify-center text-white">
      <div className="bg-gray-900 bg-opacity-50 p-9 rounded-xl w-[500px]">
        <div className="w-[60%] mb-2.5">
          <h1 className="font-bold text-xl">Welcome!</h1>
          <p className="text-sm text-gray-300">Enter your details to create an account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-1.5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              {...register("username", { required: "Enter a valid username" })}
              className="border border-white p-2 rounded-lg w-full text-sm bg-gray-600 bg-opacity-50"
            />
            {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
          </div>

          <div className="w-full flex flex-col items-start justify-center gap-1.5 mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Enter a valid password",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
                },
              })}
              className="border border-white p-2 rounded-lg w-full text-sm bg-gray-600 bg-opacity-50"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-blue-500 disabled:cursor-not-allowed text-gray-200 w-full text-center mt-4 rounded-full p-2 text-md"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-2">
          Already have an Account? <a className="text-blue-400" href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
