import { create } from "zustand";
import { toast } from "sonner";
import http from "../src/utils/http";
import { devtools } from "zustand/middleware";

const useFeedbackStore = create(
  devtools((set) => ({
    loading: false,
    error: null,
    feedback: "",

    // Action: Add feedback
    addFeedback: async (payload) => {
      set({ loading: true, error: null });
      try {
        const response = await http.post("/utils/form/create_form", payload);
        const data = response?.data;
        set({ loading: false, feedback: data });
        toast.success(data?.message || "Feedback successfully submitted");
        return data;
      } catch (error) {
        set({ error: error?.response?.data?.message, loading: false });
        toast.error(
          error?.response?.data?.message || "Failed to submit the feedback",
        );
        throw error;
      }
    },
  })),
);

export default useFeedbackStore;
