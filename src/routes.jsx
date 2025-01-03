import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OtpVerification from './pages/auth/OTP';
import NewPassword from './pages/auth/newPassword';

const SignIn = lazy(() => import('./pages/auth/sign-in'));
const SignUp = lazy(() => import('./pages/auth/sign-up'));
const Packages = lazy(() => import('./pages/auth/packages'));
const Home = lazy(() => import('./pages/home'));
const PetitionForm = lazy(() => import('./pages/petition-form'));
const PrepareContract = lazy(() => import('./pages/prepare-contract'));
const ResetPassword = lazy(() => import('./pages/auth/reset-password'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/pricing-plan',
    element: <Packages />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/petition-form',
    element: <PetitionForm />,
  },
  {
    path: '/prepare-contract',
    element: <PrepareContract />,
  },
  {
    path: '/otp-verification',
    element: <OtpVerification />,
  },
  {
    path: '/new-password',
    element: <NewPassword />,
  },
]);

export default router;
