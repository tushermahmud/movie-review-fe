"use client";
// AuthAPI.js
import { useState } from "react";
import axiosInstance from "./Base";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
const useAuthAPI = () => {
  const { login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const getAllMovies = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get("/movies");
      console.log({ response });
      setLoading(false);
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
