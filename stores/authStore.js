import { create } from "zustand";
import http from "../src/utils/http";
import { devtools } from "zustand/middleware";
import { toast } from "sonner";

const useAuthStore = create(
  devtools((set) => ({
    user: {},
    loading: false,
    error: null,

    // Action: register
    registerUser: async (payload) => {
      set({ loading: true, error: null }, false, "auth/register/start");
      try {
        const response = await http.post("/users/register", payload);
        const data = response.data;
        set({ loading: false }, false, "auth/register/success");
        toast.success(data?.message || "Register account successfully");
        return data;
      } catch (error) {
        set(
          { error: error?.response?.data?.message, loading: false },
          false,
          "auth/register/error",
        );
        toast.error(error?.response?.data?.message || "Failed to register");
        throw error;
      }
    },

    // Action: Login
    login: async (payload) => {
      set({ loading: true, error: null }, false, "auth/login/start");
      try {
        const response = await http.post("/users/login", payload);
        const data = response.data;
        set({ loading: false }, false, "auth/login/success");
        toast.success(data?.message || "Logged in successfully");
        // localStorage.setItem("user", JSON.stringify(data?.content));
        return data;
      } catch (error) {
        set(
          { error: error?.response?.data?.error, loading: false },
          false,
          "auth/login/error",
        );
        toast.error(error?.response?.data?.error || "Failed to login");
        throw error;
      }
    },

    // Action: Logout
    logout: async () => {
      set({ loading: true, error: null }, false, "auth/logout/start");
      try {
        const response = await http.get("/auth/log-out");
        set({ user: null, loading: false }, false, "auth/logout/success");
        localStorage.clear();
        toast.success(response?.data?.message || "Logged in successfully");

        return response?.data;
      } catch (error) {
        set(
          { error: "Failed to log out", loading: false },
          false,
          "auth/logout/error",
        );
        toast.error(error?.response?.data?.error || "Failed to logout");
        throw error;
      }
    },
  })),
);

export default useAuthStore;
