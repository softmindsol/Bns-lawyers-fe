import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/SignUp";
import Packages from "./pages/auth/packages";
import Home from "./pages/home/Home";
import PetitionForm from "./pages/petition-form/PetitionForm";
import PrepareContract from "./pages/prepare-contract/prepareContract";
import ResetPassword from "./pages/auth/resetPassword";
import TermsAndAgreements from "./pages/terms-agreements/termsAndAgreements";
import OtpVerification from "./pages/auth/OTP";
import NewPassword from "./pages/auth/newPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />



        <Route path="/pricing-plan" element={<Packages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/petition-form" element={<PetitionForm />} />
        <Route path="/prepare-contract" element={<PrepareContract />} />
        <Route path="/terms-agreements" element={<TermsAndAgreements />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
