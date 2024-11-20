import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './pages/auth/signin'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Packages from './pages/auth/packages'
import Home from './pages/home/Home'
import PetitionForm from './pages/petition-form/PetitionForm'
import PrepareContract from './pages/prepare-contract/prepareContract'

function App() {

  return (
    <>
          <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prtition-form" element={<PetitionForm />} />
          <Route path="/prepare-contract" element={<PrepareContract />} />





          </Routes>

    </>
  )
}

export default App

