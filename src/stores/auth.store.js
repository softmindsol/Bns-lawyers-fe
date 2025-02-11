import { create } from "zustand";
import Cookies from "js-cookie";
import { devtools } from "zustand/middleware";
import { toast } from "sonner";
import http from "../utils/http";

const useAuthStore = create(
  devtools((set) => ({
    user: {
      data: {},
      loading: false,
      error: null,
    },
    loading: false,
    error: null,

    // Action: register
    registerUser: async (payload) => {
      set({ loading: true, error: null }, false, "auth/register/start");
      try {
        const response = await http.post("/users/register", payload);
        const data = response?.data;
        set({ loading: false }, false, "auth/register/success");
        toast.success(data?.message || "Account register successfully");
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
        return data;
      } catch (error) {
        set(
          { error: error?.response?.data?.message, loading: false },
          false,
          "auth/login/error",
        );
        toast.error(error?.response?.data?.message || "Failed to login");
        throw error;
      }
    },

    // Action: Forgot Password
    forgotPassword: async (payload) => {
      set({ loading: true, error: null });
      try {
        const response = await http.post("/users/reset/generate", payload);
        const data = response.data;
        set({ loading: false });
        toast.success(data?.message || "Email sending");
        return data;
      } catch (error) {
        set({ error: error?.response?.data?.message, loading: false });
        toast.error(error?.response?.data?.message || "Email sending failed");
        throw error;
      }
    },

    // Action: Logout
    logout: async () => {
      set({ loading: true, error: null }, false, "auth/logout/start");
      try {
        Cookies.remove("access_token");
        set({ user: null, loading: false }, false, "auth/logout/success");
        toast.success("Logged out successfully");
      } catch (error) {
        set(
          { error: "Failed to log out", loading: false },
          false,
          "auth/logout/error",
        );
        toast.error("Failed to logout");
        throw error;
      }
    },

    // Action: User Info
    userInfo: async (id) => {
      set({ user: { loading: true, error: null } });
      try {
        const response = await http.get(`/users/${id}`);
        const data = response.data;
        set({ user: { data: data?.data, loading: false, error: null } });
        return data;
      } catch (error) {
        set({
          user: { error: error?.response?.data?.message, loading: false },
        });
        toast.error(
          error?.response?.data?.message || "Failed to get user info",
        );
        throw error;
      }
    },
  })),
);

export default useAuthStore;
