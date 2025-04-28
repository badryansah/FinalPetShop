import axios from "axios";

// Create an Axios instance
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",  // Ensure this is correct for your Laravel backend
  headers: {
    "Content-Type": "application/json",  // Add a content-type header for JSON
  },
  withCredentials: true,
});

// Request interceptor to add Authorization header with token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle any errors in the request
  }
);

// Optional: Add response interceptor to handle errors globally (e.g. 401 for unauthorized)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors, like unauthorized or token expiration
    if (error.response && error.response.status === 401) {
      // Token expired or not valid, you can redirect the user to login
      localStorage.removeItem("token"); // Clear invalid token
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
