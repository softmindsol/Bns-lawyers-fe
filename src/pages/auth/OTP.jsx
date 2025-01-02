import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CoverImage from "../../assets/law.png";
import Lines from "../../assets/bglines.png";
import Logo from "../../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { OtpVerificationSchema } from "../schema/user.schema";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    e.target.value = value.slice(-1);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      inputRefs.current[index].value = "";

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
    else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((value, index) => {
      if (index < 6) {
        newOtp[index] = value;
        inputRefs.current[index].value = value;
      }
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, 6) - 1;
    if (lastIndex >= 0) {
      inputRefs.current[lastIndex].focus();
    }
  };

  return (
    <div
      className="bg-[#ffffff] min-h-screen px-4 sm:px-6 flex justify-center items-center"
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
                Verify OTP
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Please enter the 6-digit code sent to your email
              </p>

              <Formik
                initialValues={{ otp: "" }}
                validationSchema={OtpVerificationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(otp.join(""));
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 mt-10">
                    <div>
                      <label className="block lg:flex gap-1 text-sm font-semibold leading-4 text-[#303841]">
                        <div>
                          <MdEmail />
                        </div>
                        Enter OTP
                      </label>
                      <div className="mt-4 flex justify-start gap-2 sm:gap-4">
                        {otp.map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength="1"
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            className="w-12 h-12 text-center text-xl font-semibold rounded-md border-0 ring-1 ring-inset ring-[#CCCCCC] focus:ring-2 focus:ring-indigo-600"
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          setOtp(new Array(6).fill(""));
                          inputRefs.current.forEach(
                            (input) => (input.value = "")
                          );
                          inputRefs.current[0].focus();
                        }}
                      >
                        Didn't receive code? Resend
                      </button>
                    </div>

                    <div>
                      <Link to={"/new-password"}>
                        <button
                          type="submit"
                          className="flex w-full cursor-pointer items-center gap-2 justify-center rounded-md bg-mygradient1 px-3 py-2 text-[15px] font-medium leading-6 text-white shadow-sm"
                          disabled={
                            isSubmitting || otp.some((digit) => digit === "")
                          }
                        >
                          Verify OTP <FaArrowRightLong />
                        </button>
                      </Link>
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
                height: "53rem",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
