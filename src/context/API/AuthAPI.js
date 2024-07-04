"use client";
// AuthAPI.js
import { useEffect, useState } from "react";
import axiosInstance from "./Base";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const useAuthAPI = () => {
  const { login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const response = await axiosInstance.post(
        "/user/login",
        {
          email,
          password,
        },
        config
      );

      console.log({ response });
      login(response?.data?.token);
      Cookies.set("token", response?.data?.token);
      // localStorage.setItem("firstLogin", true);
      // console.log({ loginData: response?.data?.accessToken });
      // login(response.data.role, response?.data?.accessToken);

      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // const fetchUser =

  const logoutUser = async () => {
    try {
      // Call the backend logout endpoint
      await axiosInstance.post("/auth/logout");

      // Logout on the frontend
      logout();
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return { loading, error, loginUser, logoutUser };
};

export default useAuthAPI;
