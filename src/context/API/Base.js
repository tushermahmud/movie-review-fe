import axios from "axios";

// Set your base URL here
const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Enable credentials (including cookies) for cross-origin requests
});

export default axiosInstance;
