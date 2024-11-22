import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/SignUp";
import Packages from "./pages/auth/packages";
import Home from "./pages/home/Home";
import PetitionForm from "./pages/petition-form/PetitionForm";
import PrepareContract from "./pages/prepare-contract/prepareContract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/petition-form" element={<PetitionForm />} />
        <Route path="/prepare-contract" element={<PrepareContract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
