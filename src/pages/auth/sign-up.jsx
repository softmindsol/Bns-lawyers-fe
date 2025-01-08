import { Formik, Form, Field, ErrorMessage } from "formik";
import CoverImage from "../../assets/cover.png";
import Lines from "../../assets/bglines.png";
import Logo from "../../assets/logo.png";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowRightLong, FaMobileScreenButton } from "react-icons/fa6";
import { SignUpSchema } from "../../schema/user.schema";
import { FaUserAlt } from "react-icons/fa";
import useAuthStore from "../../../stores/authStore";

const formFields = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "johndoe",
    icon: <FaUserAlt />,
  },
  {
    id: "phone",
    label: "Phone number",
    type: "number",
    placeholder: "+92..",
    icon: <FaMobileScreenButton />,
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "example@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    icon: <RiLockPasswordFill />,
  },
];

const SignUp = () => {
  const { registerUser } = useAuthStore();
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#ffff] px-4 sm:px-6"
      style={{
        backgroundImage: `url(${Lines})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="container mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-lg">
        <div className="lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-1 flex-col justify-start rounded-2xl bg-white px-4 sm:px-6 sm:py-16 lg:rounded-bl-none lg:rounded-br-none lg:rounded-tl-2xl lg:rounded-tr-none lg:px-20 xl:px-24">
            <div className="flex flex-col items-start justify-end">
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <h2 className="mt-8 text-[26px] font-semibold leading-7 tracking-tight text-[#303841]">
                Create an Account{" "}
              </h2>
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  username: "",
                  password: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    setSubmitting(true);
                    await registerUser(values);
                  } catch (error) {
                    console.error(error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form className="mt-10 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-semibold leading-4 text-[#303841]"
                          >
                            First Name
                          </label>
                          <Field
                            id="first_name"
                            name="first_name"
                            type="text"
                            placeholder="Enter your first name"
                            className="block w-full rounded-[2px] border-0 px-3 py-3 ring-1 ring-inset ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="mt-1 text-sm text-red-600"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-semibold leading-4 text-[#303841]"
                          >
                            Last Name
                          </label>
                          <Field
                            id="last_name"
                            name="last_name"
                            type="text"
                            placeholder="Enter your last name"
                            className="block w-full rounded-[2px] border-0 px-3 py-3 ring-1 ring-inset ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            className="mt-1 text-sm text-red-600"
                          />
                        </div>
                      </div>
                      {formFields.map(
                        ({ id, label, type, placeholder, icon }) => (
                          <div key={id}>
                            <label
                              htmlFor={id}
                              className="block gap-1 text-sm font-semibold leading-4 text-[#303841] lg:flex"
                            >
                              <div>{icon}</div>
                              {label}
                            </label>
                            <div className="mt-2">
                              <Field id={id} name={id}>
                                {({ field, form }) => (
                                  <input
                                    {...field}
                                    type={type}
                                    placeholder={placeholder}
                                    className="block w-full rounded-[2px] border-0 px-3 py-3 ring-1 ring-inset ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (id === "phone") {
                                        form.setFieldValue(
                                          id,
                                          value.toString(),
                                        );
                                      } else {
                                        form.setFieldValue(id, value);
                                      }
                                    }}
                                  />
                                )}
                              </Field>
                              <ErrorMessage
                                name={id}
                                component="div"
                                className="mt-1 text-sm text-red-600"
                              />
                            </div>
                          </div>
                        ),
                      )}
                      <div>
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-md bg-mygradient1 px-3 py-2 text-[15px] font-medium leading-6 text-white shadow-sm"
                          disabled={isSubmitting}
                        >
                          Sign up
                          <FaArrowRightLong />
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className="h-full w-full rounded-br-2xl rounded-tl-none bg-cover bg-center"
              style={{
                backgroundImage: `url(${CoverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
