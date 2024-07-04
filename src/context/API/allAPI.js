"use client";
// AuthAPI.js
import { useState } from "react";
import axiosInstance from "./Base";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
const useAllAPI = () => {
  const { login, logout, token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const addMovie = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.post("/movies", payload, config);
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getAllMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.get("/movies", config);
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const removeMovie = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.delete(`/movies/${movieId}`, config);
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getSingleMovie = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.get(`/movies/${movieId}`, config);
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getComments = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.get(
        `/comments/${movieId}/comments`,
        config
      );
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (movieId, payload) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.post(
        `/comments/${movieId}/create-comment`,
        payload,
        config
      );
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorite = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.post(
        `/user/${movieId}/add-to-favorites`,
        {},
        config
      );
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const removeFromFavourite = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.post(
        `/user/${movieId}/remove-from-favorites`,
        {},
        config
      );
      console.log({ response });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getFavourites = async () => {
    try {
      setLoading(true);
      setError(null);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        withCredentials: true,
      };
      const response = await axiosInstance.get(`/user/favorites`, config);
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

  return {
    getAllMovies,
    getSingleMovie,
    getComments,
    addComment,
    addMovie,
    loading,
    addToFavorite,
    removeFromFavourite,
    getFavourites,
    removeMovie,
  };
};

export default useAllAPI;
