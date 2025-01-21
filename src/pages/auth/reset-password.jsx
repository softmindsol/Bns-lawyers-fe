import { Formik, Form, Field, ErrorMessage } from "formik";
import CoverImage from "../../assets/law.png";
import Lines from "../../assets/bglines.png";
import Logo from "../../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { ResetPasswordSchema } from "../../schema/user.schema";
import { RiLockPasswordFill } from "react-icons/ri";

const loginFields = [
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "*********",
    icon: <RiLockPasswordFill />,
  },
];

const ResetPassword = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#ffffff] px-4 sm:px-6"
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
                Reset Your Password{" "}
              </h2>

              <Formik
                initialValues={{ password: "" }}
                validationSchema={ResetPasswordSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-10 space-y-6">
                    {loginFields.map(
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
                            <Field
                              id={id}
                              name={id}
                              type={type}
                              placeholder={placeholder}
                              className="block w-full rounded-[2px] border-0 px-3 py-3 text-[14px] font-medium text-[#303841] ring-1 ring-inset ring-[#CCCCCC] placeholder:text-[#2E2E2E] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
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
                        Reset Password <FaArrowRightLong />
                      </button>
                    </div>
                  </Form>
                )}
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

export default ResetPassword;
