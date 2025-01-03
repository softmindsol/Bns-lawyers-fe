import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const validationSchema = Yup.object({
  otp: Yup.string()
    .matches(/^\d{4}$/, "OTP must be exactly 4 digits")
    .required("OTP is required"),
});

export const NewPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  username: Yup.string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters long"),
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long"),
  user_type: Yup.string().optional(),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{10,15}$/, "Invalid phone number format"),
});

export const Selectorschema = Yup.object().shape({
  options: Yup.array()
    .of(Yup.string().required("Each option must be a non-empty string"))
    .required("Options array is required")
    .min(1, "Options array cannot be empty"),
  label: Yup.string().required("Label is required"),
  selectedValue: Yup.string()
    .nullable() // Allow null or undefined initially
    .when("options", {
      is: (options) => options && options.length > 0,
      then: Yup.string()
        .required("Selected value is required")
        .test(
          "is-valid-option",
          "Selected value must be one of the options",
          function (value) {
            return this.parent.options.includes(value);
          },
        ),
    }),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must include uppercase, lowercase, number, and special character",
    )
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const OtpVerificationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits"),
});
