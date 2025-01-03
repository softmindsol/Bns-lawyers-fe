import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem("user");
    const accessToken = userData ? JSON.parse(userData).accessToken : null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.isMultipart) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default http;
