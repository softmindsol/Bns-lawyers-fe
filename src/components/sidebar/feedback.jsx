import * as Yup from "yup";
import { useFormik } from "formik";
import useFeedbackStore from "../../../stores/feedback.store";

const FeedBack = ({ setShowFeedback }) => {
  const { addFeedback } = useFeedbackStore();
  const validationSchema = Yup.object({
    content: Yup.string()
      .trim()
      .min(5, "Feedback must be at least 5 characters")
      .required("Feedback is required"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addFeedback(values);
      resetForm();
      setShowFeedback(false);
    },
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik || {};

  return (
    <form onSubmit={handleSubmit} className="mt-6 px-2">
      <div
        className={`rounded-md border focus:outline-none focus:ring-1 ${
          errors.content && touched.content
            ? "border-red-500 focus:ring-red-500"
            : "border-[#CCCCCC] focus:ring-blue-500"
        }`}
      >
        <textarea
          name="content"
          value={values.content}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Share your feedback here..."
          className="h-[200px] w-full resize-none rounded-lg border border-none p-3 text-sm focus:outline-0"
        />
        <div className="pb-3 pr-3 text-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-md bg-mygradient1 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40`}
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
      {errors.content && touched.content && (
        <p className="mt-1 text-sm text-red-500">{errors.content}</p>
      )}
    </form>
  );
};

export default FeedBack;
