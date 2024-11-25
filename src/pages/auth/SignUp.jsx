import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CoverImage from "../../assets/cover.png";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiPhoneFill } from "react-icons/ri";
import { FaArrowRightLong, FaFacebook, FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { IoMdPerson } from "react-icons/io";
import { HiDevicePhoneMobile } from "react-icons/hi2";

// Validation schema using Yup
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
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
  {
    id: "Phone",
    label: "Phone number",
    type: "password",
    placeholder: "+92..",
    icon:<FaMobileScreenButton />

  },
];

const SignUp = () => {
  return (
    <div className="bg-[#303841] min-h-screen px-4 sm:px-6 flex justify-center items-center">
      <div className="container max-w-7xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-[3fr_5fr]">
          <div className="hidden lg:block">
            <div
              className="rounded-tl-2xl rounded-bl-2xl h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${CoverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "856px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <div className="flex flex-col justify-end h-full w-full mx-auto pb-14 px-12 items-start">
                <img src={Logo} alt="Logo" />
                <h1 className="text-[32px] font-bold text-white">
                  We're the Tool for your Project Management
                </h1>
                <p className="text-[14px] font-normal text-white">
                  Friday.com is a one-stop shop for agencies of all types and
                  sizes. Select one or more key areas for improvement
                </p>
       
              </div> */}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-20 xl:px-24 rounded-2xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-2xl lg:rounded-br-2xl">
            <div>
              <h2 className="mt-8 text-3xl font-bold leading-7 tracking-tight text-[#303841]">
                Sign up 
              </h2>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
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
                {({ isSubmitting, values, setFieldValue }) => (
                  <Form className="space-y-6 mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block lg:flex gap-1text-sm font-semibold leading-4 text-[#303841]"
                        >
                          <div>
                            <IoMdPerson size={18}/>
                          </div>
                          First Name
                        </label>

                        <div className="mt-2">
                          <Field
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="block w-full rounded-[2px] border-0 ring-1 ring-inset px-3 py-3 ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block lg:flex gap-1 text-sm font-semibold leading-4 text-[#303841]"
                        >
                               <div>
                            <IoMdPerson className="28px"  size={18}/>
                          </div>
                          Last Name
                        </label>
                        <div className="mt-2">
                          <Field
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="block w-full rounded-[2px] border-0 ring-1 ring-inset px-3 py-3 ring-[#CCCCCC] placeholder:text-textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
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

                

                    <div className="">
                      <div className="flex items-center">
                        <Field
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-8 w-8 rounded border-gray-300 "
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-3 font-medium text-[14px]  text-textblack"
                        >
                         Create an account its mean you are okay with our Terms & Conditions Service, 
                         Privacy Policy, default Notifications Settings. 
                        </label>
                      </div>

                     
                    </div>

                    <div>
                      <Link to={"/pricing-plan"}>  
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 justify-center rounded-md bg-[#0A2540] px-3 py-2 text-[16px] font-semibold leading-6 text-white shadow-sm "
                        disabled={isSubmitting}
                      >
                      Submit<FaArrowRightLong />
                      </button>
                      </Link>

                    </div>

                    <div className="flex w-full items-center gap-2 justify-center">
                      <p className=" text-center text-[14px] text-textblack">
                      Already have an account? 
                        <Link to="/">
                          <span className="ml-1 text-primary hover:text-[#0525A2] font-semibold">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;