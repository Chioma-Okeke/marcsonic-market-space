import React from 'react'
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

import Button from "../components/Button/Button"
import LogoNav from "../components/LogoNav"
import { auth } from "../firebase"

function VerifyEmail() {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const navigateTo = useNavigate();


  function handleChange(event) {
    setEmail(event.target.value)
  }
  console.log(email)

  function resetPassword(event) {
    event.preventDefault()
    sendPasswordResetEmail(auth,email)
    alert("Email has been sent. Kindly check your inbox")
    navigateTo("/signin")
    // .catch((error) => {
    //   setError(`${error.message}`)
    // })
  }

  return (
    <div>
      <LogoNav />
      <section className='mt-32 flex items-center h-[1000] '>
        <div className='2xl:w-[36.9%] lg:w-[45%] mx-auto text-center'>
            <h1 className='text-red-500 font-bold text-lg mb-6 md:text-xl lg:text-3xl'>Forgot Password?</h1>
            <p className='text-[#B3B1B1] text-sm w-[530px] mx-auto'>
                Don’t worry, resetting your password is easy. Just enter the email address you used to sign up to Kwek.
            </p>
            <form onSubmit={(event) => resetPassword(event)}>
              <input 
                type="text" 
                placeholder='Email Address' 
                onChange={(event) => handleChange(event)} 
                className='border-[#D0D5DD] border-2 rounded-lg  px-5 py-2 w-full rounded mt-12'
                value={email}
              />
              <Button className="bg-red-700 mt-7" >Request Reset Link</Button>
            </form>
            {error && 
              <div>
                {error}
              </div>
            }
            <p className='text-sm mt-4'>Do you remember your password? <span className='font-bold'><a href="./Signin">Try Logging in</a></span></p>
        </div>
      </section>
    </div>
  )
}

export default VerifyEmail