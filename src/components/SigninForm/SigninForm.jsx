import React from 'react'
import './SigninForm.css'

import Button from "../Button/Button"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function SigninForm() {
  const [formData, setFormData] = React.useState({})
  const [error, setError] = React.useState("")

  function handleChange(event) {
    setError("")
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checked" ? checked : value
      }
    })
  }
  console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log(error.code)
      if (error.code === "auth/invalid-credential") {
        setError("The password you entered does not match to this user.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid emaial address.");
      }
      else {
        setError(error.message);
      }
    });
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className='flex flex-col gap-4 w-full h-fit'>
        <input 
          type="text" 
          placeholder="Email Address"
          name='email'
          value={formData.email}
          onChange={(event) => handleChange(event)}
          className='border-[#D0D5DD] border-2 rounded-lg  px-5 py-2 w-full rounded'
        />
        <input 
          type="password" 
          placeholder="Password"
          name='password'
          value={formData.password}
          onChange={(event) => handleChange(event)}
          className='border-[#D0D5DD] border-2 rounded-lg px-5 py-2 w-full rounded'
        />
        <span className='text-end italic text-[#574240] font-bold text-xs'><a href="./ForgotPassword">Forgot Password</a></span>
        {/* <PhoneNumber />
        <HiddenInput /> */}
        <Button className='bg-red-700 w-full text-center py-3 text-white mt-4'>Sign In</Button>
      </form>
      { error && 
        <div className='text-red-700 text-center mt-2 text-sm'>
          {error}
        </div>
      }
    </div>
  )
}