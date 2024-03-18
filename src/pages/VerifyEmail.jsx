import React from 'react'
import Button from "../components/Button/Button"
import LogoNav from "../components/LogoNav"

function VerifyEmail() {
  return (
    <div className='relative'>
      <LogoNav />
      <section className='mt-32 mx-16 flex max-h-lvh'>
        <div className='w-[49.3%] mx-auto text-center'>
          <h1 className='text-red-500 font-bold text-lg text-center mb-9 md:text-xl lg:text-2xl'>Verify your email to finish sigining up to Marcsonic</h1>
          <div className='w-[78.6%] mx-auto text-center text-sm grid gap-3'>
            <p>Thank you for choosing us</p>
            <p>
                Please confirm that <span className='font-bold'>godsonakinbayo@gmail.com</span> is your email address by clicking the button below or 
                use this link <a className='w-3 underline text-orange-500' href="https://courselify.com/confirm-email/SMLSDSV/650000500005000000">here </a>  
                within the next 24 hours
            </p>
            <Button buttonText="Verify your email address"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyEmail