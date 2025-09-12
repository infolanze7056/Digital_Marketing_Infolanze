import axios from "axios";

// Create axios instance
const axiosConfig = axios.create({
  // baseURL:  "http://localhost:3000/api", 
  baseURL:  "https://contact-backend-zeta.vercel.app/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosConfig;
