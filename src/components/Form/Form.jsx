import React from 'react'
import './Form.css'

import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import Button from "../Button/Button"

export default function Form() {
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
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, formData.email, formData.password, formData.displayName, formData.phoneNumber)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      setError(error.message)
      // ..
    });
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className='flex flex-col gap-y-4 w-full'>
          <input 
            type="text" 
            placeholder="Full name"
            name="displayName"
            value={formData.displayName}
            onChange={(event) => handleChange(event)}
            className='border-[#D0D5DD] border-2 rounded-lg  px-5 py-2 w-full rounded'
          />
          <input 
            type="text" 
            placeholder="Email Address"
            name='email'
            value={formData.email}
            onChange={(event) => handleChange(event)}
            className='border-[#D0D5DD] border-2 rounded-lg  px-5 py-2 w-full rounded'
          />
          <input 
            type="phone" 
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
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
          {/* <PhoneNumber />
          <HiddenInput /> */}
          <Button className="mb-0 bg-red-700">Create Account</Button>
          
      </form>
      {error && 
        <div className='text-red-700 text-center mt-2'>
          {error}
        </div>
      }
    </div>
    
  )
}