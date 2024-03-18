import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Signin from './pages/Signin'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from "./pages/ForgotPassword"

export function PageRoutes () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/>} />
                <Route exact path="/signup" element={<Signup/>}/> 
                <Route eaxct path="/signin" element={<Signin/>}/>
                <Route exact path="/verifyemail" element={<VerifyEmail/>}/>
                <Route exact path='/forgotpassword' element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    )
}