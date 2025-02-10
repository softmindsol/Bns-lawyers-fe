import { create } from "zustand";
import { toast } from "sonner";
import http from "../src/utils/http";
import { devtools } from "zustand/middleware";

const usePlanStore = create(
  devtools((set) => ({
    loading: false,
    error: null,
    plans: {},

    // Action: get plans
    getAllPlans: async (payload) => {
      set({ loading: true, error: null });
      try {
        const response = await http.get("/subs", payload);
        const data = response?.data;
        set({ loading: false, plans: data });
        return data;
      } catch (error) {
        set({ error: error?.response?.data?.message, loading: false });
        toast.error(error?.response?.data?.message || "Failed to get plans");
        throw error;
      }
    },
  })),
);

export default usePlanStore;
