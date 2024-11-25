import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CoverImage from "../../assets/law.jpg";

import {
  FaArrowRightLong,
  FaFacebook,

} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { SignInSchema } from "../schema/user.schema";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const SignIn = () => {

 const loginFields = [
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "example@gmail.com",
      icon: MdEmail, // No JSX here
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      icon: RiLockPasswordFill, // No JSX here
    },
  ];
 
  return (
    <div className="bg-[#303841] min-h-dvh px-4 sm:px-6 flex justify-center items-center">
      <div className="container max-w-7xl mx-auto shadow-lg rounded-2xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-[3fr_5fr]">
          <div className="hidden lg:block">
            <div
              className="rounded-tl-2xl rounded-bl-2xl h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${CoverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "53rem",
                width: "100%",
              
              }}
            >
              <div className="flex flex-col justify-end h-full w-full mx-auto pb-14 px-12 items-start">
                {/* <img src={Logo} alt="Logo" /> */}
         
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-20 xl:px-24 rounded-2xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-2xl lg:rounded-br-2xl">
            <div>
              <h2 className="mt-8 text-3xl font-bold leading-7 tracking-tight text-[#303841]">
               Log In {" "}
              
              </h2>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={SignInSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-10">
                    {loginFields.map(
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
                              className="block w-full rounded-[2px] border-0 ring-1 ring-inset px-3 py-3 ring-[#CCCCCC] placeholder:text-[#2E2E2E] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center">
                        <Field
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 font-medium text-[14px] leading-6 text-[#0A2540]"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm leading-6">
                        <Link to={"/forgot-password"}>
                          <p className="font-medium text-[14px] leading-6 text-[#0A2540]">
                            Forgot password?
                          </p>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Link to ={"/home"}>   
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 justify-center rounded-md bg-[#0A2540] px-3 py-2 text-[16px] font-semibold leading-6 text-white shadow-sm "
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Signing in..." : "Submit"}
                        <FaArrowRightLong />
                      </button>
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="mt-6 flex justify-center items-center">
                <p className="text-[14px] font-normal">
                  Don't have an account?{" "}
                  <Link to={"/sign-up"}>  
                  <span className="text-[#0A2540] font-semibold underline">Sign up</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
