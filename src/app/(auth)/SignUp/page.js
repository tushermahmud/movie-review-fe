"use client";
import { resizeImage } from "@/components/ResizeImage/ResizeImage";
import { AlertToast } from "@/components/Toast/AlertToast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { GoogleLoginButton } from "react-social-login-buttons";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // Handle skills changes
  const handlePermissionsChange = (selectedSkills) => {
    setPermissions(selectedSkills);
  };

  const onSubmit = async (data) => {
    try {
      if (!data.username) {
        setError("username", {
          type: "manual",
          message: "Username is required",
        });
      }
      if (!data.email) {
        setError("email", { type: "manual", message: "Email is required" });
      }
      if (
        !data.password ||
        data.password.length < 8 ||
        /[A-Z]/.test(data.password) !== true //for my auto save
      ) {
        setError("password", {
          type: "manual",
          message:
            "Password must be 8 characters and contain at least 1 uppercase letter",
        });
      }

      if (
        !data.confirmPass ||
        data.confirmPass.length < 8 ||
        data.password !== data.confirmPass ||
        /[A-Z]/.test(data.confirmPass) !== true //for my auto save
      ) {
        setError("confirmPass", {
          type: "manual",
          message: "Password Didn't match!",
        });
      }

      if (!data.role) {
        setError("role", { type: "manual", message: "Role is required" });
      }

      console.log("this is length of error", errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const payload = {
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPass,
        role: data.role,
      };

      console.log("Form data:", payload);

      // Send data to API
      const response = await axios.post(
        "http://localhost:4000/user/createUser",
        payload
      );

      console.log("API Response:", response);
      AlertToast("success");
    } catch (error) {
      console.error("API Error:", error.response || error);
      AlertToast(error);
    }
  };

  return (
    <div className="bg-opacity-100 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-100">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-100"></div>
        <div className="bg-white bg-opacity-60 p-8 rounded-xl backdrop-blur-md w-full relative z-10  max-w-3xl animate-expand">
          <h2 className="text-2xl font-bold text-[#03032e] mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-10">
              {/* username */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-[#03032e] mb-1"
                  htmlFor="username"
                >
                  Username
                </label>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Username is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-[#03032e] placeholder-gray-400"
                      placeholder="Enter your username"
                    />
                  )}
                />
                {errors.username && (
                  <span className="text-red-400 text-xs">
                    {errors.username.message}
                  </span>
                )}
              </div>

              {/* email */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-[#03032e] mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-[#03032e] placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  )}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {/* pass */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-[#03032e] mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      // minLength: {
                      //   value: 8,
                      //   message: "Password must be at least 8 characters",
                      // },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-[#03032e] placeholder-gray-400"
                        placeholder="Enter your password"
                      />
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-400 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* confirm-pass */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-[#03032e] mb-1"
                  htmlFor="confirmPass"
                >
                  Password
                </label>
                <div className="relative">
                  <Controller
                    name="confirmPass"
                    control={control}
                    rules={{
                      required: "Password is required",
                      // minLength: {
                      //   value: 8,
                      //   message: "Password must be at least 8 characters",
                      // },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-[#03032e] placeholder-gray-400"
                        placeholder="Enter your confirm password"
                      />
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-400 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* role */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#03032e] mb-1">
                  Role
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <Controller
                      name="role"
                      control={control}
                      rules={{ required: "Role is required" }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="radio"
                          value="user"
                          className="form-radio text-blue-600"
                        />
                      )}
                    />
                    <span className="ml-2 text-[#03032e]">User</span>
                  </label>
                  <label className="inline-flex items-center">
                    <Controller
                      name="role"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="radio"
                          value="admin"
                          className="form-radio text-blue-600"
                        />
                      )}
                    />
                    <span className="ml-2 text-[#03032e]">Admin</span>
                  </label>
                </div>
                {errors.role && (
                  <span className="text-red-400 text-xs">
                    {errors.role.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-4"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-[#03032e]">
            Already have an account?
            <Link href="/" className="text-blue-400 hover:underline ml-1">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
