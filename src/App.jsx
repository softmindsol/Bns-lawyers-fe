import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './pages/auth/signin'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import Packages from './pages/auth/packages'

function App() {

  return (
    <>
          <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/packages" element={<Packages />} />


          </Routes>

    </>
  )
}

export default App

