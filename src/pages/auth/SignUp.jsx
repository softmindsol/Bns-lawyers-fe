import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CoverImage from "../../assets/cover.png";
import Lines from "../../assets/bglines.png";
import Logo from "../../assets/logo.png";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowRightLong, FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

// Updated Validation schema using Yup
const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

// Form field configuration
const formFields = [
  {
    id: "Phone",
    label: "Phone number",
    type: "password",
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
  return (
    <div
      className="bg-[#ffff] min-h-screen px-4 sm:px-6 flex justify-center items-center"
      style={{
        backgroundImage: `url(${Lines})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <div className="container max-w-7xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-1 flex-col justify-start bg-white sm:py-16 px-4 sm:px-6 lg:px-20 xl:px-24 rounded-2xl lg:rounded-tr-none lg:rounded-bl-none lg:rounded-tl-2xl lg:rounded-br-none">
            <div className="flex flex-col justify-end items-start">
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <h2 className="mt-8 text-[26px] font-semibold leading-7 tracking-tight text-[#303841]">
                Create an Account{" "}
              </h2>

              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  phoneNumber: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-10">
                    <div>
                      <label
                        htmlFor="username"
                        className="block lg:flex gap-1 text-sm font-semibold leading-4 text-[#303841]"
                        >
                        <div>
                          <IoMdPerson size={18} />
                        </div>
                        Username
                      </label>

                      <div className="mt-2">
                        <Field
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Enter your username"
                          className="block w-full rounded-[2px] border-0 ring-1 ring-inset px-3 py-3 ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {formFields.map(
                      ({ id, label, type, placeholder, icon }) => (
                        <div key={id}>
                          <label
                            htmlFor={id}
                            className="block lg:flex gap-1 text-sm font-semibold leading-4 text-[#303841]"
                          >
                            <div>{icon}</div>
                            {label}
                          </label>
                          <div className="mt-2">
                            <Field
                              id={id}
                              name={id}
                              type={type}
                              placeholder={placeholder}
                              className="block w-full rounded-[2px] border-0 ring-1 ring-inset px-3 py-3 ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name={id}
                              component="div"
                              className="text-red-600 text-sm mt-1"
                            />
                          </div>
                        </div>
                      )
                    )}

       

                    <div>
                      <Link to={"/pricing-plan"}>
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 justify-center rounded-md bg-mygradient1 px-3 py-2 text-[15px] font-medium leading-6 text-white shadow-sm "
                          disabled={isSubmitting}
                        >
                          Sign up
                          <FaArrowRightLong />
                        </button>
                      </Link>
                    </div>

                    <div className="flex w-full items-center gap-2 justify-center">
                      <p className=" text-center text-[14px] text-normal text-[#6B7280]">
                        Already have an account?
                        <Link to="/">
                        <span className="text-[#0057FF] font-semibold underline">
                        Log in
                          </span>
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="hidden lg:block">
            <div
              className="rounded-tl-none rounded-br-2xl h-full w-full bg-cover bg-center"
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
