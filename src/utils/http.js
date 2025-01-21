import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use(
  (config) => {
    const access_token = Cookies.get("access_token");

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
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
