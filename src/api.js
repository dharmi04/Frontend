// src/api.js
import axios from "axios";

// Use environment variable from Vite
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Optional: Add interceptor for token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
