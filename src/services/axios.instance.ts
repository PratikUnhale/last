import axios from "axios";

const baseURL = "http://localhost:4000/";
const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    "Content-Type": "application/json",
    authorization: token || "",
  };
  return config;
});

export default axiosInstance;
