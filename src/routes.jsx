import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
export const OtpVerification = lazy(() => import("./pages/auth/OTP"));
export const NewPassword = lazy(() => import("./pages/auth/newPassword"));
export const NotFound = lazy(() => import("./pages/not-found"));
export const ResetPassword = lazy(() => import("./pages/auth/reset-password"));
export const PrivateRoute = lazy(() => import("./components/private-route"));
export const SignIn = lazy(() => import("./pages/auth/sign-in"));
export const SignUp = lazy(() => import("./pages/auth/sign-up"));
export const Packages = lazy(() => import("./pages/auth/packages"));
export const Home = lazy(() => import("./pages/home"));
export const PetitionForm = lazy(() => import("./pages/petition-form"));
export const PrepareContract = lazy(() => import("./pages/prepare-contract"));
export const ResetGenerate = lazy(() => import("./pages/auth/reset-generate"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/reset-generate",
    element: <ResetGenerate />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/pricing-plan",
    element: (
      <PrivateRoute>
        <Packages />,
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: <Home />,
    // element: (
    //   <PrivateRoute>
    //     <Home />,
    //   </PrivateRoute>
    // ),
  },
  {
    path: "/petition-form",
    element: (
      <PrivateRoute>
        <PetitionForm />
      </PrivateRoute>
    ),
  },
  {
    path: "/prepare-contract",
    element: (
      <PrivateRoute>
        <PrepareContract />
      </PrivateRoute>
    ),
  },
  {
    path: "/otp-verification",
    element: <OtpVerification />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
